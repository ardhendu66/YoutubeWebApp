import { useRouter } from "next/router"
import type { Video } from "@/videos"
import { Line } from "./Line"

export default ({video}: {video: Video}) => {
    const router = useRouter()

    return (
        <div className="cursor-pointer" onClick={() => router.push('/video/1')}>
            <div className="rounded-xl overflow-hidden mb-5">
                <img src={String(video!.thumbnail)} />
                <Line progress={10} />
            </div>
            <div className="flex justify-between text-white-800 text-xl font-medium">
                <img src={String(video!.channelLogo)} className="w-12 h-12 rounded-full mt-2 mr-3" />
                {video.title}
            </div>
            <div className="text-gray-400 text-base font-normal pl-16">
                {video!.author}
            </div>
            <div className="flex">
                <div className="text-gray-400 text-base font-normal pl-16 pr-2">
                    {video!.views} 
                </div>
                <div className="text-gray-400 text-base font-normal">
                • {video!.timeStamps} ago
                </div>
            </div>
        </div>
    )
}