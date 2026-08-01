import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServicesExplorer } from "./services-explorer";
import { getAllServices } from "@/features/services/api/services.api";
import Testimonial from "@/components/shared/testimonial";

export default async function ServicesPage() {
  const allServices = await getAllServices();

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
                Every listing below is offered directly by a verified technician
                — pick the one that fits, and book them individually.
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                asChild
                variant="outline"
                className="border-primary hover:border-black/40 hover:bg-primary transition-all duration-300"
              >
                <Link href="/register">Become a Technician</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MARKETPLACE: FILTERS + GRID + PAGINATION */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <ServicesExplorer services={allServices} />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonial />
    </>
  );
}
