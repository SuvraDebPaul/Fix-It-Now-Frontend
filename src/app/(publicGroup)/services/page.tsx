import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { services, serviceCategories } from "./data";
import { ServicesExplorer } from "./services-explorer";

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
];

const gallery = [
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=300&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=300&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=300&q=80&auto=format&fit=crop",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        image="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600&q=80&auto=format&fit=crop"
      />

      {/* INTRO */}
      <section className="px-6 pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
            <div>
              <SectionHeading
                eyebrow="Our Services"
                title="We're A Different Kind Of Handyman Service"
                titleClassName="max-w-lg"
              />
              <p className="mt-2 max-w-lg text-sm text-muted-foreground">
                Every listing below is offered directly by a verified
                technician — pick the one that fits, and book them
                individually.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/contact">Get A Quote</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/register">Become a Technician</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MARKETPLACE: FILTERS + GRID + PAGINATION */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <ServicesExplorer services={services} categories={serviceCategories} />
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                quote={testimonial.quote}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </div>
      </section>

      {/* REQUEST A QUOTE STRIP */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl rounded-lg bg-brand-blue p-8 text-white sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-[2px] text-white/70">
                Don&apos;t Hesitate To Ask
              </span>
              <h3 className="mt-1 font-display text-2xl">Request A Quote</h3>
            </div>
          </div>
          <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
            <Input
              placeholder="Your Name"
              className="border-white/20 bg-white/10 text-white placeholder:text-white/60"
            />
            <Input
              placeholder="Email"
              className="border-white/20 bg-white/10 text-white placeholder:text-white/60"
            />
            <Input
              placeholder="Service Needed"
              className="border-white/20 bg-white/10 text-white placeholder:text-white/60"
            />
            <Button type="submit">Get Estimate Quote</Button>
          </form>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-4 sm:grid-cols-5">
          {gallery.map((src) => (
            <div key={src} className="relative h-28 overflow-hidden rounded-lg">
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
