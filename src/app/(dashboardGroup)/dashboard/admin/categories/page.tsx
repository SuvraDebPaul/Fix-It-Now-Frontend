import { LayoutGrid } from "lucide-react";
import { EmptyState } from "@/components/dashboard/empty-state";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { SiteHeader } from "@/components/dashboard/site-header";
import { ActiveBadge } from "@/components/shared/active-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { adminCategories } from "../data";

export default function AdminCategoriesPage() {
  return (
    <>
      <SiteHeader
        rootHref="/dashboard/admin"
        rootLabel="Dashboard"
        pageLabel="Categories"
      />
      <div className="flex flex-1 flex-col gap-6 p-4 lg:p-6">
        <DashboardPageHeader
          title="Categories"
          description="Service categories customers can browse by."
        />

        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle className="text-base">Add Category</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="cat-name">Name</FieldLabel>
                <Input id="cat-name" placeholder="e.g. Roofing" />
              </Field>
              <Field>
                <FieldLabel htmlFor="cat-slug">Slug</FieldLabel>
                <Input id="cat-slug" placeholder="e.g. roofing" />
              </Field>
              <div className="sm:col-span-2">
                <Field>
                  <FieldLabel htmlFor="cat-description">
                    Description
                  </FieldLabel>
                  <Input
                    id="cat-description"
                    placeholder="Short description shown to customers"
                  />
                </Field>
              </div>
              <Button type="submit" className="w-fit">
                Create Category
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {adminCategories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="font-medium">
                    {category.name}
                  </TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {category.slug}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {category.description}
                  </TableCell>
                  <TableCell>
                    <ActiveBadge isActive={category.isActive} />
                  </TableCell>
                </TableRow>
              ))}
              {adminCategories.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4}>
                    <EmptyState
                      icon={LayoutGrid}
                      title="No categories yet"
                      description="Create a category above to let customers browse services by type."
                    />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
