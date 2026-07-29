import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Mail, Phone, Quote, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/shared/page-hero";
import { services, serviceCategories } from "../data";

const faqs = [
  {
    question: "Making Your Home A More Desirable Place — Amazing Things?",
    answer:
      "Every job is scoped up front, so there are no surprise add-ons once work begins.",
  },
  {
    question: "Bringing Back To Its Perfect Condition — We Go Beyond?",
    answer:
      "Our technicians don't just patch the problem — they check surrounding fixtures too.",
  },
  {
    question: "Real Tradesman, Young Factotum — Where Success?",
    answer:
      "Every technician is identity-verified and rated after every completed job.",
  },
];

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = services.findIndex((service) => service.slug === slug);
  const service = services[index];

  if (!service) {
    notFound();
  }

  const previous = services[(index - 1 + services.length) % services.length];
  const next = services[(index + 1) % services.length];

  return (
    <>
      <PageHero title={service.label} image={service.image} />

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-[1fr_320px]">
          {/* MAIN CONTENT */}
          <div>
            <div className="relative h-80 overflow-hidden rounded-lg sm:h-96">
              <Image
                src={service.image}
                alt={service.label}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-4 font-mono text-xs text-muted-foreground">
              <span>{service.category}</span>
              <span>Admin by FixItNow</span>
            </div>

            <h2 className="mt-4 font-display text-3xl">
              We Fix Things Around Your House So You Don&apos;t Have To
            </h2>
            <p className="mt-4 text-muted-foreground">{service.description}</p>
            <p className="mt-4 text-muted-foreground">
              Every booking is matched with a licensed, identity-verified
              technician near you. You&apos;ll see the price up front, track
              the job status live, and pay securely only once the work is
              signed off.
            </p>

            <blockquote className="mt-8 flex gap-4 rounded-lg bg-card p-6">
              <Quote className="h-8 w-8 shrink-0 text-primary" />
              <p className="text-muted-foreground italic">
                &ldquo;A good technician doesn&apos;t just fix the thing you
                called about — they check what&apos;s around it too.&rdquo;
              </p>
            </blockquote>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="relative h-48 overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=80&auto=format&fit=crop"
                  alt="Technician at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&q=80&auto=format&fit=crop"
                  alt="Technician assessing a job"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <Accordion type="single" collapsible className="mt-10">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.question} value={`item-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
              <Link
                href={`/services/${previous.slug}`}
                className="flex items-center gap-2 text-sm font-medium hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous Service
              </Link>
              <Link
                href={`/services/${next.slug}`}
                className="flex items-center gap-2 text-sm font-medium hover:text-primary"
              >
                Next Service
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="flex overflow-hidden rounded-lg border border-border">
              <Input
                placeholder="Search"
                className="rounded-none border-0 focus-visible:ring-0"
              />
              <Button variant="ghost" size="icon" className="rounded-none">
                <Search className="h-4 w-4" />
              </Button>
            </div>

            <div className="rounded-lg border border-border p-5">
              <h3 className="mb-3 font-display text-lg">Service Categories</h3>
              {serviceCategories.map((cat) => (
                <div
                  key={cat.label}
                  className="flex items-center justify-between border-b border-border py-2.5 text-sm last:border-0"
                >
                  <span>{cat.label}</span>
                  <span className="text-muted-foreground">{cat.count}</span>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-lg bg-primary text-primary-foreground">
              <div className="p-5">
                <h3 className="font-display text-xl">
                  Get 10% Off Your First Call-out
                </h3>
              </div>
              <div className="relative h-40">
                <Image
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&q=80&auto=format&fit=crop"
                  alt="Technician"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <Button asChild className="w-full bg-ink text-white hover:bg-ink/90">
                  <Link href="/contact">Book Your Free Quote</Link>
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-brand-blue text-white">
              <div className="p-5">
                <h3 className="font-display text-lg">Working Hours</h3>
              </div>
              <div className="space-y-2 p-5 pt-0 text-sm">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span>8AM – 7PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9AM – 5PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border p-5">
              <h3 className="mb-3 font-display text-lg">Get In Touch</h3>
              <div className="flex items-center gap-2 py-1 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" /> support@fixitnow.com
              </div>
              <div className="flex items-center gap-2 py-1 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" /> +1 (555) 010-0230
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
