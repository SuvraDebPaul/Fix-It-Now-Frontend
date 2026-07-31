"use client";

import { Star } from "lucide-react";
import { EmptyState } from "@/components/dashboard/empty-state";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { SiteHeader } from "@/components/dashboard/site-header";
import { StarRating } from "@/components/shared/star-rating";
import { Card, CardContent } from "@/components/ui/card";
import { useMyBookings } from "@/features/booking/hooks/useMyBookings";
import { LeaveReviewDialog } from "./leave-review-dialog";

export default function CustomerReviewsPage() {
  const { data: bookings, isLoading } = useMyBookings();

  const pendingReview = (bookings ?? []).filter(
    (b) => b.status === "COMPLETED" && !b.review,
  );
  const reviewedBookings = (bookings ?? []).filter(
    (b) => b.status === "COMPLETED" && b.review,
  );

  return (
    <>
      <SiteHeader
        rootHref="/dashboard/customer"
        rootLabel="Dashboard"
        pageLabel="Reviews"
      />
      <div className="flex flex-1 flex-col gap-6 p-4 lg:p-6">
        <DashboardPageHeader
          title="Reviews"
          description="Feedback you've left for completed jobs."
        />

        {isLoading && (
          <p className="text-sm text-muted-foreground">Loading...</p>
        )}

        {pendingReview.length > 0 && (
          <div>
            <h2 className="mb-3 text-sm font-semibold text-muted-foreground">
              Awaiting your review
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {pendingReview.map((booking) => (
                <Card key={booking.id}>
                  <CardContent className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-medium">{booking.service}</p>
                      <p className="text-sm text-muted-foreground">
                        {booking.technicain}
                      </p>
                    </div>
                    <LeaveReviewDialog
                      bookingId={booking.id}
                      service={booking.service}
                      technician={booking.technicain}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="mb-3 text-sm font-semibold text-muted-foreground">
            Your reviews
          </h2>
          {!isLoading && reviewedBookings.length === 0 && (
            <EmptyState
              icon={Star}
              title="No reviews yet"
              description="Reviews you leave for completed jobs will appear here."
            />
          )}
          <div className="grid grid-cols-1 gap-3">
            {reviewedBookings.map((booking) => (
              <Card key={booking.id}>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">
                      {booking.service}{" "}
                      <span className="font-normal text-muted-foreground">
                        · {booking.technicain}
                      </span>
                    </p>
                    <StarRating rating={booking.review!.rating} />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {booking.review!.comment}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
