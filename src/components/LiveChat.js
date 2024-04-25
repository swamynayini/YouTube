import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./uilities/chatSlice";
import { generateRandomName } from "./uilities/helper";

const LiveChat = ()=>{
    const [LiveMessage,setLiveMessage] = useState()
    const messageChat= useSelector((store)=>store.chat.message)
    const dispatch = useDispatch()
    useEffect(()=>{
        const i = setInterval(() => {
            
            dispatch(addMessage({
                name:generateRandomName(),
                message : "Helo welcome to My Youtube famliy "
            })
            )
            
        }, 1500);
        return ()=>clearInterval(i)
    },[])
    return (
        <>       
         <div className="w-full ml-2 h-[500px] p-2 border border-black bg-gray-100 overflow-y-scroll flex-col-reverse">
            <div>
            {messageChat.map((c,index)=>(<ChatMessage key={index} name = {c.name} message= {c.message}/>))}
            </div>
        </div>
        <form className="w-full p-2 ml-2 border border-black"
        onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
                name:"swamy",
                message:LiveMessage
            }))
        }}
        >
            <input className=" w-80 border border-black" type="text" value={LiveMessage} onChange={(e)=>{
                setLiveMessage(e.target.value)
            }}></input>
            <button className="bg-green-200 px-2 ">Send</button>
        </form>
        </>

    )
}
export default LiveChat;