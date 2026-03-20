import * as z from "zod"

// Create Product
export const createProductSchema = z.object({
  category: z.string().min(1, "Category is required."),
  unit: z.string().min(1, "Unit is required."),
  product_name: z
    .string()
    .min(3, "Product name must be at least 3 characters."),
  sku: z.string().min(3, "SKU must be at least 3 characters."),
  cost_price: z.number().nonnegative("Cost price must be a positive number."),
  default_price: z
    .number()
    .nonnegative("Default price must be a positive number."),
  minimum_stock_level: z
    .number()
    .int()
    .nonnegative("Stock level must be a non-negative integer.")
})
