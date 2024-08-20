import { MenuIcon } from "lucide-react"
import NewDocumentButton from "./NewDocumentButton"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



function SideBar() {

  const menuOptions = (
    <>
      <NewDocumentButton/>
      {/* My documents */}
      {/* List */}

      {/* Shared with me */}
      {/* List */}
    </>
  )
  return (
    <div className="p-2 md:p-5 bg-gray-200 relative">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon className=""/>
          </SheetTrigger>
          <SheetContent side='left'>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <div>
                {menuOptions}
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:inline">
        {menuOptions}
      </div>
    </div>
  )
}

export default SideBar
