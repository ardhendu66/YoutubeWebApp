import Navbar from "@/components/Navbar"
import { VIDEOS, Video } from "@/videos"
import { useRouter } from "next/router"
import { Line } from "@/components/Line"

export default () => {
    return (
        <div className="p-4">
            <Navbar />
            <div className="flex justify-around pt-6">
                <div className="w-4/6">
                    <video 
                        width={'100%'} 
                        height={'80px'} 
                        controls 
                        src='/Husn.mp4'
                        className="border-solid border border-sky-300 rounded-md focus:outline-none"
                    />
                    <div className="text-2xl p-10 w-full h-48 mt-8 bg-gray-600">Anuv Jain - HUSN (Official Video)</div>
                </div>
                <div className="w-2/6 pr-4 pl-4 pb-4">
                    {
                        VIDEOS.map(video => (
                            <div className="pr-3 pl-3 pb-10">
                                <VideoCard key={video.id} video={video} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const VideoCard = ({video}: any) => {
    const router = useRouter()

    return (
        <div className="cursor-pointer" onClick={() => router.push('/video/1')}>
            <div className="flex justify-between">
                <div className="border border-solid border-sky-800 rounded-md mr-2 overflow-hidden">
                    <img src={video.thumbnail} style={{height: '96%'}} className="h-full rounded-md" />
                    <Line progress={9} />
                </div>
                <div>
                    <div className="text-gray-100 text-base font-serif">
                        {video.title}
                    </div>
                    <div className="text-gray-400 text-sm font-normal">
                        {video.author}
                    </div>
                    <div className="text-gray-400 text-sm font-normal">
                        {video.views} • {video.timeStamps} ago
                    </div>
                </div>
            </div>
        </div>
    )
}