interface TestimonialCardProps {
  quote: string;
  author: string;
}

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <figure
      className="flex flex-col rounded-2xl border p-6"
      style={{
        backgroundColor: "var(--color-parchment)",
        borderColor: "var(--color-border)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <span
        className="mb-3 block text-4xl leading-none"
        style={{ color: "var(--color-gold)" }}
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <blockquote
        className="flex-1 text-sm leading-relaxed"
        style={{ color: "var(--color-mahogany)" }}
      >
        {quote}
      </blockquote>
      <figcaption
        className="mt-4 font-mono text-xs font-medium"
        style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
      >
        — {author}
      </figcaption>
    </figure>
  );
}
