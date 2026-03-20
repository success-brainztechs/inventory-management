import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type React from "react"
import { useState } from "react"

interface QuickAddCategoryProps {
  quickCatOpen: boolean
  setQuickCatOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const QuickAddCategory = ({
  quickCatOpen,
  setQuickCatOpen,
}: QuickAddCategoryProps) => {

  const [quickCatName, setQuickCatName] = useState("");

  const handleQuickCat = async () => {
    console.log("I'll figure out later")
  }

  return (
    <Dialog open={quickCatOpen} onOpenChange={setQuickCatOpen}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Quick Add Category</DialogTitle>
        </DialogHeader>
        <div className="grid gap-3 py-2">
          <div>
            <Label>Category Name</Label>
            <Input
              value={quickCatName}
              onChange={(e) => setQuickCatName(e.target.value)}
            />
          </div>
          <Button onClick={handleQuickCat}>Create</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default QuickAddCategory
