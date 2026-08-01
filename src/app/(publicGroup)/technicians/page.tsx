import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { getAllTechnician } from "@/features/technicians/api/technicians.api";

export default async function TechniciansPage() {
  const technicians = await getAllTechnician();

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
              <Link
                key={member.id}
                href={`/technicians/${member.id}`}
                className="group"
              >
                <div className="relative h-80 overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-3 text-base font-semibold normal-case tracking-normal group-hover:text-primary">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {member.specialty}
                </p>
                <span className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3 w-3 fill-primary text-primary" />
                  {member.rating} ({member.reviewCount})
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* keep everything below this line exactly as it already is */}
    </>
  );
}
