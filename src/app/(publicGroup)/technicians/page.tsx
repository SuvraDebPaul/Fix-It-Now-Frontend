import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { technicians } from "./data";

export default function TechniciansPage() {
  return (
    <>
      <PageHero
        title="Technician Team"
        image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=80&auto=format&fit=crop"
      />

      {/* TEAM GRID */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
            <div>
              <SectionHeading
                eyebrow="Team Members"
                title="Our Professional Technicians"
              />
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Every technician on FixItNow is identity-verified before their
              profile goes live, so you always know who&apos;s showing up.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {technicians.map((member) => (
              <Link key={member.id} href={`/technicians/${member.id}`} className="group">
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-3 text-base font-semibold normal-case tracking-normal group-hover:text-primary">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
                <span className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3 w-3 fill-primary text-primary" />
                  {member.rating} ({member.reviewCount})
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden px-6 py-28 text-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1600&q=80&auto=format&fit=crop"
          alt="Technician at work"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-3xl text-primary sm:text-4xl">
            High-Quality Workmanship At Great Prices
          </h2>
          <div className="mt-8 flex justify-center gap-3">
            <Button asChild>
              <Link href="/services">Read More</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Book Service</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="Join The Team"
            title="Are You A Skilled Technician?"
            titleClassName="text-3xl"
          />
          <p className="mt-4 text-muted-foreground">
            Set your own availability and let bookings, payments, and job
            tracking come to you.
          </p>
          <Button asChild className="mt-6">
            <Link href="/register">Apply As A Technician</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
