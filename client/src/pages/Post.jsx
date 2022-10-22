import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import API from '../services/apiClient'
import NotFound from './NotFound'
import { Link } from "react-router-dom"
import { useCommentForm } from "../hooks/useCommentForm"
function Post() {
    const location = useLocation()
    const [postData, setPostData] = useState(null)
    const { form, handleOnInputChange, handleOnSubmit, setPostId, postId, commentCreated} = useCommentForm()
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
        }
    }
    if (commentCreated === true){
        window.location.reload(false);
    }
  if (postData !== null){
    return (
<section class="bg-white dark:bg-gray-900 py-8 lg:py-16">
  <div class="max-w-2xl mx-auto px-4">
    <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Comments ({postData.comments.length})</h2>
    </div>
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
    </div>
    {postData?.comments?.map((comment, index) => {
        return <Comment key={index} data={comment} />
      })}
  </div>
</section>
  )
}
  else return(
    <NotFound/>
  )
}


function Comment({ data }){
    return(
        <Link to={`/user/${data.authorUsername}/`}>
        <article class="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <footer class="flex justify-between items-center mb-2">
            <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                        class="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie Green"/>{data.authorUsername}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-03-12"
                        title="March 12th, 2022">{data.createdAt}</time></p>
            </div>
            <button id="dropdownComment3Button" data-dropdown-toggle="dropdownComment3"
                class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
        <p class="text-gray-500 dark:text-gray-400">{data.content}</p>
    </article>
    </Link>
    )
}
export default Post