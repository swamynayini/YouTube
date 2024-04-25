
const CommentContainer = ()=>{
    const Comment = ({data})=>{
        const {name,text} = data;
        return (
            <div>
                <img alt="user" src="https://freesvg.org/img/abstract-user-flat-4.png"/>
                <div>
                    <p>{name}</p>
                    <p>{text}</p>
                </div>
            </div>
        )
    }
    const CommentList = ({comments})=>{
        return comments.map((comment, index) => (
            <div key={index}>
                <Comment data = {comment}/>
              <div className="pl-5 border border-l-black ml-5">
                    <CommentList comments={comment} />
              </div>
            </div>
          ));
    }
    return (
            <div className=" p-2 m-5 ">
                <h1 className=" text-2xl font-bold">Comments:</h1>
            </div>
        
        
    )
}
export default CommentContainer;