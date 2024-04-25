import { useEffect, useState } from "react"
import { YOUTUBE_API } from "./uilities/constant"
import Video from "./Video"
import { Link } from "react-router-dom"

const VideoContainer = ()=>{
    const [videos,setVideos] = useState([])
    useEffect(()=>{
        getVideos()
    },[])
    const getVideos = async()=>{
        const data = await fetch(YOUTUBE_API)
        const json = await data.json()
        // console.log(json.items)
        setVideos(json.items)
    }
    return(
        <div className="flex flex-wrap">
            {videos.map(video=>
            <Link key={video.id} to = {"/watch?v=" + video.id}><Video  info = {video}/></Link>
            )}
            
        </div>
    )
}
export default VideoContainer