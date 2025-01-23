import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  image_url: z.string().min(1, "Image URL is required").max(1000, "URL is too long"),
  status: z.enum(["okey", "wow", "warning"], "Status is required"),
  price: z.string().min(1, "Price is required"),
});