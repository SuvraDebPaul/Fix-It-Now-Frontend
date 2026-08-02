"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { UserAvatar } from "@/components/shared/user-avatar";
import { Badge } from "@/components/ui/badge";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EmptyState } from "@/components/dashboard/empty-state";
import { SlidersHorizontal } from "lucide-react";

import type { ServiceListing } from "@/features/services/types/services.types";

interface ServicesExplorerProps {
  services: ServiceListing[];
}

const RATING_OPTIONS = [
  { value: "0", label: "Any rating" },
  { value: "3", label: "3+ stars" },
  { value: "4", label: "4+ stars" },
  { value: "4.5", label: "4.5+ stars" },
];

export function ServicesExplorer({ services }: ServicesExplorerProps) {
  const categories = useMemo(
    () => Array.from(new Set(services.map((s) => s.category))).sort(),
    [services],
  );
  const locations = useMemo(
    () =>
      Array.from(new Set(services.map((s) => s.technician.location))).sort(),
    [services],
  );
  const maxPrice = useMemo(
    () => Math.max(0, ...services.map((s) => s.price)),
    [services],
  );

  const [category, setCategory] = useState("all");
  const [location, setLocation] = useState("all");
  const [minRating, setMinRating] = useState("0");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  const filteredServices = useMemo(() => {
    const min = priceMin ? Number(priceMin) : 0;
    const max = priceMax ? Number(priceMax) : Infinity;
    const rating = Number(minRating);

    return services.filter((service) => {
      if (category !== "all" && service.category !== category) return false;
      if (location !== "all" && service.technician.location !== location)
        return false;
      if (service.technician.rating < rating) return false;
      if (service.price < min || service.price > max) return false;
      return true;
    });
  }, [services, category, location, minRating, priceMin, priceMax]);

  function resetFilters() {
    setCategory("all");
    setLocation("all");
    setMinRating("0");
    setPriceMin("");
    setPriceMax("");
  }

  const hasActiveFilters =
    category !== "all" ||
    location !== "all" ||
    minRating !== "0" ||
    priceMin !== "" ||
    priceMax !== "";

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
      {/* SIDEBAR FILTERS */}
      <aside className="h-fit space-y-6 rounded-lg border border-border p-5">
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-2 font-display text-lg">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </h3>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="text-xs text-muted-foreground hover:text-primary"
            >
              Reset
            </button>
          )}
        </div>

        <Field>
          <FieldLabel>Service Type</FieldLabel>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field>
          <FieldLabel>Location</FieldLabel>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All locations</SelectItem>
              {locations.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field>
          <FieldLabel>Minimum Rating</FieldLabel>
          <RadioGroup value={minRating} onValueChange={setMinRating}>
            {RATING_OPTIONS.map((option) => (
              <div key={option.value} className="flex items-center gap-2">
                <RadioGroupItem
                  value={option.value}
                  id={`rating-${option.value}`}
                />
                <Label
                  htmlFor={`rating-${option.value}`}
                  className="text-sm font-normal"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </Field>

        <Field>
          <FieldLabel>Price Range</FieldLabel>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              min={0}
              placeholder="Min"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
            />
            <span className="text-muted-foreground">–</span>
            <Input
              type="number"
              min={0}
              placeholder={`Max (${maxPrice})`}
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
            />
          </div>
        </Field>
      </aside>

      {/* GRID */}
      <div>
        <p className="mb-4 text-sm text-muted-foreground">
          {filteredServices.length} service
          {filteredServices.length === 1 ? "" : "s"} found
        </p>

        {filteredServices.length === 0 ? (
          <EmptyState
            icon={SlidersHorizontal}
            title="No services match your filters"
            description="Try adjusting or resetting the filters above."
          />
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredServices.map((service) => (
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
                      {service.technician.rating} (
                      {service.technician.reviewCount})
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
        )}
      </div>
    </div>
  );
}
