import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  ClipboardCheck,
  Wrench as WrenchIcon,
  CreditCard,
  PlayCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { WorkCollage } from "@/components/shared/work-collage";
import { Separator } from "@/components/ui/separator";

const processChecklist = [
  "Initial Consultation",
  "Comprehensive Assessment",
  "Transparent Pricing",
  "Efficient Execution",
];

const processSteps = [
  {
    icon: CalendarCheck,
    title: "Online Booking",
    description: "Pick a service and a slot in a couple of clicks.",
  },
  {
    icon: ClipboardCheck,
    title: "Problem Analysis",
    description: "A technician reviews the job before arriving on-site.",
  },
  {
    icon: WrenchIcon,
    title: "Repairs Process",
    description: "Licensed pros do the work, tracked start to finish.",
  },
  {
    icon: CreditCard,
    title: "Fix & Pay",
    description: "Pay securely only once the job is complete.",
  },
];

const whyChooseUs = [
  "One Year Warranty",
  "100% Satisfaction",
  "On-Time Services",
  "High-Quality Spares",
  "Honest Pricing",
  "Online Booking",
];

const timeline = [
  { year: "2019", label: "Founded" },
  { year: "2021", label: "500+ Jobs" },
  { year: "2023", label: "50 Cities" },
  { year: "2026", label: "3,000+ Pros" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=80&auto=format&fit=crop"
      />

      {/* PROCESS / WHAT WE DO */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2">
          <WorkCollage />

          <div className="pt-4">
            <SectionHeading
              eyebrow="Who We Are"
              title="Tell About Our Process & What We Do"
            />
            <p className="mt-4 text-muted-foreground">
              FixItNow started as a small dispatch board for local technicians
              and grew into a full booking platform. Every job still follows the
              same reliable path — from the moment you book to the moment the
              work is signed off.
            </p>

            <ul className="mt-6 space-y-3">
              {processChecklist.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Button asChild className="mt-8 px-6 py-5">
              <Link href="/services">Browse Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* VIDEO CTA */}
      <section className="relative overflow-hidden px-6 py-28 text-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80&auto=format&fit=crop"
          alt="FixItNow team at work"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-blue/50" />
        <div className="relative mx-auto max-w-2xl">
          <PlayCircle className="mx-auto h-14 w-14 text-primary" />
          <h2 className="mt-6 font-display text-3xl sm:text-4xl">
            It&apos;s Finally Easy To Get Things Fixed The Right Way
          </h2>
          <div className="mt-8 flex justify-center gap-3">
            <Button className=" px-6 py-5" asChild>
              <Link href="/services">Explore More</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white px-6 py-5"
            >
              <Link href="/technicians">Meet The Pros</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PROCESS ICONS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <div
            key={step.title}
            className={`flex flex-col items-center gap-3 px-6 py-12 text-center ${
              i === 1
                ? "bg-primary text-primary-foreground"
                : "bg-ink text-white"
            }`}
          >
            <step.icon className="h-8 w-8" />
            <h3 className="font-display text-lg uppercase">{step.title}</h3>
            <p className="text-sm opacity-75">{step.description}</p>
          </div>
        ))}
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Your Friendly Handyman"
            />
          </div>

          <div className="relative mx-auto mt-10 h-72 max-w-3xl overflow-hidden rounded-lg sm:h-96">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80&auto=format&fit=crop"
              alt="Technician installing equipment"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Separator className="max-w-7xl mx-auto" />
      {/* WHY WE'RE DIFFERENT */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why We Are Different"
              title="Trust, Diligence, Succeed"
            />
            <p className="mt-4 text-black/60">
              We built FixItNow on a simple idea — every job deserves a paper
              trail, so customers always know who&apos;s coming, when, and for
              how much.
            </p>
            <Button asChild className="mt-6 px-6 py-5">
              <Link href="/register">Join As A Technician</Link>
            </Button>
          </div>
          <div className="relative h-80 overflow-hidden rounded-lg sm:h-96">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
              alt="FixItNow technician"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
            />
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-6 border-t border-black/10 pt-10 sm:grid-cols-4">
          {timeline.map((point) => (
            <div key={point.year} className="text-center">
              <div className="font-display text-3xl text-primary">
                {point.year}
              </div>
              <div className="mt-1 text-sm uppercase text-black/60">
                {point.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
