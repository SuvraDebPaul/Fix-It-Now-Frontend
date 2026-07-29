"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { useLogout } from "@/features/auth/hooks/useLogout";
import { cn } from "@/lib/utils";
import { Mail, Menu, Phone, Wrench } from "lucide-react";

const socialLinks = [
  { href: "#", initial: "f", label: "Facebook" },
  { href: "#", initial: "x", label: "Twitter" },
  { href: "#", initial: "yt", label: "YouTube" },
  { href: "#", initial: "ig", label: "Instagram" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/technicians", label: "Technicians" },
  { href: "/contact", label: "Contact Us" },
];

const dashboardPathByRole: Record<string, string> = {
  ADMIN: "/dashboard/admin",
  CUSTOMER: "/dashboard/customer",
  TECHNICIAN: "/dashboard/technician",
};

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { data: user, isLoading } = useCurrentUser();
  const { mutate: logout } = useLogout();
  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <>
      <div className="hidden bg-primary text-primary-foreground sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs font-medium">
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-5 w-5 items-center justify-center rounded-full bg-ink/10 text-[10px] font-bold uppercase hover:bg-ink/20"
              >
                {social.initial}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <span>Mon–Sat: 9AM–6PM</span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" /> support@fixitnow.com
            </span>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 transition-colors duration-300",
          scrolled ? "bg-ink" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-15.25 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-2xl font-black uppercase tracking-wide text-white"
          >
            <Wrench className="h-6 w-6 text-primary" />
            {/* <HomeIcon className="h-6 w-6 text-primary" /> */}
            FixIt<span className="text-primary">Now</span>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink
                      asChild
                      active={isActive}
                      className="bg-transparent hover:bg-transparent focus:bg-transparent data-active:bg-transparent data-active:hover:bg-transparent data-active:focus:bg-transparent"
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "text-sm font-medium text-white/75 transition-colors hover:text-white",
                          isActive && "text-white",
                        )}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
              {user?.role === "ADMIN" && (
                <NavigationMenuItem>
                  <NavigationMenuLink asChild active={pathname === "/admin"}>
                    <Link
                      href="/admin"
                      className="text-sm font-medium text-white/75 transition-colors hover:text-white"
                    >
                      Admin
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-2 text-sm font-medium text-white lg:flex">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary text-primary">
                <Phone className="h-3.5 w-3.5" />
              </span>
              +1 (555) 010-0230
            </span>
            {isLoading ? (
              <>
                <Skeleton className="h-8 w-16 rounded-md" />
                <Skeleton className="h-8 w-24 rounded-md" />
              </>
            ) : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/20 text-primary">
                      {user.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href={dashboardPathByRole[user.role] ?? "/"}>
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => logout()}>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="hidden sm:inline-flex bg-transparent border border-primary text-primary px-4 py-2 hover:bg-black/60 hover:text-white transition-all duration-300"
                >
                  <Link href="/login">Log in</Link>
                </Button>
                <Button asChild size="lg" className="px-4 py-2">
                  <Link href="/register">Get Started</Link>
                </Button>
              </>
            )}

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 hover:text-white lg:hidden"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-white/10 bg-ink text-white"
              >
                <SheetTitle className="px-4 pt-4 font-display text-xl text-white">
                  Menu
                </SheetTitle>
                <nav className="mt-2 flex flex-col px-4">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            "border-b border-white/10 py-3 text-sm font-medium text-white/75 hover:text-white",
                            isActive && "text-primary",
                          )}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    );
                  })}
                  {user ? (
                    <>
                      <SheetClose asChild>
                        <Link
                          href={dashboardPathByRole[user.role] ?? "/"}
                          className="border-b border-white/10 py-3 text-sm font-medium text-white/75 hover:text-white"
                        >
                          Dashboard
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <button
                          onClick={() => logout()}
                          className="border-b border-white/10 py-3 text-left text-sm font-medium text-white/75 hover:text-white"
                        >
                          Log out
                        </button>
                      </SheetClose>
                    </>
                  ) : (
                    <SheetClose asChild>
                      <Link
                        href="/login"
                        className="border-b border-white/10 py-3 text-sm font-medium text-white/75 hover:text-white"
                      >
                        Log in
                      </Link>
                    </SheetClose>
                  )}
                </nav>
                <div className="mt-auto flex items-center gap-2 border-t border-white/10 p-4 text-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary text-primary">
                    <Phone className="h-3.5 w-3.5" />
                  </span>
                  +1 (555) 010-0230
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
