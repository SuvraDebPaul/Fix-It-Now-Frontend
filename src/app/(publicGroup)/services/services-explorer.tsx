import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { UserAvatar } from "@/components/shared/user-avatar";
import { Badge } from "@/components/ui/badge";

import type { ServiceListing } from "@/features/services/types/services.types";

interface ServicesExplorerProps {
  services: ServiceListing[];
}

export function ServicesExplorer({ services }: ServicesExplorerProps) {
  return (
    <>
      {/* GRID */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.id}`}
            className="group flex flex-col overflow-hidden rounded-lg border border-border"
          >
            <div className="relative h-44 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <Badge className="absolute top-3 left-3 border-transparent bg-ink text-white">
                {service.category}
              </Badge>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg normal-case tracking-normal group-hover:text-primary">
                {service.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {service.description}
              </p>

              <div className="mt-4 flex items-center gap-2">
                <UserAvatar
                  name={service.technician.name}
                  image={service.technician.avatar}
                  className="h-7 w-7"
                />
                <span className="text-sm font-medium">
                  {service.technician.name}
                </span>
                <span className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  {service.technician.rating} ({service.technician.reviewCount})
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="font-mono text-base font-semibold text-primary">
                  ${service.price}
                  <span className="text-xs font-normal text-muted-foreground">
                    {" "}
                    starting
                  </span>
                </span>
                <span className="text-sm font-medium group-hover:text-primary">
                  View &amp; Book →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
