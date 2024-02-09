import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })
import Videogrid from "@/components/Videogrid"
import Navbar from "@/components/Navbar"
import Leftbar from "@/components/Leftbar"

export default () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Leftbar />
        <Videogrid />
      </div>
    </div>
  )
}