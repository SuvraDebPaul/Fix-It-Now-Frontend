import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ThumbsUp, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/shared/section-heading";
import { WorkCollage } from "@/components/shared/work-collage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { blogPosts } from "./blog/data";
import { getAllTechnician } from "@/features/technicians/api/technicians.api";
import { Separator } from "@/components/ui/separator";
import { LogoMarquee } from "@/components/shared/logo-marquee";
import Testimonial from "@/components/shared/testimonial";

const processChecklist = [
  "Initial Consultation",
  "Comprehensive Assessment",
  "Transparent Pricing",
  "Efficient Execution",
];

const services = [
  {
    label: "General Painting",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80&auto=format&fit=crop",
  },
  {
    label: "Electrical Work",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80&auto=format&fit=crop",
  },
  {
    label: "Carpentry Works",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80&auto=format&fit=crop",
  },
  {
    label: "Plumbing Repairs",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80&auto=format&fit=crop",
  },
];

const quoteFeatures = [
  { icon: ShieldCheck, title: "One Year Warranty" },
  { icon: ThumbsUp, title: "100% Satisfaction" },
  { icon: Clock, title: "On-Time Services" },
];

const fixThingsStats = [
  { value: "350+", label: "Successful Projects" },
  { value: "120+", label: "Happy Clients" },
  { value: "65+", label: "Team Members" },
  { value: "100%", label: "Client Satisfaction" },
];

const fixThingsGrid = [
  {
    label: "Pool Cleaning Service",
    image:
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=500&q=80&auto=format&fit=crop",
  },
  {
    label: "Kitchen Furniture Repair",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&q=80&auto=format&fit=crop",
    highlight: true,
  },
  {
    label: "Fridge Repair Service",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&q=80&auto=format&fit=crop",
  },
  {
    label: "Window Installation",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&q=80&auto=format&fit=crop",
  },
  {
    label: "Welding Machine Service",
    image:
      "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=500&q=80&auto=format&fit=crop",
  },
  {
    label: "Furniture Assembly",
    image:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=500&q=80&auto=format&fit=crop",
  },
];

const homeBlogPosts = blogPosts.slice(0, 2);

const faqs = [
  {
    question: "How do I book a technician?",
    answer:
      "Browse services, pick a category, and choose an open slot on the technician's live availability calendar. You'll get a confirmation once they accept the job.",
  },
  {
    question: "Are technicians background-checked?",
    answer:
      "Yes — every technician on FixItNow goes through identity verification before their profile goes live.",
  },
  {
    question: "How does payment work?",
    answer:
      "You pay securely once your technician accepts the job. Funds are only released after the work is marked complete.",
  },
  {
    question: "Can I reschedule or cancel a booking?",
    answer:
      "Yes, from your dashboard up until the technician begins the job, subject to their cancellation window.",
  },
];

export default async function Home() {
  const allTechnicians = await getAllTechnician();
  const homeTeam = allTechnicians.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative -mt-15.25 overflow-hidden pt-15.25 text-white">
        <Image
          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600&q=80&auto=format&fit=crop"
          alt="Technician repairing a fixture"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/80 to-ink/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <span className="font-mono text-sm uppercase tracking-[2px] text-primary">
            Dispatch Ready · Licensed Pros Only
          </span>
          <h1 className="mt-4 max-w-2xl font-display text-5xl font-extrabold uppercase text-white sm:text-6xl">
            Honest, Trustworthy, And Does Good Work.
          </h1>
          <p className="mt-6 max-w-lg normal-case text-white/65">
            Book vetted technicians for repairs, installs, and maintenance —
            track the job from request to completion, start to finish.
          </p>
          <div className="mt-9 flex gap-2.5">
            <Button className="px-6 py-5" asChild>
              <Link href="/services">Browse Services</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary bg-transparent text-white hover:bg-white/10 hover:text-white px-6 py-5"
            >
              <Link href="/register">Become a Technician</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PROCESS / WHAT WE DO */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2">
          <WorkCollage />

          <div className="pt-4">
            <SectionHeading
              eyebrow="About Us"
              title="Tell About Our Process & What We Do"
            />
            <p className="mt-4 text-muted-foreground">
              Every job on FixItNow follows the same reliable path — from the
              moment you book to the moment the work is signed off, so you
              always know where things stand.
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

            <div className="mt-8 flex flex-wrap items-center gap-6 ">
              <Button asChild className="px-6 py-5">
                <Link href="/about">Read More</Link>
              </Button>
              <Separator orientation="vertical" />
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">Call</div>
                  <div className="font-mono text-sm font-semibold">
                    +880 1700 023050
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE SERVICES */}
      <section className="bg-primary px-6 py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Services"
            title="A Comprehensive Set Of Services"
            eyebrowClassName="text-primary-foreground"
          />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.label}
                className="group relative h-64 overflow-hidden rounded-lg"
              >
                <Image
                  src={service.image}
                  alt={service.label}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-base font-semibold text-white normal-case tracking-normal">
                    {service.label}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex gap-3 justify-center">
            <Button
              asChild
              className="bg-ink text-white hover:text-black hover:bg-transparent hover:border-ink px-6 py-5 transition-all duration-500"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* REQUEST A QUOTE */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Get A Free Quote"
              title="Request A Quote"
              titleClassName="mb-8"
            />
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Email Address" />
              </div>
              <Textarea placeholder="Tell us what needs fixing..." rows={4} />
              <Button className="px-6 py-5" type="submit">
                Get Estimate Quote
              </Button>
            </form>

            <div className="mt-10 rounded-lg bg-primary p-6 text-primary-foreground">
              <h3 className="font-display text-xl">Need Something Done?</h3>
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {quoteFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-center gap-2">
                    <feature.icon className="h-5 w-5" />
                    <span className="text-sm font-medium">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative h-80 overflow-hidden rounded-lg sm:h-105">
            <Image
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=700&q=80&auto=format&fit=crop"
              alt="Friendly handyman"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* WE FIX THINGS */}
      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What We Do"
            title="We Fix Things Around Your House So You Don't Have To."
            titleClassName="text-5xl"
          />

          <div className="my-16 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {fixThingsStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-5xl text-primary">
                  {stat.value}
                </div>
                <div className="font-mono text-sm uppercase text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {fixThingsGrid.map((item) => (
              <div
                key={item.label}
                className={`relative h-60 overflow-hidden rounded-lg hover:ring-primary hover:ring-2 transition-all duration-300 ${
                  item.highlight ? "ring-2 ring-primary" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <span className="absolute inset-x-0 bottom-0 p-4 font-semibold normal-case tracking-normal text-white">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild className="mt-16 px-6 py-5">
              <Link href="/services">See All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="border-b border-border px-6 py-16">
        <LogoMarquee />
      </section>

      {/* CTA BANNER */}
      <section className="bg-primary px-6 py-16 text-center text-primary-foreground">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl">
            High-Quality Workmanship At Great Prices
          </h2>
          <div className="mt-6 flex justify-center gap-3">
            <Button
              asChild
              className="bg-ink text-white hover:bg-ink/90 px-6 py-5"
            >
              <Link href="/blog">Read More</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-ink bg-transparent text-ink hover:bg-ink hover:text-white px-6 py-5"
            >
              <Link href="/services">Book Service</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="relative h-60 overflow-hidden rounded-lg sm:h-105">
            <Image
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=700&q=80&auto=format&fit=crop"
              alt="Technician servicing an HVAC unit"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Got Questions"
              title="Frequently Asked Questions"
              titleClassName="mb-12"
            />
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.question} value={`item-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* READY TO BOOK */}
      <section className="bg-ink px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5">
          <h3 className="font-display text-2xl">
            Ready To Book Your First Service?
          </h3>
          <div className="flex gap-3">
            <Button asChild className="px-6 py-5">
              <Link href="/register">Get Started</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white px-6 py-5"
            >
              <Link href="/services">Browse Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* MEET THE TECHNICIANS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <SectionHeading
            eyebrow="Team Members"
            title="Our Professional Technicians"
            titleClassName="mb-10"
          />
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {homeTeam.map((member) => (
              <Link
                key={member.id}
                href={`/technicians/${member.id}`}
                className="group"
              >
                <div className="relative h-100 overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-3 text-base font-semibold normal-case tracking-normal group-hover:text-primary">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {member.specialty}
                </p>
              </Link>
            ))}
          </div>
          <Button asChild size="lg" className="mt-12 px-6 py-5">
            <Link href="/technicians">View all technicians</Link>
          </Button>
        </div>
      </section>

      {/* BLOG */}
      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <SectionHeading
            eyebrow="Blogs & Articles"
            title="Read Our Latest Blogs"
            titleClassName="mb-10"
          />
          <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2">
            {homeBlogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-lg border border-border"
              >
                <div className="relative h-56">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="font-mono text-xs text-muted-foreground">
                    {post.date}
                  </span>
                  <h3 className="mt-2 mb-4 text-lg normal-case tracking-normal">
                    {post.title}
                  </h3>
                  <Button className="px-6">Read More</Button>
                </div>
              </Link>
            ))}
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-12 px-6 py-5 hover:bg-primary"
          >
            <Link href="/blog">View all posts</Link>
          </Button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonial />

      {/* GET IN TOUCH */}
      <section className="px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="relative h-60 overflow-hidden rounded-lg sm:h-96">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Handyman ready to help"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-4xl text-primary mb-12">
              Get In Touch
            </h2>
            <form className="mt-6 space-y-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input
                  placeholder="Name"
                  className="border-primary bg-primary/5 text-black placeholder:text-black/60"
                />
                <Input
                  placeholder="Phone"
                  className="border-primary bg-primary/5 text-black placeholder:text-black/60"
                />
              </div>
              <Textarea
                placeholder="Message"
                rows={12}
                className="border-primary bg-primary/5 text-white placeholder:text-white/60"
              />
              <Button className="px-6 py-5" type="submit">
                Submit Now
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
