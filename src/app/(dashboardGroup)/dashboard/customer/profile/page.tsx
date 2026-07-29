import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { SiteHeader } from "@/components/dashboard/site-header";
import { UserAvatar } from "@/components/shared/user-avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { getInitials } from "@/lib/utils";

export default function CustomerProfilePage() {
  return (
    <>
      <SiteHeader
        rootHref="/dashboard/customer"
        rootLabel="Dashboard"
        pageLabel="Profile"
      />
      <div className="flex flex-1 flex-col gap-6 p-4 lg:p-6">
        <DashboardPageHeader
          title="Profile"
          description="Your account and contact details."
        />

        <Card className="max-w-2xl">
          <CardHeader className="flex-row items-center gap-4">
            <UserAvatar
              name="Jane Doe"
              fallback={getInitials("Jane Doe")}
              className="h-16 w-16"
              fallbackClassName="bg-primary/20 text-lg text-primary"
            />
            <div>
              <CardTitle>Jane Doe</CardTitle>
              <p className="text-sm text-muted-foreground">
                jane.doe@example.com
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input id="name" defaultValue="Jane Doe" />
              </Field>
              <Field>
                <FieldLabel htmlFor="phone">Phone</FieldLabel>
                <Input id="phone" defaultValue="+1 (555) 019-2233" />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="address">Address</FieldLabel>
              <Input id="address" defaultValue="212 Maple St" />
            </Field>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="city">City</FieldLabel>
                <Input id="city" defaultValue="Springfield" />
              </Field>
              <Field>
                <FieldLabel htmlFor="area">Area</FieldLabel>
                <Input id="area" defaultValue="Downtown" />
              </Field>
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
