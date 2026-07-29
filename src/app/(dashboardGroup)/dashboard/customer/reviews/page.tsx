import { Star } from "lucide-react";
import { EmptyState } from "@/components/dashboard/empty-state";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { SiteHeader } from "@/components/dashboard/site-header";
import { StarRating } from "@/components/shared/star-rating";
import { Card, CardContent } from "@/components/ui/card";
import { customerBookings, customerReviews } from "../data";
import { LeaveReviewDialog } from "./leave-review-dialog";

export default function CustomerReviewsPage() {
  const pendingReview = customerBookings.filter(
    (b) => b.status === "COMPLETED" && !b.hasReview,
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
                        {booking.technician}
                      </p>
                    </div>
                    <LeaveReviewDialog
                      bookingId={booking.id}
                      service={booking.service}
                      technician={booking.technician}
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
          {customerReviews.length === 0 && (
            <EmptyState
              icon={Star}
              title="No reviews yet"
              description="Reviews you leave for completed jobs will appear here."
            />
          )}
          <div className="grid grid-cols-1 gap-3">
            {customerReviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">
                      {review.service}{" "}
                      <span className="font-normal text-muted-foreground">
                        · {review.technician}
                      </span>
                    </p>
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {review.comment}
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
