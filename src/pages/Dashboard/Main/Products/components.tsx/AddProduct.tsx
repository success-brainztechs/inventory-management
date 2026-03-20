import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import type z from "zod"
import { createProductSchema } from "@/schemas/product-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { CreateProductRequest } from "@/types/product-types"
import { createProductService } from "@/services/product-services"
import { toast } from "sonner"

interface AddProductProps {
  setQuickUnitOpen: React.Dispatch<React.SetStateAction<boolean>>
  setQuickCatOpen: React.Dispatch<React.SetStateAction<boolean>>
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const dummyCategories = [
  "Building Materials",
  "Steel",
  "Aggregates",
  "Plumbing",
  "Electrical",
]

const dummyUnits = [
  {
    acronym: "pcs",
    name: "Piece (pcs)",
  },
  {
    acronym: "bag",
    name: "Bag (bag)",
  },
  {
    acronym: "kg",
    name: "Kilogram (kg)",
  },
  {
    acronym: "cft",
    name: "Cubic Feet (cft)",
  },
  {
    acronym: "mtr",
    name: "Metre (mtr)",
  },
]

const AddProduct = ({ setQuickCatOpen, setQuickUnitOpen, open, setOpen }: AddProductProps) => {
  
  const form = useForm<z.infer<typeof createProductSchema>>({
    resolver: zodResolver(createProductSchema),
    //Add these if you need
    // defaultValues: {
    //   category: "Building Materials",
    //   unit: "kg",
    //   product_name: "Chinese Brick",
    //   sku: "BRICK-CHN-001",
    //   cost_price: 1000,
    //   default_price: 1500,
    //   minimum_stock_level: 20,
    // },
  })

  const onSubmit = async (data: z.infer<typeof createProductSchema>) => {
    try{
      const payload: CreateProductRequest = {
        category: data.category,
        unit: data.unit,
        product_name: data.product_name,
        sku: data.sku,
        cost_price: data.cost_price,
        default_price: data.default_price,
        minimum_stock_level: data.minimum_stock_level
      }

      const response = await createProductService(payload)
      if(response.success){
        toast.success("Product created")
        form.reset()
        setOpen(false)
      }else{
        toast.error("Couldn't create a product")
      }
    }catch(err){
      console.error("Error while creating product ", err)
      toast.error("An error occurred")
    }
  }

  return (
    <form id="product-form" onSubmit={form.handleSubmit(onSubmit)}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button type="button">
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="mb-0.5">
            <DialogTitle>Add New Product</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {/* Form fields are inside field group */}
            <FieldGroup>
              <div className="grid grid-cols-2 gap-4">
                {/* Product Name */}
                <div>
                  <Controller
                    name="product_name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel>Name</FieldLabel>
                        <Input {...field} placeholder="Product name" />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </div>

                <div>
                  <Controller
                    name="sku"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel>SKU</FieldLabel>
                        <Input {...field} placeholder="e.g. STEEL-5MM-001" />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </div>
              </div>

              {/* Category and Unit */}
              <div className="grid grid-cols-2 gap-4">
                {/* Category */}
                <div>
                  <Controller
                    name="category"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel>Category</FieldLabel>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {dummyCategories.map((c) => (
                              <SelectItem key={c} value={c}>
                                {c}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Button
                    variant={"link"}
                    type="button"
                    onClick={() => setQuickCatOpen(true)}
                    className="mt-1 text-xs text-primary hover:underline"
                  >
                    + Add new category
                  </Button>
                </div>

                {/* Unit */}
                <div>
                  <Controller
                    name="unit"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel>Unit</FieldLabel>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            {dummyUnits.map((c) => (
                              <SelectItem key={c.acronym} value={c.acronym}>
                                {c.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Button
                    type="button"
                    variant={"link"}
                    onClick={() => setQuickUnitOpen(true)}
                    className="mt-1 text-xs text-primary hover:underline"
                  >
                    + Add new unit
                  </Button>
                </div>
              </div>

              {/* Prices */}
              <div className="grid grid-cols-2 gap-4">
                {/* Cost Price */}
                <div>
                  <Controller
                    name="cost_price"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel>Cost Price</FieldLabel>
                        <Input
                          {...field}
                          type="number"
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </div>

                {/* Selling Price */}
                <div>
                  <Controller
                    name="default_price"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel>Selling Price</FieldLabel>
                        <Input
                          {...field}
                          type="number"
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </div>
              </div>

              {/* Minimum Stock level */}
              <div>
                <Controller
                  name="minimum_stock_level"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel>Min Stock Level</FieldLabel>
                      <Input
                        {...field}
                        type="number"
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>
            </FieldGroup>

            {/*Submission button */}
            <Button type="submit" form="product-form">
              Save Product
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </form>
  )
}

export default AddProduct
