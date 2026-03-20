import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"
import AddProduct from "./components.tsx/AddProduct"
import QuickAddCategory from "./components.tsx/QuickAddCategory"
import QuickAddUnit from "./components.tsx/QuickAddUnit"
import { Card, CardContent } from "@/components/ui/card"
import { type ProductData } from "@/types/product-types"
import { productListService } from "@/services/product-services"

const Products = () => {
  const [quickUnitOpen, setQuickUnitOpen] = useState<boolean>(false)
  const [quickCatOpen, setQuickCatOpen] = useState<boolean>(false)
  const [open, setOpen] = useState(false)
  const [productsData, setProductsData] = useState<ProductData | null>(null)

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productListService()
        if (response.success) {
          setProductsData(response.data)
        }
      } catch (err) {
        console.error("Error while fetching products", err)
      }
    }

    if (!open) fetchProductList()
  }, [open])

  return (
    <div className="animate-fade-in">
      <div className="page-header flex items-center justify-between">
        <div>
          <h1 className="page-title">Products</h1>
          <p className="page-description">Manage your product catalog</p>
        </div>
        <AddProduct
          setQuickUnitOpen={setQuickUnitOpen}
          setQuickCatOpen={setQuickCatOpen}
          open={open}
          setOpen={setOpen}
        />
      </div>

      {/* Quick-add Category */}
      <QuickAddCategory
        quickCatOpen={quickCatOpen}
        setQuickCatOpen={setQuickCatOpen}
      />

      {/* Quick-add Unit */}
      <QuickAddUnit
        quickUnitOpen={quickUnitOpen}
        setQuickUnitOpen={setQuickUnitOpen}
      />

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead className="text-right">Cost</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Stock</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productsData?.products.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium">
                    {p.product_name}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {p.sku}
                  </TableCell>
                  <TableCell>{p.category}</TableCell>
                  <TableCell>{p.unit}</TableCell>
                  <TableCell className="text-right">₹{p.cost_price}</TableCell>
                  <TableCell className="text-right">₹{p.price}</TableCell>
                  <TableCell className="text-right font-medium">
                    {p.stock}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default Products
