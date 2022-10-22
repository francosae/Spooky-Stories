import React, { useState, useEffect } from 'react'
import PostCard from '../components/PostCard'
import API from '../services/apiClient';
import { Link } from "react-router-dom";

function Feed() {
  return (
    <FeedGrid />
  )
}


function FeedGrid(){
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
    <div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center"
    >
        
    <div class="grid grid-cols-4 gap-4">
    {posts?.map((post, index) => {
        return <PostCard key={index} post={post} />
    })}
    </div>
    </div>
    </section>
    )
}
export default Feed