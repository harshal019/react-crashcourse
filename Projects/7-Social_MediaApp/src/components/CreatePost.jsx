
import  { useContext, useRef } from 'react'
import  { PostList } from '../store/post-list-store';

const CreatePost = () => {

   const{addPost} =useContext(PostList);
   
    const userIdElement=useRef();
    const postTitleElement=useRef();
    const postBodyElement=useRef();
    const reactionElement=useRef();
    const tagsElement=useRef();  

    const  handleSubmit =(event)=>{
        event.preventDefault();
        const userId=userIdElement.current.value;
        const postTitle=postTitleElement.current.value;
        const postBody=postBodyElement.current.value;
        const reactions=reactionElement.current.value;
        const tags=tagsElement.current.value.split("");

        userIdElement.current.value="";
        postTitleElement.current.value="";
        postBodyElement.current.value="";
        reactionElement.current.value="";
        tagsElement.current.value ="";


        addPost(userId,postTitle,postBody,reactions,tags);
    };
  return (
    <div>
        <form className='create-post' onSubmit={handleSubmit}>
             <div className="mb-3">
                <label htmlFor="userId" className="form-label">
                    Enter your User Id here
                </label>
                <input 
                type="text" 
                ref={userIdElement}
                className="form-control" 
                id="userId"
                placeholder="Your user id" />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Post Title
                </label>
                <input 
                type="text"
                ref={postTitleElement} 
                className="form-control" 
                id="title"
                placeholder='How are you feeling today' />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Post Content
                </label>
                <textarea 
                type="text"
                ref={postBodyElement} 
                className="form-control" 
                id="body"
                placeholder='Tell us more about it ' 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">
                    Number of Reaction                </label>
                <input 
                type="text"
                ref={reactionElement} 
                className="form-control" 
                id="reactions"
                placeholder='How many people reacted to this post' />
            </div>
            <div className="mb-3">
                <label htmlFor="hashtags" className="form-label">
                    Enter your hashtags                </label>
                <input 
                type="text" 
                ref={tagsElement}
                className="form-control" 
                id="hashtags"
                placeholder='What hashtag you used' />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default CreatePost;