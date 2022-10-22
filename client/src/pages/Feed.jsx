import React, { useState, useEffect } from 'react'
import PostCard from '../components/PostCard'
import API from '../services/apiClient';
import { Link } from "react-router-dom";

import { useAuthContext } from "../contexts/auth"
import { usePostForm } from '../hooks/usePostForm'

function Feed() {
  return (
    <>
    <FeedGrid />
    </>
  )
}


function FeedGrid(){
    const { user } = useAuthContext()
    const [posts , setPosts] = useState(null)
    useEffect(() => {
      async function fetchPosts(){
        const { data } = await API.fetchPosts()
        setPosts(data)
      }
      fetchPosts()
    }, [])
    return(
    <section>
    <div class="mx-auto max-w-screen-xl px-4 min-h-[80vh] py-16 sm:px-6 lg:px-8">
    {user?.id == null ? <>
    </>: <><CreatePost /></>}

        <div
        class="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8"
        >
    {posts?.map((post, index) => {
        return <PostCard key={index} post={post} />
    })}
        </div>
    </div>
    </section>
    )
}


function CreatePost(){
    const { form, handleOnInputChange, handleOnSubmit, postCreated } = usePostForm()
    const [disabled, setDisabled] = useState(false)
    if (postCreated === true){
      window.location.reload(false);
  }

return(
    <div class="mb-4 w-full mt-10 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
    <input type="text" name="title" onChange={handleOnInputChange} placeholder="Story Title" className="input input-borderedpx-0 w-full text-lg text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" />
    <div class="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
        
    <textarea name="content" onChange={handleOnInputChange} rows="4" class="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a story.." required></textarea>
    </div>
    <div class="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
        <button type="submit" onClick={handleOnSubmit} disabled={disabled} class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-[#f16d21] rounded-lg focus:ring-4 hover:bg-[#b14a0f]">
            Post Story
        </button>
    </div>
</div>
)
}
export default Feed