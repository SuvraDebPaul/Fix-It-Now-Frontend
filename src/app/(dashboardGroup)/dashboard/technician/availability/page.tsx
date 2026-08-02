"use client";

import { useState } from "react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/dashboard/site-header";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { useUpdateAvailability } from "@/features/technicians/hooks/useUpdateAvailability";
import { AvailabilitySlotInput } from "@/features/technicians/types/technicians.types";
import type { User } from "@/features/auth/types/auth.types";
import { AvailabilityRowsSkeleton } from "@/components/dashboard/loading-skeletons";
import { getApiErrorMessage } from "@/lib/utils";

const DAYS: { value: string; label: string }[] = [
  { value: "MONDAY", label: "Monday" },
  { value: "TUESDAY", label: "Tuesday" },
  { value: "WEDNESDAY", label: "Wednesday" },
  { value: "THURSDAY", label: "Thursday" },
  { value: "FRIDAY", label: "Friday" },
  { value: "SATURDAY", label: "Saturday" },
  { value: "SUNDAY", label: "Sunday" },
];

function seedSlots(user: User): Record<string, AvailabilitySlotInput> {
  const bySavedDay = new Map(
    (user.technicianProfile?.availability ?? []).map((slot) => [
      slot.day,
      slot,
    ]),
  );

  const seeded: Record<string, AvailabilitySlotInput> = {};
  for (const { value: day } of DAYS) {
    const saved = bySavedDay.get(day as never);
    seeded[day] = saved
      ? {
          day,
          startTime: saved.startTime,
          endTime: saved.endTime,
          isActive: saved.isActive,
        }
      : { day, startTime: "09:00", endTime: "17:00", isActive: false };
  }
  return seeded;
}

function AvailabilityForm({ user }: { user: User }) {
  const { mutate, isPending } = useUpdateAvailability();
  const [slots, setSlots] = useState(() => seedSlots(user));

  function updateSlot(day: string, changes: Partial<AvailabilitySlotInput>) {
    setSlots((prev) => ({ ...prev, [day]: { ...prev[day], ...changes } }));
  }

  function handleSave() {
    const payload = Object.values(slots);

    for (const slot of payload) {
      if (slot.startTime >= slot.endTime) {
        toast.error(`${slot.day}: start time must be before end time`);
        return;
      }
    }

    mutate(payload, {
      onSuccess: () => {
        toast.success("Availability updated");
      },
      onError: (error) => {
        const message = getApiErrorMessage(
          error,
          "Couldn't update availability. Please try again.",
        );
        toast.error(message);
      },
    });
  }

  return (
    <Card className="max-w-3xl">
      <CardContent className="space-y-3">
        {DAYS.map(({ value: day, label }) => {
          const slot = slots[day];
          return (
            <div
              key={day}
              className="flex flex-wrap items-center gap-4 border-b pb-3 last:border-0 last:pb-0"
            >
              <div className="w-28 shrink-0 font-medium">{label}</div>
              <Input
                type="time"
                value={slot.startTime}
                onChange={(e) => updateSlot(day, { startTime: e.target.value })}
                className="w-32"
                disabled={!slot.isActive}
              />
              <span className="text-muted-foreground">to</span>
              <Input
                type="time"
                value={slot.endTime}
                onChange={(e) => updateSlot(day, { endTime: e.target.value })}
                className="w-32"
                disabled={!slot.isActive}
              />
              <div className="ml-auto flex items-center gap-2">
                <Switch
                  checked={slot.isActive}
                  onCheckedChange={(checked) =>
                    updateSlot(day, { isActive: checked })
                  }
                />
                <span className="text-sm text-muted-foreground">
                  {slot.isActive ? "Available" : "Off"}
                </span>
              </div>
            </div>
          );
        })}
        <Button className="mt-2" onClick={handleSave} disabled={isPending}>
          {isPending ? "Saving..." : "Save Availability"}
        </Button>
      </CardContent>
    </Card>
  );
}

export default function TechnicianAvailabilityPage() {
  const { data: user, isLoading } = useCurrentUser();

  return (
    <>
      <SiteHeader
        rootHref="/dashboard/technician"
        rootLabel="Dashboard"
        pageLabel="Availability"
      />
      <div className="flex flex-1 flex-col gap-4 p-4 lg:p-6">
        <DashboardPageHeader
          title="Availability"
          description="Set the hours customers can book you, day by day."
        />

        {isLoading && <AvailabilityRowsSkeleton />}
        {!isLoading && user && <AvailabilityForm key={user.id} user={user} />}
      </div>
    </>
  );
}
