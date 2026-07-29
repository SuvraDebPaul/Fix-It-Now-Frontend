import { Star } from "lucide-react";
import { EmptyState } from "@/components/dashboard/empty-state";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { SiteHeader } from "@/components/dashboard/site-header";
import { StarRating } from "@/components/shared/star-rating";
import { Card, CardContent } from "@/components/ui/card";
import { StatCard } from "@/components/dashboard/stat-card";
import { technicianReviews } from "../data";

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
        <DashboardPageHeader
          title="Reviews"
          description="Feedback customers have left after completed jobs."
        />

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
    </>
  );
}
