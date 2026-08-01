import Image from "next/image";
import { Clock3, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/shared/page-hero";

const regions = ["Dhaka", "Chittagong", "Khulna", "Rajshahi"];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        image="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600&q=80&auto=format&fit=crop"
      />

      {/* INTRO + FORM */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Clock3 className="h-6 w-6" />
            </span>
            <div>
              <h2 className="font-display text-3xl">
                We&apos;re Here To Provide 24×7 Support
              </h2>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                Questions about a booking, a technician, or how FixItNow works?
                Send us a message and we&apos;ll get back to you.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
            <form className="space-y-4 rounded-lg bg-card p-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Phone Number" />
              </div>
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Message Here" rows={5} />
              <Button className="px-6 py-5" type="submit">
                Let&apos;s Talk
              </Button>
            </form>

            <div className="overflow-hidden rounded-lg bg-brand-blue text-white">
              <div className="p-8">
                <h3 className="font-display text-2xl">Say Hello!</h3>
                <p className="mt-2 text-sm text-white/70">
                  Prefer email? Reach the team directly.
                </p>
              </div>
              <div className="relative h-60">
                <Image
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&q=80&auto=format&fit=crop"
                  alt="Support team member"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex items-center gap-2 p-8 text-sm">
                <Mail className="h-4 w-4" />
                support@fixitnow.com
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE WE OPERATE */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl">Where We Operate</h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            FixItNow connects customers with licensed technicians across these
            regions, with more launching soon.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {regions.map((region) => (
              <div
                key={region}
                className="flex items-center gap-2 rounded-lg bg-ink px-5 py-6 text-sm font-medium text-white"
              >
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                {region}
              </div>
            ))}
          </div>

          <div className="mt-8 h-124 overflow-hidden rounded-lg border border-border">
            <iframe
              src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
