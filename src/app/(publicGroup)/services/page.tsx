import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PageHero } from "@/components/shared/page-hero";
import { services } from "./data";

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

      {/* INTRO + GRID */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-[2px] text-primary">
                Our Services
              </span>
              <h2 className="mt-2.5 max-w-lg font-display text-4xl">
                We&apos;re A Different Kind Of Handyman Service
              </h2>
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

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group"
              >
                <div className="relative h-52 overflow-hidden rounded-lg">
                  <Image
                    src={service.image}
                    alt={service.label}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3 border-b border-border pb-4">
                  <div>
                    <h3 className="text-lg normal-case tracking-normal group-hover:text-primary">
                      {service.label}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-primary px-6 py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl">
          <span className="font-mono text-xs uppercase tracking-[2px]">
            Testimonials
          </span>
          <h2 className="mt-2.5 mb-8 font-display text-4xl">
            What Our Clients Say About Us
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-lg bg-white p-6 text-foreground shadow-sm"
              >
                <p className="text-sm text-muted-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-sm font-semibold">
                    {testimonial.name}
                  </div>
                </div>
              </div>
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
