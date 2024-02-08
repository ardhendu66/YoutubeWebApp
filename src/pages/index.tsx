import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })
import Videogrid from "@/components/Videogrid"
import Navbar from "@/components/Navbar"

export default () => {
  return (
    <div>
      <Navbar />
      <Videogrid />
    </div>
  )
}