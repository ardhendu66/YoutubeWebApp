import Searchbar from "./Searchbar"
import { useRouter } from "next/router"

export default () => {
    const router = useRouter()

    return (
        <div className="flex justify-between p-3">
            <div 
                className="text-md inline-flex items-center cursor-pointer"
                onClick={() => router.push('/')}
            >YouTube</div>
            <div>
                <Searchbar />
            </div>
            <div>
                Sign In
            </div>
        </div>
    )
}