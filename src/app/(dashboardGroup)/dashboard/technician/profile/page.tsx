import { SiteHeader } from "@/components/dashboard/site-header";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export default function TechnicianProfilePage() {
  return (
    <>
      <SiteHeader
        rootHref="/dashboard/technician"
        rootLabel="Dashboard"
        pageLabel="Profile"
      />
      <div className="flex flex-1 flex-col gap-6 p-4 lg:p-6">
        <div>
          <h1 className="text-2xl font-semibold">Profile</h1>
          <p className="text-sm text-muted-foreground">
            How customers see you when browsing technicians.
          </p>
        </div>

        <Card className="max-w-2xl">
          <CardHeader className="flex-row items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-primary/20 text-lg text-primary">
                AB
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>Andron Black</CardTitle>
              <p className="text-sm text-muted-foreground">
                andron.black@example.com
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="phone">Phone</FieldLabel>
                <Input id="phone" defaultValue="+1 (555) 044-7781" />
              </Field>
              <Field>
                <FieldLabel htmlFor="hourlyRate">Hourly Rate</FieldLabel>
                <Input id="hourlyRate" type="number" defaultValue={60} />
              </Field>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="experience">
                  Experience (years)
                </FieldLabel>
                <Input id="experience" type="number" defaultValue={8} />
              </Field>
              <Field>
                <FieldLabel htmlFor="location">Location</FieldLabel>
                <Input id="location" defaultValue="Springfield" />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="bio">Bio</FieldLabel>
              <Textarea
                id="bio"
                rows={4}
                defaultValue="Licensed electrician with 8 years of residential and commercial experience."
              />
            </Field>
            <div className="flex items-center gap-3 rounded-lg border p-4">
              <Switch defaultChecked />
              <div>
                <p className="text-sm font-medium">Available for bookings</p>
                <p className="text-xs text-muted-foreground">
                  Turn off if you&apos;re fully booked or on leave.
                </p>
              </div>
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
