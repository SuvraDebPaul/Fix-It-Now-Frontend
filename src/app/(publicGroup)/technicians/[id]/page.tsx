import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ActiveBadge } from "@/components/shared/active-badge";
import { PageHero } from "@/components/shared/page-hero";
import { formatDate } from "@/lib/format";
import { technicians } from "../data";
import { services } from "../../services/data";

export function generateStaticParams() {
  return technicians.map((tech) => ({ id: tech.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const technician = technicians.find((t) => t.id === id);

  if (!technician) {
    return { title: "Technician Not Found" };
  }

  return {
    title: `${technician.name} — ${technician.role}`,
    description: technician.bio,
    openGraph: {
      title: `${technician.name} — ${technician.role}`,
      description: technician.bio,
      images: [technician.image],
    },
  };
}

export default async function TechnicianProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const technician = technicians.find((t) => t.id === id);

  if (!technician) {
    notFound();
  }

  const technicianServices = services.filter(
    (s) => s.technician.name === technician.name,
  );

  return (
    <>
      <PageHero title={technician.name} image={technician.image} />

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-[280px_1fr]">
          {/* PROFILE CARD */}
          <aside className="h-fit rounded-lg border border-border p-6 text-center">
            <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full">
              <Image
                src={technician.image}
                alt={technician.name}
                fill
                className="object-cover"
              />
            </div>
            <h1 className="mt-4 text-xl font-semibold">{technician.name}</h1>
            <p className="text-sm text-muted-foreground">{technician.role}</p>

            <div className="mt-3 flex items-center justify-center gap-1 text-sm">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-semibold">{technician.rating}</span>
              <span className="text-muted-foreground">
                ({technician.reviewCount} reviews)
              </span>
            </div>

            <div className="mt-2 flex items-center justify-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              {technician.location}
            </div>

            <ActiveBadge
              isActive={technician.isAvailable}
              activeLabel="Available for bookings"
              inactiveLabel="Fully booked"
              className="mt-4"
            />

            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-5 text-left text-sm">
              <div>
                <p className="text-muted-foreground">Experience</p>
                <p className="font-medium">{technician.experience} years</p>
              </div>
              <div>
                <p className="text-muted-foreground">Hourly Rate</p>
                <p className="font-medium">${technician.hourlyRate}/hr</p>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div>
            <h2 className="font-display text-2xl">About</h2>
            <p className="mt-3 text-muted-foreground">{technician.bio}</p>

            <h2 className="mt-10 font-display text-2xl">
              Services Offered ({technicianServices.length})
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {technicianServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex items-center gap-3 rounded-lg border border-border p-4"
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium group-hover:text-primary">
                      {service.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {service.category}
                    </p>
                  </div>
                  <span className="font-mono text-sm font-semibold text-primary">
                    ${service.price}
                  </span>
                </Link>
              ))}
              {technicianServices.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  No active listings from this technician right now.
                </p>
              )}
            </div>

            <h2 className="mt-10 font-display text-2xl">
              Reviews ({technician.reviews.length})
            </h2>
            <div className="mt-4 space-y-4">
              {technician.reviews.map((review, i) => (
                <div key={i} className="rounded-lg border border-border p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{review.customer}</p>
                    <div className="flex gap-0.5 text-primary">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          className="h-3.5 w-3.5"
                          fill={j < review.rating ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {review.comment}
                  </p>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">
                    {formatDate(review.date)}
                  </p>
                </div>
              ))}
            </div>

            {technicianServices.length > 0 && (
              <Button asChild size="lg" className="mt-8">
                <Link href={`/book/${technicianServices[0].slug}`}>
                  Book {technician.name}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
