import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Search, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/shared/page-hero";
import { blogPosts } from "../data";

const whatYouWillDo = [
  "Home Repairs Handled With Care For Extraordinary Customers",
  "The Best For Home Repair Services — We Give Five-Star Service",
  "Always Available For You Because You Deserve The Best",
  "We Make Repair Services Easy — We Take The Stress Out",
  "We Are Passionate About Home Repairs, Home Repair Specialists",
];

const galleryImages = [
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=200&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=200&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=200&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=200&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=200&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=200&q=80&auto=format&fit=crop",
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const recentPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 4);
  const allTags = Array.from(new Set(blogPosts.flatMap((p) => p.tags)));

  return (
    <>
      <PageHero title="News & Blog Details" image={post.image} />

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-[1fr_320px]">
          {/* MAIN CONTENT */}
          <article>
            <div className="relative h-80 overflow-hidden rounded-lg sm:h-96">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-4 font-mono text-xs text-muted-foreground">
              <span>{post.date}</span>
              <span>FixItNow Team</span>
            </div>

            <h1 className="mt-4 font-display text-3xl">{post.title}</h1>

            {post.body.map((paragraph, i) => (
              <p key={i} className="mt-4 text-muted-foreground">
                {paragraph}
              </p>
            ))}

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="relative h-48 overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&q=80&auto=format&fit=crop"
                  alt="Technician at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=80&auto=format&fit=crop"
                  alt="Technician servicing equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="mt-10 font-display text-2xl">What You Will Do:</h2>
            <ul className="mt-4 space-y-3">
              {whatYouWillDo.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <Zap className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <blockquote className="mt-8 border-l-4 border-primary bg-card p-6 italic text-muted-foreground">
              {post.excerpt}
              <footer className="mt-3 text-sm font-semibold text-foreground not-italic">
                — FixItNow Team
              </footer>
            </blockquote>

            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* LEAVE A REPLY */}
            <div className="mt-14">
              <span className="font-mono text-xs uppercase tracking-[2px] text-primary">
                Feedback Form
              </span>
              <h2 className="mt-2 mb-6 font-display text-2xl">
                Leave A Reply
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input placeholder="First Name" />
                  <Input type="email" placeholder="Your Email" />
                </div>
                <Input placeholder="Mobile Number" />
                <Textarea placeholder="Additional Message" rows={4} />
                <Button type="submit">Submit Now</Button>
              </form>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="flex overflow-hidden rounded-lg border border-border">
              <Input
                placeholder="Search"
                className="rounded-none border-0 focus-visible:ring-0"
              />
              <Button variant="ghost" size="icon" className="rounded-none">
                <Search className="h-4 w-4" />
              </Button>
            </div>

            <div>
              <h3 className="mb-3 font-display text-lg">Recent Post</h3>
              <div className="space-y-4">
                {recentPosts.map((recent) => (
                  <Link
                    key={recent.slug}
                    href={`/blog/${recent.slug}`}
                    className="flex gap-3 group"
                  >
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={recent.image}
                        alt={recent.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] text-muted-foreground">
                        {recent.date}
                      </span>
                      <p className="text-sm font-medium leading-snug group-hover:text-primary">
                        {recent.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-display text-lg">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-display text-lg">Gallery</h3>
              <div className="grid grid-cols-3 gap-2">
                {galleryImages.map((src, i) => (
                  <div
                    key={i}
                    className="relative h-16 overflow-hidden rounded-md"
                  >
                    <Image src={src} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-primary text-primary-foreground">
              <div className="p-5">
                <h3 className="font-display text-lg">
                  Get 10% Off Your First Call-out
                </h3>
              </div>
              <div className="p-5 pt-0">
                <Button asChild className="w-full bg-ink text-white hover:bg-ink/90">
                  <Link href="/contact">Book Your Free Quote</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
