import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Quote,
  Search,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserAvatar } from "@/components/shared/user-avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/shared/page-hero";
import { services, serviceCategories } from "../data";
import { technicianIdFromName } from "../../technicians/data";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: [service.image],
    },
  };
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
      <PageHero title={service.title} image={service.image} />

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-[1fr_320px]">
          {/* MAIN CONTENT */}
          <div>
            <div className="relative h-80 overflow-hidden rounded-lg sm:h-96">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-xs text-muted-foreground">
                {service.category}
              </span>
              <span className="font-mono text-xl font-semibold text-primary">
                ${service.price}
                <span className="text-sm font-normal text-muted-foreground">
                  {" "}
                  starting
                </span>
              </span>
            </div>

            <h2 className="mt-4 font-display text-3xl">{service.title}</h2>
            <p className="mt-4 text-muted-foreground">{service.description}</p>
            <p className="mt-4 text-muted-foreground">
              Booking matches you directly with this technician. You&apos;ll
              see the price up front, track the job status live, and pay
              securely only once the work is signed off.
            </p>

            {/* TECHNICIAN CARD */}
            <div className="mt-8 flex flex-wrap items-center gap-4 rounded-lg border border-border p-5">
              <UserAvatar
                name={service.technician.name}
                image={service.technician.avatar}
                className="h-14 w-14"
              />
              <div className="flex-1">
                <Link
                  href={`/technicians/${technicianIdFromName(service.technician.name)}`}
                  className="font-semibold hover:text-primary"
                >
                  {service.technician.name}
                </Link>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    {service.technician.rating} (
                    {service.technician.reviewCount} reviews)
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {service.technician.location}
                  </span>
                </div>
              </div>
              <Button asChild size="lg">
                <Link href={`/book/${service.slug}`}>Book This Service</Link>
              </Button>
            </div>

            <blockquote className="mt-8 flex gap-4 rounded-lg bg-card p-6">
              <Quote className="h-8 w-8 shrink-0 text-primary" />
              <p className="text-muted-foreground italic">
                &ldquo;A good technician doesn&apos;t just fix the thing you
                called about — they check what&apos;s around it too.&rdquo;
              </p>
            </blockquote>

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
                  Ready To Get Started?
                </h3>
                <p className="mt-2 text-sm opacity-90">
                  Book {service.technician.name} for this job in under a
                  minute.
                </p>
              </div>
              <div className="p-5 pt-0">
                <Button
                  asChild
                  className="w-full bg-ink text-white hover:bg-ink/90"
                >
                  <Link href={`/book/${service.slug}`}>Book Now</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
