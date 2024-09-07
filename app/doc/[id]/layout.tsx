import { auth } from "@clerk/nextjs/server"
import React from "react"

function DocLayout({
    children,
    params: {id}
  }: Readonly<{
    children: React.ReactNode,
    params: {
      id: string
    }
  }>) {
    auth().protect()


  return (
    <div>{children}</div>
  )
}

export default DocLayout
