import {  createContext, useReducer } from "react";

// const DEFAULT_CONTEXT={
//     postList:[],
//     addPost: ()=>{},
//     deletePost:()=>{}, 
// }

export const PostList=createContext({
    postList:[],
    addPost: ()=>{},
    deletePost:()=>{}, 
});

const postListReducer =(currPostList,action)=>{
    let newPostList= currPostList;
    if(action.type === "DELETE_POST"){
        newPostList=currPostList.filter(
            (post) => post.id !== action.payload.postId
        );
       
    }
    else if(action.type === "ADD_POST"){
        newPostList=[action.payload,...currPostList];
    }
    return newPostList;
};

const PostListProvider= ({children})=>{ 
   

    const [ postList,dispatchPostList]=useReducer(
        postListReducer,
        DEFAULT_POST_LIST);

    const addPost=(userId,postTitle,postBody,reactions,tags)=>{
        dispatchPostList({
            type:"ADD_POST",
            payload:{
                id:Date.now(),
                title:postTitle,
                body:postBody,
                reactions:reactions,
                userId:userId,
                tags:tags ,  
            },
            }); 
        };
    

    const deletePost=(postId)=>{
        dispatchPostList({
            type:"DELETE_POST",
            payload:{
                postId:postId,
            },
        });

    }

    return (<PostList.Provider value={
        {postList:postList,
        addPost:addPost,
        deletePost:deletePost}}>
        {children}
    </PostList.Provider>
    ); 
};

const DEFAULT_POST_LIST=[{
    id:'1',
    title:'FGoing to kedarnath',
    body:'Hi Friends ,I am going on Trip',
    reactions:3,
    userId:'user-8',
    tags:["kedarnath","Trip"] ,   
},{
    id:'2',
    title:'FGoing to kedarnath',
    body:'Hi Friends ,I am going on Trip',
    reactions:19,
    userId:'user-9',
    tags:["kedarnath","Trip"] ,  
 },
];

export default PostListProvider;