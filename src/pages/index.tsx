import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Videocard from "@/components/Videocard";

export default () => {
  return (
    <div>
      <Videocard/>
    </div>
  )
}