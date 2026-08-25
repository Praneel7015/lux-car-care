"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SERVICES, VEHICLE_TYPES } from "@/lib/services";

type FormState = "idle" | "loading" | "success" | "error";

interface FieldProps {
  label: string;
  id: string;
  required?: boolean;
  children: React.ReactNode;
  error?: string;
  hint?: string;
}

function Field({ label, id, required, children, error, hint }: FieldProps) {
  const errorId = `${id}-error`;
  const hintId = hint ? `${id}-hint` : undefined;
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-medium"
        style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-body)" }}
      >
        {label}
        {required && (
          <span className="ml-1" style={{ color: "var(--color-gold)" }} aria-hidden="true">
            *
          </span>
        )}
      </label>
          {hint && (
        <p id={hintId} className="text-xs" style={{ color: "var(--color-muted)" }}>
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p
          id={errorId}
          className="text-xs"
          style={{ color: "#d63638" }}
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </div>
  );
}

const inputBase =
  "w-full rounded-xl border px-4 py-3 text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB627] focus-visible:ring-offset-1";

const selectBase =
  "w-full rounded-xl border px-4 py-3 text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB627] focus-visible:ring-offset-1 cursor-pointer";

const inputStyle = {
  borderColor: "var(--color-border)",
  backgroundColor: "var(--color-parchment)",
  color: "var(--color-mahogany)",
  fontFamily: "var(--font-body)",
} as const;

function buildDescribedBy(...ids: (string | undefined)[]) {
  return ids.filter(Boolean).join(" ") || undefined;
}

export function BookingForm() {
  const searchParams = useSearchParams();
  const preService = searchParams.get("service") ?? "";

  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  const validate = (fd: FormData): Record<string, string> => {
    const errs: Record<string, string> = {};
    if (!fd.get("name")) errs.name = "Enter your full name.";
    const phone = String(fd.get("phone") ?? "");
    if (!phone) errs.phone = "Enter your phone number.";
    else if (!/^[+\d][\d\s\-()+]{7,}$/.test(phone))
      errs.phone = "Enter a valid phone number, e.g. +91 98765 43210.";
    if (!fd.get("vehicle")) errs.vehicle = "Select your vehicle type.";
    if (!fd.get("service")) errs.service = "Select a service.";
    const dt = String(fd.get("preferred_datetime") ?? "");
    if (dt) {
      const selected = new Date(dt);
      const now = new Date();
      if (selected < now) {
        errs.preferred_datetime = "Please pick a future date and time.";
      } else {
        const h = selected.getHours() + selected.getMinutes() / 60;
        if (h < 6 || h >= 21) {
          errs.preferred_datetime = "We're open 6 AM – 9 PM. Please pick a time within those hours.";
        }
      }
    }
    return errs;
  };

  const validateField = (name: string, value: string) => {
    const fd = new FormData();
    fd.set(name, value);
    // Reuse full validation but only return the relevant field error
    const all = validate(fd);
    return all[name];
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    const err = validateField(name, value);
    setErrors((prev) => {
      const next = { ...prev };
      if (err) next[name] = err;
      else delete next[name];
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const errs = validate(fd);
    // Mark all fields touched on submit
    setTouched({ name: true, phone: true, vehicle: true, service: true, preferred_datetime: true });

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Move focus to the error summary
      requestAnimationFrame(() => errorSummaryRef.current?.focus());
      return;
    }
    setErrors({});
    setState("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const json = await res.json();
      if (json.success) {
        setState("success");
        formRef.current?.reset();
        setTouched({});
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div
        className="rounded-2xl border p-8 text-center"
        style={{ borderColor: "var(--color-gold)", backgroundColor: "rgba(201,149,42,0.06)" }}
        role="status"
        aria-live="polite"
      >
        <div
          className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full"
          style={{ backgroundColor: "var(--color-mahogany)" }}
          aria-hidden="true"
        >
          <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-lg font-bold" style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-body)" }}>
          You're all set — we'll be in touch shortly
        </h3>
        <p className="mt-2 text-sm" style={{ color: "var(--color-stone)" }}>
          Your request is with us. Expect a confirmation call or WhatsApp message soon.
        </p>
        <p className="mt-1 text-sm font-medium" style={{ color: "var(--color-mahogany)" }}>
          <a href="tel:+919972090190" className="hover:underline">+91 99720 90190</a>
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-5 cursor-pointer rounded-xl px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--color-gold)", color: "var(--color-obsidian)", fontFamily: "var(--font-body)" }}
        >
          Book Another
        </button>
      </div>
    );
  }

  const hasErrors = Object.keys(errors).length > 0 && Object.keys(touched).length > 0;

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Web3Forms hidden fields */}
      <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ""} />
      <input type="hidden" name="subject" value="New Car Wash Booking — Luxury Car Care" />
      <input type="hidden" name="from_name" value="Luxury Car Care Website" />
      <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" tabIndex={-1} />

      {/* Error summary — focused after failed submit */}
      {state === "error" && (
        <div
          className="rounded-xl border px-4 py-3 text-sm"
          style={{ borderColor: "#d63638", color: "#d63638", backgroundColor: "rgba(214,54,56,0.05)" }}
          role="alert"
          aria-live="assertive"
        >
          Something went wrong. Please try again or{" "}
          <a href="tel:+919972090190" className="underline">call us directly</a>.
        </div>
      )}

      {hasErrors && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          aria-labelledby="error-summary-title"
          className="rounded-xl border px-4 py-3 text-sm"
          style={{ borderColor: "#d63638", backgroundColor: "rgba(214,54,56,0.04)" }}
        >
          <p id="error-summary-title" className="mb-2 font-semibold" style={{ color: "#d63638" }}>
            Just a couple of things to check:
          </p>
          <ul className="list-disc pl-4" style={{ color: "#d63638" }}>
            {Object.entries(errors).map(([field, msg]) => (
              <li key={field}>
                <a href={`#${field}`} className="underline underline-offset-2">{msg}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" id="name" required error={touched.name ? errors.name : undefined}>
          <input
            id="name"
            type="text"
            name="name"
            autoComplete="name"
            spellCheck={false}
            className={inputBase}
            style={{ ...inputStyle, borderColor: (touched.name && errors.name) ? "#d63638" : "var(--color-border)" }}
            placeholder="Rahul Mehta…"
            aria-required="true"
            aria-invalid={!!(touched.name && errors.name)}
            aria-describedby={buildDescribedBy(touched.name && errors.name ? "name-error" : undefined)}
            onBlur={handleBlur}
          />
        </Field>

        <Field label="Phone Number" id="phone" required error={touched.phone ? errors.phone : undefined} hint="e.g. +91 98765 43210">
          <input
            id="phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            spellCheck={false}
            className={inputBase}
            style={{ ...inputStyle, borderColor: (touched.phone && errors.phone) ? "#d63638" : "var(--color-border)" }}
            placeholder="+91 98765 43210…"
            aria-required="true"
            aria-invalid={!!(touched.phone && errors.phone)}
            aria-describedby={buildDescribedBy("phone-hint", touched.phone && errors.phone ? "phone-error" : undefined)}
            onBlur={handleBlur}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Vehicle Type" id="vehicle" required error={touched.vehicle ? errors.vehicle : undefined}>
          <select
            id="vehicle"
            name="vehicle"
            className={selectBase}
            style={{ ...inputStyle, borderColor: (touched.vehicle && errors.vehicle) ? "#d63638" : "var(--color-border)" }}
            defaultValue=""
            aria-required="true"
            aria-invalid={!!(touched.vehicle && errors.vehicle)}
            aria-describedby={buildDescribedBy(touched.vehicle && errors.vehicle ? "vehicle-error" : undefined)}
            onBlur={handleBlur}
          >
            <option value="" disabled>Select vehicle type…</option>
            {VEHICLE_TYPES.map((v) => (
              <option key={v.value} value={v.value}>{v.label}</option>
            ))}
          </select>
        </Field>

        <Field label="Service" id="service" required error={touched.service ? errors.service : undefined}>
          <select
            id="service"
            name="service"
            className={selectBase}
            style={{ ...inputStyle, borderColor: (touched.service && errors.service) ? "#d63638" : "var(--color-border)" }}
            defaultValue={preService}
            aria-required="true"
            aria-invalid={!!(touched.service && errors.service)}
            aria-describedby={buildDescribedBy(touched.service && errors.service ? "service-error" : undefined)}
            onBlur={handleBlur}
          >
            <option value="" disabled>Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        label="Preferred Date & Time"
        id="preferred_datetime"
        error={touched.preferred_datetime ? errors.preferred_datetime : undefined}
        hint="Open every day, 6:00 AM – 9:00 PM"
      >
        <input
          id="preferred_datetime"
          type="datetime-local"
          name="preferred_datetime"
          autoComplete="off"
          min={new Date().toISOString().slice(0, 16)}
          className={inputBase}
          style={{ ...inputStyle, borderColor: (touched.preferred_datetime && errors.preferred_datetime) ? "#d63638" : "var(--color-border)" }}
          aria-invalid={!!(touched.preferred_datetime && errors.preferred_datetime)}
          aria-describedby={buildDescribedBy("preferred_datetime-hint", touched.preferred_datetime && errors.preferred_datetime ? "preferred_datetime-error" : undefined)}
          onBlur={handleBlur}
        />
      </Field>

      <Field label="Message (optional)" id="message">
        <textarea
          id="message"
          name="message"
          rows={3}
          className={inputBase}
          style={{ ...inputStyle, resize: "vertical" }}
          placeholder="Any special requests or notes…"
        />
      </Field>

      <button
        type="submit"
        disabled={state === "loading"}
        className="cursor-pointer rounded-xl px-6 py-3.5 text-base font-semibold transition-opacity duration-150 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        style={{
          backgroundColor: "var(--color-gold)",
          color: "var(--color-obsidian)",
          fontFamily: "var(--font-body)",
        }}
        aria-busy={state === "loading"}
      >
        {state === "loading" ? "Sending…" : "Send Booking Request"}
      </button>

      <p className="text-xs" style={{ color: "var(--color-muted)" }}>
        We&apos;ll confirm your booking via WhatsApp or phone call shortly. Fields marked{" "}
        <span style={{ color: "var(--color-gold)" }} aria-hidden="true">*</span>{" "}
        <span className="sr-only">with an asterisk</span> are required.
      </p>
    </form>
  );
}

