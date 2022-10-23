import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import API from '../services/apiClient'
import NotFound from './NotFound'
import { Link } from "react-router-dom"
import { useCommentForm } from "../hooks/useCommentForm"
import { useAuthContext } from "../contexts/auth"
import { useLikeHook } from '../hooks/useLikeHook'
import { useUnlikeHook } from '../hooks/useUnlikeHook'
function Post() {
    const location = useLocation()
    const { user } = useAuthContext()
    const [postData, setPostData] = useState(null)
    const { form, handleOnInputChange, handleOnSubmit, setPostId, postId, commentCreated} = useCommentForm()
    const { likeSubmit, liked, setPostId1 } = useLikeHook()
    const { unlikeSubmit, unliked, setPostId2 } = useUnlikeHook()

    useEffect(() => {
        async function fetchPostData(){
            const { data } = await API.fetchUserPost(location.pathname)
            setPostData(data)

        }
        fetchPostData()
    }, [])
    if (postData?.id){
            if (!postId){
            setPostId(postData.id)
            setPostId2(postData?.id)
            setPostId1(postData?.id)
        }
    }
    if (commentCreated === true){
        window.location.reload(false);
    }
    console.log(postData)
    //likes

    async function unlike(){
        unlikeSubmit()
    }
    async function like(){
        likeSubmit()
    }
    //
  if (postData !== null){
    return (
    <>

<section class="bg-white dark:bg-gray-900 py-8 lg:py-16">
    
  <div class="max-w-2xl mx-auto px-4">
  <PostCard post={postData} />
    <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Comments ({postData.comments.length})</h2>
    </div>
    {user?.id == null ? <></>:<>
    {liked == true ? <>
    <button onClick={() => unlike()} class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
      >
    ♡
    </button>
    </>
    :
    <>
    <button onClick={() => like()} class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
      >
    ❤️
    </button>
    </>
    }


    <div class="mb-6">
    <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label for="comment" class="sr-only">Your comment</label>
            <textarea name="content" onChange={handleOnInputChange} rows="6"
                class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..." required></textarea>
        </div>
        <a
                class="group relative inline-block focus:outline-none focus:ring"
                >
                <span
                    class="absolute inset-0 translate-x-0 translate-y-0 bg-[#ECA72C] transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"
                ></span>

                <span
                    class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
                    onClick={handleOnSubmit}
                >
                    Post Comment
                </span>
        </a>
    </div></>}
    {postData?.comments?.reverse().map((comment, index) => {
        return <Comment key={index} data={comment} />
      })}
  </div>
</section>
</>
  )
}
  else return(
    <NotFound/>
  )
}

function PostCard({ post }){

    return(
    <>
    
        <article class="p-6 mb-6 text-base mt-5 rounded-md bg-[#f2f2f2] border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <footer class="flex justify-between items-center mb-2">
            <div class="flex items-center">
            <Link class="flex items-center" to={`/user/${post.authorUsername}/`}>
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                        class="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie Green"/>{post.authorUsername}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-03-12"
                        title="March 12th, 2022">{post.createdAt}</time></p>
            </Link>
            </div>
        </footer>
        <p class="text-5xl text-black dark:text-black">{post.title}</p>
        <br></br>
        <p class="text-lg text-black dark:text-black break-words" >{post.content}</p>
        <br></br>
    </article>
    <p class="text-md text-black dark:text-black">Liked By: 
        <div class="flex mb-5 -space-x-4 tooltip tooltip-left bg-white" data-tip={`Liked By: ${post?.likedBy.map((user) => {return (user.username)})} `}>
            {post.likedBy.map((user, index) => {
                return(
                <Link to={`/user/${user.username}/`}>
                <img class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://i.picsum.photos/id/273/200/200.jpg?hmac=q1g4PnYVQHWkGBWnLmy3VaiQHuPGrZXnpZK986TwkFg" alt=""/>
                </Link>
            )})}
        </div>
    </p>
    </>
    )
}

function Comment({ data }){
    return(

        <article class="p-6 mb-6 text-base  border-t rounded-md bg-[#f2f2f2] border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <footer class="flex justify-between items-center mb-2">
        <Link to={`/user/${data.authorUsername}/`}>
            <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 break-words dark:text-white"><img
                        class="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie Green"/>{data.authorUsername}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400 break-words"><time pubdate datetime="2022-03-12"
                        title="March 12th, 2022">{data.createdAt}</time></p>
            </div>
        </Link>
            <button id="dropdownComment3Button" data-dropdown-toggle="dropdownComment3"
                class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400bg-[#f2f2f2]  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                    </path>
                </svg>
                <span class="sr-only">Comment settings</span>
            </button>
        </footer>
        <p class="text-gray-500 dark:text-gray-400 break-words ">{data.content}</p>
    </article>
    )
}
export default Post