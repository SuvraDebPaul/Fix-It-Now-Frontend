import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  image: string;
}

export function PageHero({ title, image }: PageHeroProps) {
  return (
    <section className="relative flex h-64 items-end overflow-hidden text-white">
      <Image src={image} alt={title} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-ink/75" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-8">
        <h1 className="font-display text-4xl uppercase">{title}</h1>
        <p className="mt-1 font-mono text-xs text-white/70">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>{" "}
          / {title}
        </p>
      </div>
    </section>
  );
}
