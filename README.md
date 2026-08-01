# FixItNow — Frontend

A home-services booking marketplace where customers can find and book vetted technicians for repairs, cleaning, painting, and more — with real-time booking status tracking and secure Stripe payments.

**Live site:** https://fixitnow-psi.vercel.app
**Backend repo:** https://github.com/SuvraDebPaul/Fix-It-Now-Backend

## Overview

FixItNow connects customers with independent technicians across service categories like plumbing, electrical, cleaning, painting, carpentry, and appliance repair. Customers browse services, book a technician, and pay securely once the technician accepts. Technicians manage their own services, availability, and job pipeline. Admins oversee the platform's users, bookings, and service categories.

This repo is the customer-facing and dashboard frontend, built on Next.js 16 (App Router). It talks to the [FixItNow backend API](https://github.com/SuvraDebPaul/Fix-It-Now-Backend) for all data and auth.

## Features

**Public**

- Browse services and technicians, filter by category
- Technician profiles with ratings and reviews
- Booking flow with schedule and address selection
- Static pages: About, Contact, Blog

**Auth**

- Register / login as a customer or technician
- Role-based dashboard routing with client-side route guards
- Automatic session refresh on token expiry

**Customer dashboard**

- View and manage bookings, cancel with a reason
- Secure Stripe Checkout for accepted bookings, with post-payment confirmation
- Leave reviews on completed jobs
- Edit profile (phone, address, city, area)

**Technician dashboard**

- Accept / decline booking requests, mark jobs in progress or completed
- Manage own services and weekly availability
- View reviews and profile stats (rating, experience, hourly rate)

**Admin dashboard**

- Manage users (block / unblock)
- View all bookings platform-wide, including payment and review status
- Create and view service categories
- Platform overview: customers, technicians, bookings, revenue

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (Radix primitives)
- [TanStack Query](https://tanstack.com/query) for server state
- [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) for forms/validation
- [Axios](https://axios-http.com) for API calls
- [react-fast-marquee](https://github.com/justrahul27/react-fast-marquee)

## Getting Started

### Prerequisites

- Node.js 20+
- The [backend API](https://github.com/SuvraDebPaul/Fix-It-Now-Backend) running locally or a deployed instance to point at

### Installation

```bash
git clone https://github.com/SuvraDebPaul/Fix-It-Now-Frontend.git
cd Fix-It-Now-Frontend
npm install
```

### Environment Variables

Create `.env.development.local` for local development:

```env
NEXT_PUBLIC_API_URL="http://localhost:5000/api"
BACKEND_API_URL="http://localhost:5000/api"
```

| Variable              | Description                                        |
| --------------------- | -------------------------------------------------- |
| `NEXT_PUBLIC_API_URL` | Backend API base URL, used client- and server-side |
| `BACKEND_API_URL`     | Backend API base URL for server-only usage         |

> Note: `.env.local` is loaded by Next.js in **every** environment except `test` — use `.env.development.local` for dev-only overrides so they don't leak into production builds, and `.env.production` for values used by `next build`/`next start`.

### Run locally

```bash
npm run dev
```

Visit http://localhost:3000

### Build for production

```bash
npm run build
npm run start
```

## Available Scripts

| Script          | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the dev server (Turbopack) |
| `npm run build` | Production build                 |
| `npm run start` | Serve the production build       |
| `npm run lint`  | Run ESLint                       |

## Project Structure

```
src/
├── app/                    # Next.js App Router routes
│   ├── (publicGroup)/      # Public marketing + browsing pages
│   └── (dashboardGroup)/   # Customer / technician / admin dashboards
├── features/                # Feature modules (api, hooks, types, components)
│   ├── auth/
│   ├── services/
│   ├── technicians/
│   ├── booking/
│   ├── payments/
│   └── admin/
├── components/               # Shared UI (shadcn primitives, dashboard widgets)
└── lib/                        # Axios instance, formatting, utils
```

## Demo Credentials

Seeded on the backend for testing:

| Role       | Email                        | Password          |
| ---------- | ---------------------------- | ----------------- |
| Admin      | `admin@gmail.com`            | `Admin@123456`    |
| Technician | `john.technician@gmail.com`  | `Tech@123456`     |
| Technician | `alice.technician@gmail.com` | `Tech@123456`     |
| Technician | `bob.technician@gmail.com`   | `Tech@123456`     |
| Customer   | `sarah.customer@gmail.com`   | `Customer@123456` |
| Customer   | `mike.customer@gmail.com`    | `Customer@123456` |
| Customer   | `emma.customer@gmail.com`    | `Customer@123456` |

Stripe test card for the payment flow: `4242 4242 4242 4242`, any future expiry, any CVC.

## Author

Suvra Deb Paul
