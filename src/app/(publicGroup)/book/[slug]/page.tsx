import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PageHero } from "@/components/shared/page-hero";
import { services } from "../../services/data";
import { technicianIdFromName } from "../../technicians/data";
import { BookingForm } from "./booking-form";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function BookServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        title="Book Your Service"
        image="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600&q=80&auto=format&fit=crop"
      />

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
          {/* BOOKING FORM */}
          <div>
            <h1 className="font-display text-3xl">Confirm Your Booking</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {service.technician.name} will review your request and confirm
              or decline it before any payment is taken.
            </p>

            <BookingForm
              technicianName={service.technician.name}
              price={service.price}
            />
          </div>

          {/* ORDER SUMMARY */}
          <aside className="h-fit rounded-lg border border-border p-5">
            <div className="relative h-36 overflow-hidden rounded-lg">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <span className="mt-4 block font-mono text-xs text-muted-foreground">
              {service.category}
            </span>
            <h2 className="mt-1 text-lg font-semibold">{service.title}</h2>

            <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
              <Avatar className="h-9 w-9">
                <AvatarImage
                  src={service.technician.avatar}
                  alt={service.technician.name}
                />
                <AvatarFallback>
                  {service.technician.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <Link
                  href={`/technicians/${technicianIdFromName(service.technician.name)}`}
                  className="text-sm font-medium hover:text-primary"
                >
                  {service.technician.name}
                </Link>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    {service.technician.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {service.technician.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm">
              <span className="text-muted-foreground">Estimated Total</span>
              <span className="font-mono text-lg font-semibold text-primary">
                ${service.price}
              </span>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
