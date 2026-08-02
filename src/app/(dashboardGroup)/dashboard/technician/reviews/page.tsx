"use client";

import { Star } from "lucide-react";
import { EmptyState } from "@/components/dashboard/empty-state";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { SiteHeader } from "@/components/dashboard/site-header";
import { StarRating } from "@/components/shared/star-rating";
import { Card, CardContent } from "@/components/ui/card";
import { StatCard } from "@/components/dashboard/stat-card";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { useTechnicianProfileById } from "@/features/technicians/hooks/useTechnicianProfileById";
import { CardListSkeleton } from "@/components/dashboard/loading-skeletons";

export default function TechnicianReviewsPage() {
  const { data: user } = useCurrentUser();
  const { data: profile, isLoading } = useTechnicianProfileById(
    user?.technicianProfile?.id,
  );

  const reviews = profile?.reviews ?? [];
  const averageRating =
    reviews.length === 0
      ? "—"
      : (
          reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
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
            hint={`Across ${reviews.length} reviews`}
          />
        </div>

        {isLoading && <CardListSkeleton />}

        {!isLoading && reviews.length === 0 && (
          <EmptyState
            icon={Star}
            title="No reviews yet"
            description="Customer feedback will appear here after your first completed job."
          />
        )}

        <div className="grid grid-cols-1 gap-3">
          {reviews.map((review, i) => (
            <Card key={i}>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{review.customer}</p>
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
