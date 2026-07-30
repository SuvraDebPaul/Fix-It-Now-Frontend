import z from "zod";

export const bookingSchema = z.object({
  scheduleTime: z
    .string()
    .min(1, "Please choose a date and time")
    .refine((value) => !isNaN(new Date(value).getTime()), {
      message: "Enter a valid date and time",
    })
    .refine((value) => new Date(value).getTime() > Date.now(), {
      message: "Schedule time must be in the future",
    }),
  address: z.string().min(5, "Enter a full address"),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
