import { useDispatch } from "react-redux"
import { toggleMenu } from "./uilities/appSilce"
import { useEffect, useState } from "react"
import { YOUTUBE_SEARCH_API } from "./uilities/constant"

const Header = ()=>{
    const [searchSuggetion,setSearchSuggetion] = useState("")
    const [suggetions ,setSuggetions] = useState([])
    const [showSeggetion,setShowSuggetion] = useState(false)
    useEffect(()=>{
        const timer = setTimeout(()=>getSearchSuggetion(),200);
        return ()=>{
            clearTimeout(timer)
        }
    },[searchSuggetion])
    const getSearchSuggetion = async()=>{
        // console.log("API CALL - " +searchSuggetion)
        const data = await fetch(YOUTUBE_SEARCH_API + searchSuggetion)
        const json = await data.json()
        setSuggetions(json[1])
    }
    const dispatch = useDispatch()
    const toggelMenuHandler = ()=>{
        dispatch(toggleMenu())
    }
    
    return(
        <div className=" grid grid-flow-col p-2 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img 
                onClick={()=>toggelMenuHandler()}
                className="h-9 cursor-pointer" alt="manu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2qzjGHx362VfxQWKWwi2GCEoyqUnsRIm9jEF2oIlWx6Z76KjowacdQTq8s4UfonUSnA&usqp=CAU"/>
                <a href="/">
                <img className="h-9 mx-5" alt="Youtube" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5nTFcVxivUjX3hwzPpCRrt7nubqYIr2UQ-Q&s"/>
                </a>
            </div>
            <div className="col-span-10 px-10">
                <div>
                <input className=" px-5 border border-gray-400 w-1/2 rounded-l-full p-2" 
                type="text"
                name="search"
                value={searchSuggetion}
                onChange={((e)=>setSearchSuggetion(e.target.value))}
                onFocus={()=>setShowSuggetion(true)}
                onBlur={()=>setShowSuggetion(false)}
                
                />
                <button className="border border-gray-400 rounded-r-full p-2">🔎</button>
                </div>
                {showSeggetion && (<div className=" py-2 px-5 m-1 w-[32rem] fixed  rounded-lg">
                    <ul>
                        {suggetions.map(s=><li key={s} className="px-2 shadow-sm bg-white hover:bg-gray-100" > 🔍{s}</li>)}
                        
                        
                    </ul>
                </div>)}
            </div>
            <div className="col-span-1">
                <img className="h-8" alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9E3EoS1LZ8uL_1FDNukh3hep_hUi2aHhquQ&s"/>
            </div>
        </div>
    ) 
}
export default Header
