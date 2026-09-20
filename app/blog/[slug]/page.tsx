import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getAllPostSlugs, getPostBySlug } from "@/content/blog/posts";
import { BUSINESS } from "@/lib/business";
import { getServiceById } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Blog" };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${BUSINESS.siteUrl}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${BUSINESS.siteUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.cover.src, width: 1200, height: 800, alt: post.cover.alt }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedService = post.relatedServiceId
    ? getServiceById(post.relatedServiceId)
    : undefined;
  const morePosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    image: post.cover.src,
    author: { "@type": "Organization", name: BUSINESS.name },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.siteUrl,
    },
    mainEntityOfPage: `${BUSINESS.siteUrl}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <header className="py-16" style={{ backgroundColor: "var(--color-surface)" }}>
          <div className="mx-auto max-w-3xl px-5 lg:px-16">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
              <Link href="/blog" className="hover:underline">Blog</Link>
            </p>
            <time
              dateTime={post.date}
              className="font-mono text-xs"
              style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
            >
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1
              className="mt-3 text-4xl font-bold leading-tight sm:text-5xl"
              style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
            >
              {post.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--color-stone)" }}>
              {post.description}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-5 lg:px-16">
          <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "16/9" }}>
            <Image
              src={post.cover.src}
              alt={post.cover.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </div>

        <div className="section-pad" style={{ backgroundColor: "var(--color-parchment)" }}>
          <div className="mx-auto max-w-3xl px-5 lg:px-16">
            <div className="flex flex-col gap-5">
              {post.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed" style={{ color: "var(--color-mahogany)" }}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div
              className="mt-12 rounded-2xl border p-6"
              style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}
            >
              <h2 className="text-xl font-bold" style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}>
                Ready for a cleaner car?
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--color-stone)" }}>
                Visit us in {BUSINESS.addressLocality} or book a slot online.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href={relatedService ? `/contact?service=${relatedService.id}` : "/contact"}
                  className="rounded-xl px-5 py-3 text-sm font-bold"
                  style={{ backgroundColor: "var(--color-gold)", color: "var(--color-obsidian)", fontFamily: "var(--font-body)" }}
                >
                  Book a Wash
                </Link>
                {relatedService && (
                  <Link
                    href={`/services/${relatedService.id}`}
                    className="rounded-xl border px-5 py-3 text-sm font-bold"
                    style={{ borderColor: "var(--color-border)", color: "var(--color-mahogany)", fontFamily: "var(--font-body)" }}
                  >
                    See {relatedService.name}
                  </Link>
                )}
              </div>
            </div>

            {morePosts.length > 0 && (
              <div className="mt-14">
                <h2 className="mb-6 text-xl font-bold" style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}>
                  More guides
                </h2>
                <ul className="flex flex-col gap-3">
                  {morePosts.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}`} className="text-sm font-semibold underline-offset-2 hover:underline" style={{ color: "var(--color-mahogany)" }}>
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </article>

      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}
