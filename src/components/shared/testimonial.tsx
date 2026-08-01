import Marquee from "react-fast-marquee";
import { SectionHeading } from "./section-heading";
import { TestimonialCard } from "./testimonial-card";

const testimonials = [
  {
    name: "Rebecca Laura",
    quote: "Booked, fixed, done — the whole thing took one afternoon.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80&auto=format&fit=crop",
  },
  {
    name: "Nicholas Justin",
    quote: "Transparent pricing and the technician actually showed up on time.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&auto=format&fit=crop",
  },
  {
    name: "Alexander Dennis",
    quote:
      "Ticket tracking made the whole job feel accountable, start to finish.",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&q=80&auto=format&fit=crop",
    dark: true,
  },
  {
    name: "Michelle Carol",
    quote: "Easiest home repair experience I've had — no phone tag at all.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80&auto=format&fit=crop",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-primary px-6 py-20 text-primary-foreground">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say About Us"
          eyebrowClassName="text-primary-foreground"
          titleClassName="mb-8"
        />
        <Marquee
          gradient
          gradientColor=""
          speed={80}
          pauseOnHover
          direction="right"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mr-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                quote={testimonial.quote}
                avatar={testimonial.avatar}
                dark={testimonial.dark}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonial;
