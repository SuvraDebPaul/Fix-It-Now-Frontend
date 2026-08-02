import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { PageHero } from "@/components/shared/page-hero";
import { blogPosts } from "./data";

const testimonials = [
  {
    name: "Rebecca Laura",
    quote: "Booked, fixed, done — the whole thing took one afternoon.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80&auto=format&fit=crop",
  },
  {
    name: "Nicholas Justin",
    quote: "Transparent pricing and the technician actually showed up on time.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&auto=format&fit=crop",
  },
  {
    name: "Alexander Dennis",
    quote:
      "Ticket tracking made the whole job feel accountable, start to finish.",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&q=80&auto=format&fit=crop",
    dark: true,
  },
  {
    name: "Michelle Carol",
    quote: "Easiest home repair experience I've had — no phone tag at all.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="News & Blogs"
        image="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600&q=80&auto=format&fit=crop"
      />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <SectionHeading
            eyebrow="Blogs & Articles"
            title="Read Our Latest Blogs"
            titleClassName="mb-12"
          />

          <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2">
            {blogPosts.map((post, i) => {
              const isDark = i % 3 === 2;
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`group flex flex-col overflow-hidden rounded-lg sm:flex-row ${
                    isDark ? "bg-ink text-white" : "bg-card"
                  }`}
                >
                  <div className="relative h-52 shrink-0 sm:h-auto sm:w-1/2">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-6">
                    <span
                      className={`font-mono text-xs ${isDark ? "text-white/60" : "text-muted-foreground"}`}
                    >
                      {post.date}
                    </span>
                    <h3 className="mt-2 mb-4 text-lg normal-case tracking-normal">
                      {post.title}
                    </h3>
                    <Button size="sm" className="w-fit">
                      Read More
                    </Button>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center gap-2">
            {["1", "2", "3"].map((n) => (
              <span
                key={n}
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium ${
                  n === "1"
                    ? "bg-primary text-primary-foreground"
                    : "border border-border"
                }`}
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-primary px-6 py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say About Us"
            eyebrowClassName="text-primary-foreground"
            titleClassName="mb-8"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                quote={testimonial.quote}
                avatar={testimonial.avatar}
                dark={testimonial.dark}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
