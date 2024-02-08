import Videocard from "./Videocard"
import { VIDEOS } from "@/videos"

export default () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
            {
                VIDEOS.map(video => <Videocard video={video} key={video.id} />)
            }
        </div>
    )
}