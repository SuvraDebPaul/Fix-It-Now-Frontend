export interface ServiceDetail {
  slug: string;
  label: string;
  category: string;
  description: string;
  image: string;
}

export const services: ServiceDetail[] = [
  {
    slug: "general-repair-work",
    label: "General Repair Work",
    category: "General Repairs",
    description: "Patch-ups, fixture fixes, and everyday household repairs.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80&auto=format&fit=crop",
  },
  {
    slug: "electrical-works",
    label: "Electrical Works",
    category: "Electrical Services",
    description: "Wiring, panel upgrades, outlets, and lighting fixes.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80&auto=format&fit=crop",
  },
  {
    slug: "carpentry-works",
    label: "Carpentry Works",
    category: "Carpenter Services",
    description: "Custom builds, repairs, and furniture assembly.",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80&auto=format&fit=crop",
  },
  {
    slug: "plumbing-and-water",
    label: "Plumbing & Water",
    category: "Plumbing Services",
    description: "Leaks, clogs, fixture installs, and filtration systems.",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80&auto=format&fit=crop",
  },
  {
    slug: "doors-and-windows",
    label: "Doors & Windows",
    category: "Re-Construction",
    description: "Installation, alignment, and hardware replacement.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80&auto=format&fit=crop",
  },
  {
    slug: "hvac-maintenance",
    label: "HVAC Maintenance",
    category: "General Repairs",
    description: "AC servicing, furnace checks, and duct cleaning.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80&auto=format&fit=crop",
  },
];

export const serviceCategories = [
  { label: "Carpenter Services", count: 25 },
  { label: "Electrical Services", count: 36 },
  { label: "General Repairs", count: 12 },
  { label: "Plumbing Services", count: 53 },
  { label: "Re-Construction", count: 32 },
];
