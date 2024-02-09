import Navbar from "@/components/Navbar"
import { VIDEOS } from "@/videos"
import VideoCardHorizontal from "@/components/VideoCardHorizontal"

export default () => {
    return (
        <div className="p-4">
            <Navbar />
            <div className="max-md:hidden flex flex-wrap justify-around pt-6">
                <VideoWithDescriptionUntilMediumBreakpoint />
                <VideoWrapperUntilMediumBreakpoint />
            </div>

            <div className="md:hidden flex-wrap pt-6">
                <VideoWithDescriptionAfterMediumBreakpoint />
                <VideoWrapperAfterMediumBreakpoint />
            </div>
        </div>
    )
}

const VideoWithDescriptionUntilMediumBreakpoint = () => {
    return (
        <div className="w-3/5">
            <video 
                width={'98%'} 
                height={'80px'} 
                controls 
                src='/Husn.mp4'
                className="border-solid border border-sky-300 rounded-md focus:outline-none"
            />
            <div className="text-2xl p-10 h-48 mt-8 bg-gray-600" style={{width: '98%'}}>
                Anuv Jain - HUSN (Official Video)
            </div>
        </div>
    )
}
const VideoWithDescriptionAfterMediumBreakpoint = () => {
    return (
        <div className="w-full">
            <video 
                width={'98%'} 
                height={'80px'} 
                controls 
                src='/Husn.mp4'
                className="border-solid border border-sky-300 rounded-md focus:outline-none"
            />
            <div className="text-2xl p-10 h-48 mt-8 bg-gray-600" style={{width: '98%'}}>
                Anuv Jain - HUSN (Official Video)
            </div>
        </div>
    )
}

const VideoWrapperUntilMediumBreakpoint = () => {
    return (
        <div className="w-2/5 pr-4 pl-4 pb-4">
            {
                VIDEOS.map(video => (
                    <div className="pr-3 pl-3 pb-10" key={Number(video!.id)}>
                        <VideoCardHorizontal video={video} />
                    </div>
                ))
            }
        </div>
    )
}
const VideoWrapperAfterMediumBreakpoint = () => {
    return (
        <div className="w-full">
            {
                VIDEOS.map(video => (
                    <div className="m-3" key={Number(video!.id)}>
                        <VideoCardHorizontal video={video} />
                    </div>
                ))
            }
        </div>
    )
}