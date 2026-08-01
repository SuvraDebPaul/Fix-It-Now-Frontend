import Link from "next/link";
import { Wrench } from "lucide-react";

const footerColumns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/blog", label: "Blog" },
      { href: "#", label: "Terms" },
      { href: "#", label: "Privacy" },
    ],
  },
  {
    title: "Customers",
    links: [
      { href: "/services", label: "Services" },
      { href: "/dashboard/customer", label: "My Bookings" },
      { href: "#", label: "Help Center" },
    ],
  },
  {
    title: "Technicians",
    links: [
      { href: "/dashboard/technician", label: "Technician Dashboard" },
      { href: "#", label: "Get Verified" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-ink py-12 text-white/60">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-2xl font-black uppercase tracking-wide text-white"
          >
            <Wrench className="h-6 w-6 text-primary" />
            FixIt<span className="text-primary">Now</span>
          </Link>
          <p className="max-w-md text-sm">
            Every job gets a ticket. Every ticket gets a pro — book vetted
            technicians for repairs, installs, and maintenance.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 border-b border-t border-white/10 py-8 sm:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.title} className="mx-auto">
              <h4 className="mb-3.5 text-[15px] uppercase text-primary">
                {col.title}
              </h4>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block py-1 text-sm hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="mx-auto">
            <h4 className="mb-3.5 text-[15px] uppercase text-primary">
              Contact
            </h4>
            <p className="py-1 text-sm">support@fixitnow.com</p>
            <p className="py-1 text-sm">+880 717 010230</p>
          </div>
        </div>
        <div className="flex justify-between pt-5 font-mono text-[13px]">
          <span>© 2026 FixItNow</span>
          <span>Your Turested Service Partner</span>
        </div>
      </div>
    </footer>
  );
}
