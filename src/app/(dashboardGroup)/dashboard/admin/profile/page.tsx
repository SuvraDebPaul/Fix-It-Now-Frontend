import { SiteHeader } from "@/components/dashboard/site-header";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function AdminProfilePage() {
  return (
    <>
      <SiteHeader
        rootHref="/dashboard/admin"
        rootLabel="Dashboard"
        pageLabel="Profile"
      />
      <div className="flex flex-1 flex-col gap-6 p-4 lg:p-6">
        <div>
          <h1 className="text-2xl font-semibold">Profile</h1>
          <p className="text-sm text-muted-foreground">
            Your admin account details.
          </p>
        </div>

        <Card className="max-w-2xl">
          <CardHeader className="flex-row items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-primary/20 text-lg text-primary">
                AD
              </AvatarFallback>
            </Avatar>
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
