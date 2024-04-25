const ChatMessage = ({name,message})=>{
    return (
        <div className="flex items-center p-2 shadow-sm">
            <img className="h-8" alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9E3EoS1LZ8uL_1FDNukh3hep_hUi2aHhquQ&s"/> 
            <span className="font-bold px-2">{name}</span>
            <span className="text-sm">{message}</span>
        </div>
        
    )
}
export default ChatMessage;