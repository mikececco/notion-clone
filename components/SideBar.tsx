'use client'

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
import { useCollection } from 'react-firebase-hooks/firestore'
import { useUser } from "@clerk/nextjs"
import { collectionGroup, query, where } from "firebase/firestore"
import { db } from "@/firebase"



function SideBar() {
  const {user} = useUser() //from clerk

  const [data, loading, error] = useCollection(
    user &&
      //collection group to check if room corresponds to userId - connect entries with index (done in Firestore)
      query(
        collectionGroup(db, 'rooms'),
        where('userId', '==', user.emailAddresses[0].toString())
      )
    )


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
