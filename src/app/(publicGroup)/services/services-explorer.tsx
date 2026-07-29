"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ServiceListing } from "./data";

const PAGE_SIZE_OPTIONS = [15, 30, 50];

const PRICE_BANDS = [
  { value: "all", label: "Any price" },
  { value: "under100", label: "Under $100" },
  { value: "100to250", label: "$100 – $250" },
  { value: "over250", label: "$250+" },
];

function matchesPriceBand(price: number, band: string) {
  if (band === "under100") return price < 100;
  if (band === "100to250") return price >= 100 && price <= 250;
  if (band === "over250") return price > 250;
  return true;
}

const RATING_BANDS = [
  { value: "all", label: "Any rating" },
  { value: "4.5", label: "4.5+ stars" },
  { value: "4", label: "4.0+ stars" },
];

interface ServicesExplorerProps {
  services: ServiceListing[];
  categories: { label: string; count: number }[];
}

export function ServicesExplorer({
  services,
  categories,
}: ServicesExplorerProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceBand, setPriceBand] = useState("all");
  const [ratingBand, setRatingBand] = useState("all");
  const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[0]);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const byCategory =
      activeCategory === "All"
        ? services
        : services.filter((s) => s.category === activeCategory);

    const query = searchQuery.trim().toLowerCase();
    const byQuery = !query
      ? byCategory
      : byCategory.filter(
          (s) =>
            s.title.toLowerCase().includes(query) ||
            s.description.toLowerCase().includes(query) ||
            s.technician.name.toLowerCase().includes(query),
        );

    const byPrice = byQuery.filter((s) => matchesPriceBand(s.price, priceBand));

    const minRating = ratingBand === "all" ? 0 : Number(ratingBand);
    return byPrice.filter((s) => s.technician.rating >= minRating);
  }, [services, activeCategory, searchQuery, priceBand, ratingBand]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  function selectCategory(label: string) {
    setActiveCategory(label);
    setPage(1);
  }

  function handleSearchChange(value: string) {
    setSearchQuery(value);
    setPage(1);
  }

  function changePriceBand(value: string) {
    setPriceBand(value);
    setPage(1);
  }

  function changeRatingBand(value: string) {
    setRatingBand(value);
    setPage(1);
  }

  function changePageSize(value: string) {
    setPageSize(Number(value));
    setPage(1);
  }

  return (
    <>
      {/* SEARCH + PRICE/RATING FILTERS */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative w-full max-w-md">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search services or technicians..."
            className="pl-9"
          />
        </div>
        <Select value={priceBand} onValueChange={changePriceBand}>
          <SelectTrigger className="w-36">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {PRICE_BANDS.map((band) => (
              <SelectItem key={band.value} value={band.value}>
                {band.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={ratingBand} onValueChange={changeRatingBand}>
          <SelectTrigger className="w-36">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {RATING_BANDS.map((band) => (
              <SelectItem key={band.value} value={band.value}>
                {band.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* CATEGORY FILTER CHIPS */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" onClick={() => selectCategory("All")}>
          <Badge
            variant={activeCategory === "All" ? "default" : "secondary"}
            className="cursor-pointer px-3 py-1.5 text-sm font-normal"
          >
            All
            <span className="ml-1.5 opacity-70">{services.length}</span>
          </Badge>
        </button>
        {categories.map((cat) => (
          <button
            key={cat.label}
            type="button"
            onClick={() => selectCategory(cat.label)}
          >
            <Badge
              variant={activeCategory === cat.label ? "default" : "secondary"}
              className="cursor-pointer px-3 py-1.5 text-sm font-normal"
            >
              {cat.label}
              <span className="ml-1.5 opacity-70">{cat.count}</span>
            </Badge>
          </button>
        ))}
      </div>

      {/* RESULTS HEADER + PAGE SIZE */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Showing {pageItems.length ? (currentPage - 1) * pageSize + 1 : 0}–
          {(currentPage - 1) * pageSize + pageItems.length} of{" "}
          {filtered.length} services
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Show</span>
          <Select value={String(pageSize)} onValueChange={changePageSize}>
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {PAGE_SIZE_OPTIONS.map((size) => (
                <SelectItem key={size} value={String(size)}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span className="text-sm text-muted-foreground">per page</span>
        </div>
      </div>

      {/* GRID */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pageItems.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
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
                <Avatar className="h-7 w-7">
                  <AvatarImage
                    src={service.technician.avatar}
                    alt={service.technician.name}
                  />
                  <AvatarFallback>
                    {service.technician.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
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
        {pageItems.length === 0 && (
          <p className="col-span-full py-12 text-center text-sm text-muted-foreground">
            {searchQuery
              ? `No services match "${searchQuery}".`
              : "No services match these filters. Try widening your price or rating range."}
          </p>
        )}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <Pagination className="mt-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage((p) => Math.max(1, p - 1));
                }}
                aria-disabled={currentPage === 1}
                className={
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <PaginationItem key={n}>
                <PaginationLink
                  href="#"
                  isActive={n === currentPage}
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(n);
                  }}
                >
                  {n}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage((p) => Math.min(totalPages, p + 1));
                }}
                aria-disabled={currentPage === totalPages}
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
}
