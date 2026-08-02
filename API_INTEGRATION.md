# API Integration Map

Maps every frontend feature to the backend endpoints it consumes. All endpoints are prefixed with the backend's base URL (`NEXT_PUBLIC_API_URL`, e.g. `https://fix-it-now-backend-sigma.vercel.app/api`).

## Auth

| Frontend                   | Component / Hook                   | Backend Endpoint           |
| -------------------------- | ---------------------------------- | -------------------------- |
| `/register`                | `registerForm.tsx` → `useRegister` | `POST /auth/register`      |
| `/login`                   | `loginForm.tsx` → `useLogin`       | `POST /auth/login`         |
| All authenticated pages    | `useCurrentUser` (`features/auth`) | `GET /auth/me`             |
| Axios response interceptor | `lib/axios.ts`                     | `POST /auth/refresh-token` |
| Nav user menu              | `useLogout`                        | `POST /auth/logout`        |

## Public — Services & Technicians

| Frontend                            | Component / Hook                           | Backend Endpoint                       |
| ----------------------------------- | ------------------------------------------ | -------------------------------------- |
| `/` (homepage featured technicians) | `getAllTechnician`                         | `GET /technicians`                     |
| `/services`                         | `services-explorer.tsx` → `getAllServices` | `GET /services`                        |
| `/services/[id]`                    | `getServiceById`, `getAllCategories`       | `GET /services/:id`, `GET /categories` |
| `/technicians`                      | `getAllTechnician`                         | `GET /technicians`                     |
| `/technicians/[id]`                 | `getTechnicianProfile`                     | `GET /technicians/:id`                 |

## Booking & Payment

| Frontend                      | Component / Hook                                    | Backend Endpoint             |
| ----------------------------- | --------------------------------------------------- | ---------------------------- |
| `/booking/[id]`               | `booking-form.tsx` → `useCreateBooking`             | `POST /bookings`             |
| `dashboard/customer/bookings` | `useMyBookings`                                     | `GET /bookings`              |
| Cancel booking                | `cancel-booking-dialog.tsx` → `useCancelBooking`    | `PATCH /bookings/:id/cancel` |
| "Pay Now" → Stripe redirect   | `useCreatePayment`                                  | `POST /payments/create`      |
| `/payment-success`            | `payment-success-content.tsx` → `useConfirmPayment` | `POST /payments/confirm`     |
| `dashboard/customer/payments` | `useMyPayments`                                     | `GET /payments`              |

## Customer Dashboard

| Frontend                        | Component / Hook                              | Backend Endpoint                    |
| ------------------------------- | --------------------------------------------- | ----------------------------------- |
| `dashboard/customer` (overview) | `useMyBookings`                               | `GET /bookings`                     |
| `dashboard/customer/reviews`    | `leave-review-dialog.tsx` → `useCreateReview` | `POST /reviews`                     |
| `dashboard/customer/profile`    | `useCurrentUser`, `useUpdateCustomerProfile`  | `GET /auth/me`, `PUT /auth/profile` |

## Technician Dashboard

| Frontend                            | Component / Hook                                            | Backend Endpoint                               |
| ----------------------------------- | ----------------------------------------------------------- | ---------------------------------------------- |
| `dashboard/technician` (overview)   | `useTechnicianBookings`, `useCurrentUser`                   | `GET /technician/bookings`, `GET /auth/me`     |
| `dashboard/technician/bookings`     | `useUpdateBookingStatus`                                    | `PATCH /technician/bookings/:id`               |
| `dashboard/technician/services`     | `useMyServices` (via `getAllTechnician` + `getAllServices`) | `GET /technicians`, `GET /services`            |
| Add service dialog                  | `useCreateService`                                          | `POST /technicians/services`                   |
| `dashboard/technician/availability` | `useCurrentUser`, `useUpdateAvailability`                   | `GET /auth/me`, `PUT /technician/availability` |
| `dashboard/technician/profile`      | `useUpdateTechnicianProfile`                                | `PUT /technician/profile`                      |
| `dashboard/technician/reviews`      | `useTechnicianProfileById`                                  | `GET /technicians/:id`                         |

## Admin Dashboard

| Frontend                     | Component / Hook                                          | Backend Endpoint                                             |
| ---------------------------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| `dashboard/admin` (overview) | `useAdminUsers`, `useAdminBookings`, `useAdminCategories` | `GET /admin/users`, `GET /admin/bookings`, `GET /categories` |
| `dashboard/admin/users`      | `useUpdateUserStatus`                                     | `PATCH /admin/users/:id`                                     |
| `dashboard/admin/bookings`   | `useAdminBookings`                                        | `GET /admin/bookings`                                        |
| `dashboard/admin/categories` | `useCreateCategory`                                       | `GET /categories`, `POST /admin/categories`                  |
| `dashboard/admin/profile`    | `useCurrentUser` (read-only)                              | `GET /auth/me`                                               |
