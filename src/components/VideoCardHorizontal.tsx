import { useRouter } from "next/router"
import { Line } from "./Line"
import type { Video } from "@/videos"

export default ({video}: {video: Video}) => {
    const router = useRouter()

    return (
        <div className="cursor-pointer" onClick={() => router.push('/video/1')}>
            <div className="flex justify-between">
                <div className="border border-solid border-sky-800 rounded-md mr-2 overflow-hidden">
                    <img src={String(video!.thumbnail)} style={{height: '96%'}} className="h-full rounded-md" />
                    <Line progress={9} />
                </div>
                <div>
                    <div className="text-gray-100 text-base font-serif">
                        {video!.title}
                    </div>
                    <div className="text-gray-400 text-sm font-normal">
                        {video!.author}
                    </div>
                    <div className="text-gray-400 text-sm font-normal">
                        {video!.views} • {video!.timeStamps} ago
                    </div>
                </div>
            </div>
        </div>
    )
}