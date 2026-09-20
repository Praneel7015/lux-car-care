import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/content/blog/posts";
import { BUSINESS } from "@/lib/business";
import { OG_IMAGE } from "@/lib/media";

export const metadata: Metadata = {
  title: "Car Care Blog - Tips for Bidar Drivers",
  description:
    "Practical car wash and detailing guides for Bidar - wash frequency, express vs detailing, ceramic coating, and what a professional wash includes.",
  alternates: { canonical: `${BUSINESS.siteUrl}/blog` },
  openGraph: {
    title: "Car Care Blog - Luxury Car Care",
    description: "Guides on washing, detailing, and protecting your car in Bidar.",
    url: `${BUSINESS.siteUrl}/blog`,
    images: [{ url: OG_IMAGE.src, width: 1200, height: 800, alt: OG_IMAGE.alt }],
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="py-16" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <h1
            className="text-4xl font-bold sm:text-5xl"
            style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
          >
            Car Care Blog
          </h1>
          <p className="mt-4 max-w-xl text-base" style={{ color: "var(--color-stone)" }}>
            Straight answers for Bidar drivers - when to wash, what each package does, and how to keep paint looking sharp.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ backgroundColor: "var(--color-parchment)" }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border transition-opacity hover:opacity-95"
                style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}
              >
                <div className="relative" style={{ aspectRatio: "16/10" }}>
                  <Image
                    src={post.cover.src}
                    alt={post.cover.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <time
                    dateTime={post.date}
                    className="font-mono text-[10px] uppercase tracking-widest"
                    style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
                  >
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <h2
                    className="mt-2 text-lg font-bold leading-snug"
                    style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
                  >
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: "var(--color-stone)" }}>
                    {post.description}
                  </p>
                  <span
                    className="mt-4 font-mono text-xs uppercase tracking-widest"
                    style={{ color: "var(--color-gold-text)", fontFamily: "var(--font-mono)" }}
                  >
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}
