export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  body: string[];
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "prompt-service-you-can-depend-on",
    title: "Prompt Service You Can Depend On To Patch Up Broken.",
    date: "March 03, 2026",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80&auto=format&fit=crop",
    excerpt:
      "What actually happens between the moment you book and the moment a technician shows up at your door.",
    body: [
      "Booking a repair shouldn't feel like a gamble. On FixItNow, every request is matched to a licensed, identity-verified technician near you — no cold-calling around for quotes, no guessing who's actually going to show up.",
      "Once a technician accepts your job, you can track its status the same way you'd track a delivery: requested, accepted, in progress, completed. Payment only goes through once the work is signed off.",
    ],
    tags: ["Repairs", "Booking"],
  },
  {
    slug: "the-quality-you-expect",
    title: "The Quality You Expect, The Service You Deserve.",
    date: "March 13, 2026",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80&auto=format&fit=crop",
    excerpt:
      "Why FixItNow verifies every technician's identity before their profile ever goes live.",
    body: [
      "A marketplace is only as trustworthy as the people on it. Every technician who joins FixItNow goes through an identity verification step before they can accept a single job.",
      "Ratings and reviews stay attached to a technician's profile permanently — no starting over with a clean slate after a bad job.",
    ],
    tags: ["Trust & Safety", "Technicians"],
  },
  {
    slug: "home-repairs-handled-with-care",
    title: "Home Repairs Handled With Care Where Nothing Is Impossible",
    date: "March 03, 2026",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80&auto=format&fit=crop",
    excerpt:
      "From a leaking faucet to a full panel upgrade — what counts as 'in scope' on FixItNow.",
    body: [
      "Plumbing, electrical, carpentry, HVAC — if it's a licensed trade, there's very likely a category for it already. And if there isn't, the general repair category covers most one-off jobs.",
      "Every category shows typical price ranges up front, so you know roughly what to expect before you even open a request.",
    ],
    tags: ["Services", "Pricing"],
  },
  {
    slug: "best-services-for-customers",
    title: "The Best Services For Customers Home Repair Services",
    date: "March 13, 2026",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80&auto=format&fit=crop",
    excerpt:
      "A look at how the review system keeps technicians accountable after the job is done.",
    body: [
      "After a job is marked complete, customers can leave a rating and a written review. That review is permanently attached to the technician's public profile.",
      "It's a simple system, but it's the backbone of why a marketplace like this actually works — accountability that outlives any single job.",
    ],
    tags: ["Reviews", "Trust & Safety"],
  },
  {
    slug: "passionate-about-home-repairs",
    title: "We Are Passionate About Home Repairs Repair Specialists",
    date: "March 03, 2026",
    image:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&q=80&auto=format&fit=crop",
    excerpt:
      "What it takes for a technician to get verified and start accepting jobs on FixItNow.",
    body: [
      "Technicians apply with their trade license details and go through identity verification before their profile is approved.",
      "From there, they set their own availability calendar and choose which categories of work they want to accept.",
    ],
    tags: ["Technicians", "Onboarding"],
  },
  {
    slug: "your-personal-home-repair-company",
    title: "Your Personal Home Repair Company Repair Service Team",
    date: "March 13, 2026",
    image:
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&q=80&auto=format&fit=crop",
    excerpt:
      "How ticket-style tracking makes a repair job feel less like a mystery and more like a work order.",
    body: [
      "Every booking gets its own ticket ID the moment it's created. You can see exactly what stage it's at, whenever you check.",
      "It's a small thing, but it's the difference between wondering if anyone's coming and actually knowing where your job stands.",
    ],
    tags: ["Booking", "Product"],
  },
];
