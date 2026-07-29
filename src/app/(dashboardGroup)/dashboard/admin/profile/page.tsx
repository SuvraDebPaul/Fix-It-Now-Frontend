import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { SiteHeader } from "@/components/dashboard/site-header";
import { UserAvatar } from "@/components/shared/user-avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { getInitials } from "@/lib/utils";

export default function AdminProfilePage() {
  return (
    <>
      <SiteHeader
        rootHref="/dashboard/admin"
        rootLabel="Dashboard"
        pageLabel="Profile"
      />
      <div className="flex flex-1 flex-col gap-6 p-4 lg:p-6">
        <DashboardPageHeader
          title="Profile"
          description="Your admin account details."
        />

        <Card className="max-w-2xl">
          <CardHeader className="flex-row items-center gap-4">
            <UserAvatar
              name="Admin User"
              fallback={getInitials("Admin User")}
              className="h-16 w-16"
              fallbackClassName="bg-primary/20 text-lg text-primary"
            />
            <div>
              <CardTitle>Admin User</CardTitle>
              <p className="text-sm text-muted-foreground">
                admin@fixitnow.com
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input id="name" defaultValue="Admin User" />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" defaultValue="admin@fixitnow.com" />
              </Field>
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
