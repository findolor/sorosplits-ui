import { ReactNode } from "react"
import Sidebar from "./sidebar"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center">
      <div className="container flex">
        <Sidebar />
        <main className="px-12 py-6 w-full">{children}</main>
      </div>
    </div>
  )
}

export default Layout
