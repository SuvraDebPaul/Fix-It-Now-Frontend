export interface TechnicianSummary {
  name: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  location: string;
}

export interface ServiceListing {
  slug: string;
  title: string;
  category: string;
  description: string;
  price: number;
  image: string;
  technician: TechnicianSummary;
}

// Mirrors the real shape of GET /api/services: a flat list of individual
// service listings, each created by one technician (POST /api/technicians/services).
// Multiple technicians can list under the same category at different prices.
export const services: ServiceListing[] = [
  {
    slug: "general-repair-work",
    title: "General Repair Work",
    category: "General Repairs",
    description: "Patch-ups, fixture fixes, and everyday household repairs.",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80&auto=format&fit=crop",
    technician: {
      name: "Derek Nolan",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80&auto=format&fit=crop",
      rating: 4.7,
      reviewCount: 58,
      location: "Springfield",
    },
  },
  {
    slug: "panel-upgrade",
    title: "Panel Upgrade",
    category: "Electrical",
    description: "Full electrical panel replacement and upgrade.",
    price: 240,
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80&auto=format&fit=crop",
    technician: {
      name: "Andron Black",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80&auto=format&fit=crop",
      rating: 4.8,
      reviewCount: 94,
      location: "Springfield",
    },
  },
  {
    slug: "outlet-switch-repair",
    title: "Outlet & Switch Repair",
    category: "Electrical",
    description: "Diagnose and fix faulty outlets and switches.",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80&auto=format&fit=crop",
    technician: {
      name: "Sara Kim",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80&auto=format&fit=crop",
      rating: 4.6,
      reviewCount: 41,
      location: "Springfield",
    },
  },
  {
    slug: "leaky-faucet-repair",
    title: "Leaky Faucet Repair",
    category: "Plumbing",
    description: "Leaks, clogs, fixture installs, and emergency shutoffs.",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80&auto=format&fit=crop",
    technician: {
      name: "Harry White",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80&auto=format&fit=crop",
      rating: 4.9,
      reviewCount: 112,
      location: "Springfield",
    },
  },
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning",
    category: "Plumbing",
    description: "Clear slow or blocked drains, indoor and outdoor.",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80&auto=format&fit=crop",
    technician: {
      name: "Timothy Jason",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&q=80&auto=format&fit=crop",
      rating: 4.5,
      reviewCount: 37,
      location: "Springfield",
    },
  },
  {
    slug: "custom-shelving",
    title: "Custom Shelving",
    category: "Carpentry",
    description: "Custom builds, repairs, and furniture assembly.",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80&auto=format&fit=crop",
    technician: {
      name: "Matthew Mark",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&auto=format&fit=crop",
      rating: 4.7,
      reviewCount: 63,
      location: "Springfield",
    },
  },
  {
    slug: "furniture-assembly",
    title: "Furniture Assembly",
    category: "Carpentry",
    description: "Flat-pack and custom furniture assembly.",
    price: 90,
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80&auto=format&fit=crop",
    technician: {
      name: "Brandon Gregory",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&auto=format&fit=crop",
      rating: 4.4,
      reviewCount: 29,
      location: "Springfield",
    },
  },
  {
    slug: "hvac-maintenance",
    title: "AC Servicing & HVAC Maintenance",
    category: "HVAC",
    description: "AC servicing, furnace checks, and duct cleaning.",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80&auto=format&fit=crop",
    technician: {
      name: "Jonathan Larry",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80&auto=format&fit=crop",
      rating: 4.6,
      reviewCount: 51,
      location: "Springfield",
    },
  },
  {
    slug: "interior-wall-painting",
    title: "Interior Wall Painting",
    category: "Painting",
    description: "Wall prep, priming, and finish coats, indoors.",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80&auto=format&fit=crop",
    technician: {
      name: "Michelle Carol",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80&auto=format&fit=crop",
      rating: 4.8,
      reviewCount: 47,
      location: "Springfield",
    },
  },
  {
    slug: "exterior-house-painting",
    title: "Exterior House Painting",
    category: "Painting",
    description: "Full exterior prep, priming, and finish coats.",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80&auto=format&fit=crop",
    technician: {
      name: "Raymond Jose",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80&auto=format&fit=crop",
      rating: 4.5,
      reviewCount: 22,
      location: "Springfield",
    },
  },
  {
    slug: "doors-and-windows",
    title: "Doors & Windows Install",
    category: "Re-Construction",
    description: "Installation, alignment, and hardware replacement.",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80&auto=format&fit=crop",
    technician: {
      name: "Derek Nolan",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80&auto=format&fit=crop",
      rating: 4.7,
      reviewCount: 58,
      location: "Springfield",
    },
  },
  {
    slug: "appliance-installation",
    title: "Appliance Installation",
    category: "General Repairs",
    description: "Hookup and installation for major home appliances.",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80&auto=format&fit=crop",
    technician: {
      name: "Derek Nolan",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80&auto=format&fit=crop",
      rating: 4.7,
      reviewCount: 58,
      location: "Springfield",
    },
  },
  {
    slug: "furniture-fixture-patch-up",
    title: "Furniture & Fixture Patch-Up",
    category: "General Repairs",
    description: "Quick fixes for loose, broken, or worn fixtures.",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80&auto=format&fit=crop",
    technician: {
      name: "Harry White",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80&auto=format&fit=crop",
      rating: 4.9,
      reviewCount: 112,
      location: "Springfield",
    },
  },
  {
    slug: "ceiling-fan-installation",
    title: "Ceiling Fan Installation",
    category: "Electrical",
    description: "Mounting and wiring for indoor and outdoor ceiling fans.",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80&auto=format&fit=crop",
    technician: {
      name: "Sara Kim",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80&auto=format&fit=crop",
      rating: 4.6,
      reviewCount: 41,
      location: "Springfield",
    },
  },
  {
    slug: "lighting-fixture-install",
    title: "Lighting Fixture Install",
    category: "Electrical",
    description: "Indoor and outdoor lighting fixture installation.",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80&auto=format&fit=crop",
    technician: {
      name: "Andron Black",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80&auto=format&fit=crop",
      rating: 4.8,
      reviewCount: 94,
      location: "Springfield",
    },
  },
  {
    slug: "water-heater-installation",
    title: "Water Heater Installation",
    category: "Plumbing",
    description: "Removal of old unit and installation of a new water heater.",
    price: 210,
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80&auto=format&fit=crop",
    technician: {
      name: "Harry White",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80&auto=format&fit=crop",
      rating: 4.9,
      reviewCount: 112,
      location: "Springfield",
    },
  },
  {
    slug: "toilet-repair-install",
    title: "Toilet Repair & Install",
    category: "Plumbing",
    description: "Repairs, replacements, and new toilet installations.",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80&auto=format&fit=crop",
    technician: {
      name: "Timothy Jason",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&q=80&auto=format&fit=crop",
      rating: 4.5,
      reviewCount: 37,
      location: "Springfield",
    },
  },
  {
    slug: "deck-building-repair",
    title: "Deck Building & Repair",
    category: "Carpentry",
    description: "New deck builds and repairs to existing structures.",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80&auto=format&fit=crop",
    technician: {
      name: "Matthew Mark",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&auto=format&fit=crop",
      rating: 4.7,
      reviewCount: 63,
      location: "Springfield",
    },
  },
  {
    slug: "cabinet-installation",
    title: "Cabinet Installation",
    category: "Carpentry",
    description: "Kitchen and bathroom cabinet installation.",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80&auto=format&fit=crop",
    technician: {
      name: "Brandon Gregory",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&auto=format&fit=crop",
      rating: 4.4,
      reviewCount: 29,
      location: "Springfield",
    },
  },
  {
    slug: "duct-cleaning",
    title: "Duct Cleaning",
    category: "HVAC",
    description: "Full duct system cleaning and inspection.",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80&auto=format&fit=crop",
    technician: {
      name: "Jonathan Larry",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80&auto=format&fit=crop",
      rating: 4.6,
      reviewCount: 51,
      location: "Springfield",
    },
  },
  {
    slug: "thermostat-installation",
    title: "Thermostat Installation",
    category: "HVAC",
    description: "Smart and standard thermostat installation.",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80&auto=format&fit=crop",
    technician: {
      name: "Jonathan Larry",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80&auto=format&fit=crop",
      rating: 4.6,
      reviewCount: 51,
      location: "Springfield",
    },
  },
  {
    slug: "cabinet-refinishing",
    title: "Cabinet Refinishing",
    category: "Painting",
    description: "Sanding, priming, and refinishing kitchen cabinets.",
    price: 280,
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80&auto=format&fit=crop",
    technician: {
      name: "Michelle Carol",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80&auto=format&fit=crop",
      rating: 4.8,
      reviewCount: 47,
      location: "Springfield",
    },
  },
  {
    slug: "roof-repair",
    title: "Roof Repair",
    category: "Re-Construction",
    description: "Leak fixes, shingle replacement, and minor roof repairs.",
    price: 280,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80&auto=format&fit=crop",
    technician: {
      name: "Derek Nolan",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80&auto=format&fit=crop",
      rating: 4.7,
      reviewCount: 58,
      location: "Springfield",
    },
  },
];

export const SERVICE_CATEGORIES = [
  "General Repairs",
  "Electrical",
  "Plumbing",
  "Carpentry",
  "HVAC",
  "Painting",
  "Re-Construction",
];

export const serviceCategories = SERVICE_CATEGORIES.map((label) => ({
  label,
  count: services.filter((s) => s.category === label).length,
}));
