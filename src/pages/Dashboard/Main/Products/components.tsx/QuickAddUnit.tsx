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

interface QuickAddUnitProps {
  quickUnitOpen: boolean
  setQuickUnitOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const QuickAddUnit = ({
  quickUnitOpen,
  setQuickUnitOpen,
}: QuickAddUnitProps) => {

  const [quickUnitName, setQuickUnitName] = useState("");
  const [quickUnitCode, setQuickUnitCode] = useState("");
  
    const handleQuickUnit = async () => {
      console.log("I'll figure out later")
    }

  return (
    <Dialog open={quickUnitOpen} onOpenChange={setQuickUnitOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader><DialogTitle>Quick Add Unit</DialogTitle></DialogHeader>
          <div className="grid gap-3 py-2">
            <div className="grid grid-cols-2 gap-3">
              <div><Label>Name</Label><Input value={quickUnitName} onChange={e => setQuickUnitName(e.target.value)} /></div>
              <div><Label>Code</Label><Input value={quickUnitCode} onChange={e => setQuickUnitCode(e.target.value)} /></div>
            </div>
            <Button onClick={handleQuickUnit}>Create</Button>
          </div>
        </DialogContent>
      </Dialog>
  )
}

export default QuickAddUnit