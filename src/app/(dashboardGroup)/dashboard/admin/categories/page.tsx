"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
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
import { useAdminCategories } from "@/features/admin/hooks/useAdminCategories";
import { useCreateCategory } from "@/features/admin/hooks/useCreateCategory";
import { TableRowsSkeleton } from "@/components/dashboard/loading-skeletons";
import { getApiErrorMessage } from "@/lib/utils";

const categorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  slug: z
    .string()
    .min(1, "Slug is required")
    .regex(/^[a-z0-9-]+$/, "Lowercase letters, numbers, and hyphens only"),
  description: z.string().optional(),
});

type CategoryFormValues = z.infer<typeof categorySchema>;

export default function AdminCategoriesPage() {
  const { data: categories, isLoading } = useAdminCategories();
  const { mutate, isPending } = useCreateCategory();

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: { name: "", slug: "", description: "" },
  });

  function onSubmit(values: CategoryFormValues) {
    mutate(values, {
      onSuccess: () => {
        toast.success("Category created");
        form.reset();
      },
      onError: (error) => {
        const message = getApiErrorMessage(
          error,
          "Couldn't create category. Please try again.",
        );
        toast.error(message);
      },
    });
  }

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
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <Field>
                <FieldLabel htmlFor="cat-name">Name</FieldLabel>
                <Input
                  id="cat-name"
                  placeholder="e.g. Roofing"
                  {...form.register("name")}
                />
                {form.formState.errors.name && (
                  <p className="text-xs text-destructive">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor="cat-slug">Slug</FieldLabel>
                <Input
                  id="cat-slug"
                  placeholder="e.g. roofing"
                  {...form.register("slug")}
                />
                {form.formState.errors.slug && (
                  <p className="text-xs text-destructive">
                    {form.formState.errors.slug.message}
                  </p>
                )}
              </Field>
              <div className="sm:col-span-2">
                <Field>
                  <FieldLabel htmlFor="cat-description">Description</FieldLabel>
                  <Input
                    id="cat-description"
                    placeholder="Short description shown to customers"
                    {...form.register("description")}
                  />
                </Field>
              </div>
              <Button type="submit" className="w-fit" disabled={isPending}>
                {isPending ? "Creating..." : "Create Category"}
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
              {isLoading && <TableRowsSkeleton columns={4} />}
              {categories?.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="font-medium">{category.name}</TableCell>
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
              {!isLoading && categories?.length === 0 && (
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
