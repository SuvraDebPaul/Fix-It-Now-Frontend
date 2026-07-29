import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ThumbsUp, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { blogPosts } from "./blog/data";

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

const clientLogos = ["STEREO", "TIDAL", "INNOVATE", "TRAP MUSIC", "BIGTECH"];

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

const team = [
  {
    name: "Harry White",
    role: "Plumber",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Andron Black",
    role: "Electrician",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Matthew Mark",
    role: "Carpenter",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Michelle Carol",
    role: "Painter",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    name: "Preston Sanchez",
    role: "Homeowner",
    quote:
      "Booked a plumber in under five minutes and the job was done the same afternoon. The ticket tracking made the whole thing feel legit and transparent.",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&q=80&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-[61px] overflow-hidden pt-[61px] text-white">
        <Image
          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600&q=80&auto=format&fit=crop"
          alt="Technician repairing a fixture"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <span className="font-mono text-xs uppercase tracking-[2px] text-primary">
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
            <Button asChild>
              <Link href="/services">Browse Services</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/register">Become a Technician</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PROCESS / WHAT WE DO */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2 h-40 overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=700&q=80&auto=format&fit=crop"
                  alt="Technician assessing a job"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-36 overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80&auto=format&fit=crop"
                  alt="Technician installing a fixture"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-36 overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80&auto=format&fit=crop"
                  alt="Technician at work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-4 flex gap-4 rounded-lg bg-ink px-6 py-4 text-white shadow-lg sm:right-6">
              <div>
                <div className="font-display text-2xl text-primary">560+</div>
                <div className="text-xs text-white/60">Projects Done</div>
              </div>
              <div className="w-px bg-white/15" />
              <div>
                <div className="font-display text-2xl text-primary">180+</div>
                <div className="text-xs text-white/60">Technicians</div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <span className="font-mono text-xs uppercase tracking-[2px] text-primary">
              About Us
            </span>
            <h2 className="mt-2.5 font-display text-4xl">
              Tell About Our Process &amp; What We Do
            </h2>
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

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button asChild>
                <Link href="/about">Read More</Link>
              </Button>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">
                    Call Ust Text
                  </div>
                  <div className="font-mono text-sm font-semibold">
                    +1 (555) 010-0230
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
          <span className="font-mono text-xs uppercase tracking-[2px]">
            Our Services
          </span>
          <h2 className="mt-2.5 font-display text-4xl">
            A Comprehensive Set Of Services
          </h2>

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
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-base font-semibold text-white normal-case tracking-normal">
                    {service.label}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-3">
            <Button
              asChild
              variant="outline"
              className="border-ink bg-transparent text-ink hover:bg-ink hover:text-white"
            >
              <Link href="/contact">Get A Quote</Link>
            </Button>
            <Button
              asChild
              className="bg-ink text-white hover:bg-ink/90"
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
            <span className="font-mono text-xs uppercase tracking-[2px] text-primary">
              Get A Free Quote
            </span>
            <h2 className="mt-2.5 mb-8 font-display text-4xl">
              Request A Quote
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Email Address" />
              </div>
              <Textarea placeholder="Tell us what needs fixing..." rows={4} />
              <Button type="submit">Get Estimate Quote</Button>
            </form>

            <div className="mt-10 rounded-lg bg-primary p-6 text-primary-foreground">
              <h3 className="font-display text-xl">Need Something Done?</h3>
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {quoteFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-center gap-2">
                    <feature.icon className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative h-80 overflow-hidden rounded-lg sm:h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=700&q=80&auto=format&fit=crop"
              alt="Friendly handyman"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* WE FIX THINGS */}
      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <span className="font-mono text-xs uppercase tracking-[2px] text-primary">
            What We Do
          </span>
          <h2 className="mt-2.5 max-w-xl font-display text-4xl">
            We Fix Things Around Your House So You Don&apos;t Have To.
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {fixThingsStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl text-primary">
                  {stat.value}
                </div>
                <div className="font-mono text-xs uppercase text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {fixThingsGrid.map((item) => (
              <div
                key={item.label}
                className={`relative h-40 overflow-hidden rounded-lg ${
                  item.highlight ? "ring-2 ring-primary" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <span className="absolute inset-x-0 bottom-0 p-3 text-xs font-semibold normal-case tracking-normal text-white">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <Button asChild className="mt-10">
            <Link href="/services">See All Services</Link>
          </Button>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="border-b border-border px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {clientLogos.map((logo) => (
            <span
              key={logo}
              className="font-display text-lg tracking-wide text-muted-foreground/60"
            >
              {logo}
            </span>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-primary px-6 py-16 text-center text-primary-foreground">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl">
            High-Quality Workmanship At Great Prices
          </h2>
          <div className="mt-6 flex justify-center gap-3">
            <Button asChild className="bg-ink text-white hover:bg-ink/90">
              <Link href="/services">Read More</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-ink bg-transparent text-ink hover:bg-ink hover:text-white"
            >
              <Link href="/register">Book Service</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="relative h-80 overflow-hidden rounded-lg sm:h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=700&q=80&auto=format&fit=crop"
              alt="Technician servicing an HVAC unit"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-[2px] text-primary">
              Got Questions
            </span>
            <h2 className="mt-2.5 mb-6 font-display text-4xl">
              Frequently Asked Questions
            </h2>
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
            <Button asChild>
              <Link href="/register">Get Started</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/services">Browse Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* MEET THE TECHNICIANS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <span className="font-mono text-xs uppercase tracking-[2px] text-primary">
            Team Members
          </span>
          <h2 className="mt-2.5 mb-10 font-display text-4xl">
            Our Professional Technicians
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {team.map((member) => (
              <div key={member.name}>
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-3 text-base font-semibold normal-case tracking-normal">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <span className="font-mono text-xs uppercase tracking-[2px] text-primary">
            Blogs & Articles
          </span>
          <div className="mt-2.5 mb-10 flex flex-wrap items-end justify-center gap-4">
            <h2 className="font-display text-4xl">Read Our Latest Blogs</h2>
          </div>
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
                  <Button size="sm">Read More</Button>
                </div>
              </Link>
            ))}
          </div>
          <Button asChild variant="ghost" size="sm" className="mt-8">
            <Link href="/blog">View all posts →</Link>
          </Button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-primary px-6 py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl">
          <span className="font-mono text-xs uppercase tracking-[2px]">
            Testimonials
          </span>
          <h2 className="mt-2.5 mb-8 font-display text-4xl">What They Say</h2>
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
                  <div>
                    <div className="text-sm font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section className="bg-ink px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="relative h-72 overflow-hidden rounded-lg sm:h-96">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=80&auto=format&fit=crop"
              alt="Handyman ready to help"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-4xl text-primary">
              Get In Touch
            </h2>
            <form className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input
                  placeholder="Name"
                  className="border-white/20 bg-white/5 text-white placeholder:text-white/50"
                />
                <Input
                  placeholder="Phone"
                  className="border-white/20 bg-white/5 text-white placeholder:text-white/50"
                />
              </div>
              <Textarea
                placeholder="Message"
                rows={4}
                className="border-white/20 bg-white/5 text-white placeholder:text-white/50"
              />
              <Button type="submit">Submit Now</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
