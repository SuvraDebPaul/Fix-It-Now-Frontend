"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getAllCategories } from "@/features/services/api/services.api";
import { useCreateService } from "@/features/technicians/hooks/useCreateService";
import { getApiErrorMessage } from "@/lib/utils";

export function AddServiceDialog() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
  const { mutate, isPending } = useCreateService();

  const isValid = title.trim() && categoryId && description.trim() && price;

  function handleSubmit() {
    mutate(
      { categoryId, title, description, price: Number(price) },
      {
        onSuccess: () => {
          toast.success(`${title} added to your services`);
          setOpen(false);
          setTitle("");
          setCategoryId("");
          setDescription("");
          setPrice("");
        },
        onError: (error) => {
          const message = getApiErrorMessage(
            error,
            "Couldn't add this service. Please try again.",
          );
          toast.error(message);
        },
      },
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus />
          Add Service
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a Service</DialogTitle>
          <DialogDescription>
            New services appear on your public profile and in the Services
            marketplace once saved.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Field>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Ceiling Fan Installation"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="category">Category</FieldLabel>
            <Select value={categoryId} onValueChange={setCategoryId}>
              <SelectTrigger id="category" className="w-full">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories?.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel htmlFor="description">Description</FieldLabel>
            <Textarea
              id="description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What does this service include?"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="price">Price ($)</FieldLabel>
            <Input
              id="price"
              type="number"
              min={0}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="120"
            />
          </Field>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={!isValid || isPending}>
            {isPending ? "Saving..." : "Save Service"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
