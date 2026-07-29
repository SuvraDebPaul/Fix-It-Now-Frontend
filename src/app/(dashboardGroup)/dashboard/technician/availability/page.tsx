import { SiteHeader } from "@/components/dashboard/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { technicianAvailability } from "../data";

const dayLabels: Record<string, string> = {
  MONDAY: "Monday",
  TUESDAY: "Tuesday",
  WEDNESDAY: "Wednesday",
  THURSDAY: "Thursday",
  FRIDAY: "Friday",
  SATURDAY: "Saturday",
  SUNDAY: "Sunday",
};

export default function TechnicianAvailabilityPage() {
  return (
    <>
      <SiteHeader
        rootHref="/dashboard/technician"
        rootLabel="Dashboard"
        pageLabel="Availability"
      />
      <div className="flex flex-1 flex-col gap-4 p-4 lg:p-6">
        <div>
          <h1 className="text-2xl font-semibold">Availability</h1>
          <p className="text-sm text-muted-foreground">
            Set the hours customers can book you, day by day.
          </p>
        </div>

        <Card className="max-w-3xl">
          <CardContent className="space-y-3">
            {technicianAvailability.map((slot) => (
              <div
                key={slot.id}
                className="flex flex-wrap items-center gap-4 border-b pb-3 last:border-0 last:pb-0"
              >
                <div className="w-28 shrink-0 font-medium">
                  {dayLabels[slot.day]}
                </div>
                <Input
                  type="time"
                  defaultValue={slot.startTime}
                  className="w-32"
                  disabled={!slot.isActive}
                />
                <span className="text-muted-foreground">to</span>
                <Input
                  type="time"
                  defaultValue={slot.endTime}
                  className="w-32"
                  disabled={!slot.isActive}
                />
                <div className="ml-auto flex items-center gap-2">
                  <Switch defaultChecked={slot.isActive} />
                  <span className="text-sm text-muted-foreground">
                    {slot.isActive ? "Available" : "Off"}
                  </span>
                </div>
              </div>
            ))}
            <Button className="mt-2">Save Availability</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
