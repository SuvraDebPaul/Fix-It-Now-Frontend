export interface TechnicianReview {
  customer: string;
  rating: number;
  comment: string;
  date: string;
}

export function technicianIdFromName(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export interface Technician {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  experience: number;
  location: string;
  hourlyRate: number;
  isAvailable: boolean;
  rating: number;
  reviewCount: number;
  reviews: TechnicianReview[];
}

// Mirrors GET /api/technicians/:id: a TechnicianProfile with its reviews.
// rating/reviewCount here match the same technician's listings in
// services/data.ts — same person, same reputation, everywhere on the site.
export const technicians: Technician[] = [
  {
    id: "harry-white",
    name: "Harry White",
    role: "Plumber",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop",
    bio: "Licensed plumber with a decade of experience across residential repairs, installs, and emergency shutoffs.",
    experience: 10,
    location: "Springfield",
    hourlyRate: 55,
    isAvailable: true,
    rating: 4.9,
    reviewCount: 112,
    reviews: [
      {
        customer: "Jane Doe",
        rating: 5,
        comment: "Fixed a leaking pipe in under an hour. Very professional.",
        date: "2026-07-20",
      },
      {
        customer: "Marcus O.",
        rating: 5,
        comment: "Showed up on time and explained everything clearly.",
        date: "2026-07-02",
      },
    ],
  },
  {
    id: "andron-black",
    name: "Andron Black",
    role: "Electrician",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop",
    bio: "Licensed electrician specializing in panel upgrades, rewiring, and lighting installs for homes and small businesses.",
    experience: 8,
    location: "Springfield",
    hourlyRate: 70,
    isAvailable: true,
    rating: 4.8,
    reviewCount: 94,
    reviews: [
      {
        customer: "Jane Doe",
        rating: 5,
        comment: "Panel upgrade went smoothly, no surprises on price.",
        date: "2026-07-24",
      },
      {
        customer: "Tom Reyes",
        rating: 4,
        comment: "Good work, took a bit longer than the estimate.",
        date: "2026-06-15",
      },
    ],
  },
  {
    id: "matthew-mark",
    name: "Matthew Mark",
    role: "Carpenter",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop",
    bio: "Custom carpentry and furniture builds, from shelving to full deck construction.",
    experience: 7,
    location: "Springfield",
    hourlyRate: 65,
    isAvailable: true,
    rating: 4.7,
    reviewCount: 63,
    reviews: [
      {
        customer: "Priya Shah",
        rating: 5,
        comment: "Beautiful custom shelving, exactly what we wanted.",
        date: "2026-07-15",
      },
      {
        customer: "Alina Cho",
        rating: 4,
        comment: "Solid craftsmanship, a little pricier than expected.",
        date: "2026-06-01",
      },
    ],
  },
  {
    id: "michelle-carol",
    name: "Michelle Carol",
    role: "Painter",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop",
    bio: "Interior and cabinet painting specialist with an eye for clean lines and even finish coats.",
    experience: 6,
    location: "Springfield",
    hourlyRate: 60,
    isAvailable: true,
    rating: 4.8,
    reviewCount: 47,
    reviews: [
      {
        customer: "Jane Doe",
        rating: 5,
        comment: "Our living room looks brand new. Very tidy work too.",
        date: "2026-06-30",
      },
      {
        customer: "Rebecca Laura",
        rating: 5,
        comment: "Cabinet refinish came out better than the showroom.",
        date: "2026-05-18",
      },
    ],
  },
  {
    id: "timothy-jason",
    name: "Timothy Jason",
    role: "Plumber",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&q=80&auto=format&fit=crop",
    bio: "Drain cleaning and fixture repair specialist, quick response for everyday plumbing issues.",
    experience: 5,
    location: "Springfield",
    hourlyRate: 50,
    isAvailable: true,
    rating: 4.5,
    reviewCount: 37,
    reviews: [
      {
        customer: "Marcus O.",
        rating: 4,
        comment: "Cleared a stubborn drain, reasonably priced.",
        date: "2026-06-10",
      },
      {
        customer: "Nicholas Justin",
        rating: 5,
        comment: "Quick and friendly, would book again.",
        date: "2026-05-22",
      },
    ],
  },
  {
    id: "jonathan-larry",
    name: "Jonathan Larry",
    role: "HVAC Technician",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop",
    bio: "HVAC servicing, thermostat installs, and duct cleaning for year-round comfort.",
    experience: 6,
    location: "Springfield",
    hourlyRate: 60,
    isAvailable: true,
    rating: 4.6,
    reviewCount: 51,
    reviews: [
      {
        customer: "Priya Shah",
        rating: 5,
        comment: "AC was blowing warm air, fixed it same day.",
        date: "2026-07-28",
      },
      {
        customer: "Alexander Dennis",
        rating: 4,
        comment: "Solid service, slightly delayed arrival.",
        date: "2026-06-05",
      },
    ],
  },
  {
    id: "brandon-gregory",
    name: "Brandon Gregory",
    role: "Carpenter",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop",
    bio: "Furniture assembly and cabinet installation, focused on fast turnarounds for smaller jobs.",
    experience: 3,
    location: "Springfield",
    hourlyRate: 55,
    isAvailable: true,
    rating: 4.4,
    reviewCount: 29,
    reviews: [
      {
        customer: "Nicholas Justin",
        rating: 4,
        comment: "Assembled our whole home office in one visit.",
        date: "2026-05-30",
      },
      {
        customer: "Rebecca Laura",
        rating: 4,
        comment: "Good work, communication could be a bit faster.",
        date: "2026-04-20",
      },
    ],
  },
  {
    id: "raymond-jose",
    name: "Raymond Jose",
    role: "Painter",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop",
    bio: "Exterior painting specialist — full prep, priming, and weatherproof finish coats.",
    experience: 3,
    location: "Springfield",
    hourlyRate: 55,
    isAvailable: false,
    rating: 4.5,
    reviewCount: 22,
    reviews: [
      {
        customer: "Alina Cho",
        rating: 5,
        comment: "Exterior repaint held up great through the season.",
        date: "2026-05-10",
      },
      {
        customer: "Tom Reyes",
        rating: 4,
        comment: "Nice finish, booked out a couple weeks in advance.",
        date: "2026-04-02",
      },
    ],
  },
  {
    id: "sara-kim",
    name: "Sara Kim",
    role: "Electrician",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop",
    bio: "Residential electrician focused on outlet repairs, switches, and small fixture installs.",
    experience: 4,
    location: "Springfield",
    hourlyRate: 60,
    isAvailable: true,
    rating: 4.6,
    reviewCount: 41,
    reviews: [
      {
        customer: "Marcus O.",
        rating: 5,
        comment: "Diagnosed a wiring issue others had missed.",
        date: "2026-07-01",
      },
      {
        customer: "Jane Doe",
        rating: 4,
        comment: "Friendly and thorough, fair pricing.",
        date: "2026-05-25",
      },
    ],
  },
  {
    id: "derek-nolan",
    name: "Derek Nolan",
    role: "General Contractor",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop",
    bio: "General contractor covering everyday repairs, appliance installs, and small reconstruction jobs.",
    experience: 9,
    location: "Springfield",
    hourlyRate: 50,
    isAvailable: true,
    rating: 4.7,
    reviewCount: 58,
    reviews: [
      {
        customer: "Alexander Dennis",
        rating: 5,
        comment: "Patched up a whole list of odd jobs in one visit.",
        date: "2026-07-10",
      },
      {
        customer: "Priya Shah",
        rating: 4,
        comment: "Reliable and fairly priced for general repairs.",
        date: "2026-06-08",
      },
    ],
  },
];
