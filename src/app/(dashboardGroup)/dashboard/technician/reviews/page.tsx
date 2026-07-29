import { Star } from "lucide-react";
import { EmptyState } from "@/components/dashboard/empty-state";
import { SiteHeader } from "@/components/dashboard/site-header";
import { Card, CardContent } from "@/components/ui/card";
import { StatCard } from "@/components/dashboard/stat-card";
import { technicianReviews } from "../data";

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-primary">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4"
          fill={i < rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

export default function TechnicianReviewsPage() {
  const averageRating =
    technicianReviews.length === 0
      ? "—"
      : (
          technicianReviews.reduce((sum, r) => sum + r.rating, 0) /
          technicianReviews.length
        ).toFixed(1);

  return (
    <>
      <SiteHeader
        rootHref="/dashboard/technician"
        rootLabel="Dashboard"
        pageLabel="Reviews"
      />
      <div className="flex flex-1 flex-col gap-6 p-4 lg:p-6">
        <div>
          <h1 className="text-2xl font-semibold">Reviews</h1>
          <p className="text-sm text-muted-foreground">
            Feedback customers have left after completed jobs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <StatCard
            label="Average Rating"
            value={`${averageRating} / 5`}
            icon={Star}
            hint={`Across ${technicianReviews.length} reviews`}
          />
        </div>

        {technicianReviews.length === 0 && (
          <EmptyState
            icon={Star}
            title="No reviews yet"
            description="Customer feedback will appear here after your first completed job."
          />
        )}

        <div className="grid grid-cols-1 gap-3">
          {technicianReviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-medium">
                    {review.service}{" "}
                    <span className="font-normal text-muted-foreground">
                      · {review.customer}
                    </span>
                  </p>
                  <StarRow rating={review.rating} />
                </div>
                <p className="text-sm text-muted-foreground">
                  {review.comment}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
