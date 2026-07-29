import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";

const team = [
  {
    name: "Harry White",
    role: "Plumber",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Andron Black",
    role: "Electrician",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Matthew Mark",
    role: "Carpenter",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Michelle Carol",
    role: "Painter",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Timothy Jason",
    role: "Plumber",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Jonathan Larry",
    role: "HVAC Technician",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Brandon Gregory",
    role: "Carpenter",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Raymond Jose",
    role: "Painter",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop",
  },
];

export default function TechniciansPage() {
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
              <span className="font-mono text-xs uppercase tracking-[2px] text-primary">
                Team Members
              </span>
              <h2 className="mt-2.5 font-display text-4xl">
                Our Professional Technicians
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Every technician on FixItNow is identity-verified before their
              profile goes live, so you always know who&apos;s showing up.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {team.map((member) => (
              <div key={member.name}>
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-3 text-base font-semibold normal-case tracking-normal">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden px-6 py-28 text-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1600&q=80&auto=format&fit=crop"
          alt="Technician at work"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-3xl text-primary sm:text-4xl">
            High-Quality Workmanship At Great Prices
          </h2>
          <div className="mt-8 flex justify-center gap-3">
            <Button asChild>
              <Link href="/services">Read More</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Book Service</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[2px] text-primary">
            Join The Team
          </span>
          <h2 className="mt-2.5 font-display text-3xl">
            Are You A Skilled Technician?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Set your own availability and let bookings, payments, and job
            tracking come to you.
          </p>
          <Button asChild className="mt-6">
            <Link href="/register">Apply As A Technician</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
