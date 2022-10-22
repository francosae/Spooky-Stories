import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PostCard from '../components/PostCard'
import API from '../services/apiClient'
import ProfileCard from '../components/ProfileCard'

export default function Profile() {
    const [userData, setUserData] = useState(null)
    const [tab, setTab] = useState('Posts')
    const location = useLocation()
    useEffect(() => {
      async function fetchUser(){
        const { data } = await API.fetchUserData(location.pathname)
        setUserData(data) 
    }
      fetchUser()
    }, [])
    console.log(userData)
  return (
    <div className="container columns-2 flex gap-2 items-baseline">
    <div
        class="mt-4 grid grid-cols sm:grid-cols-2 lg:grid-cols-2 
        "
      >  
    {userData ?  
    <ProfileCard user={userData} /> : <></>}
    <div className="mx-auto max-w-screen px-4 lg:ml-[-250px] py-16 sm:px-6 lg:px-8 ">
    <span
  class="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm"
>
  <button
    onClick={() => setTab('Posts')}
    class={tab == 'Posts' ? "inline-block px-4 py-2 text-sm bg font-medium text-black hover:bg-[#ee7444] focus:relative bg-[#fa8e4f]" : "inline-block px-4 py-2 text-sm bg font-medium text-black hover:bg-gray-50 focus:relative bg-white"}
  >
    Posts
  </button>

  <button
    onClick={() => setTab('Likes')}
    class={tab == 'Likes' ? "inline-block px-4 py-2 text-sm bg font-medium text-black hover:bg-[#ee7444] focus:relative bg-[#fa8e4f]" : "inline-block px-4 py-2 text-sm bg font-medium text-black hover:bg-gray-50 focus:relative bg-white"}
  >
    Likes
  </button>

  <button
    onClick={() => setTab('Comments')}
    class={tab == 'Comments' ? "inline-block px-4 py-2 text-sm bg font-medium text-black hover:bg-[#ee7444] focus:relative bg-[#fa8e4f]" : "inline-block px-4 py-2 text-sm bg font-medium text-black hover:bg-gray-50 focus:relative bg-white"}
  >
    Comments
  </button>
</span>
     {userData ? 
     <>
      <div className="container columns-2 flex gap-2 items-baseline">
      <div
          class="mt-4 grid grid-cols-1 gap-px sm:grid-cols-1 lg:grid-cols-1 lg:gap-4
          "
        >
        {tab == 'Posts' ? <>
        {userData?.writtenPosts?.map((post, index) => {
        return <PostCard key={index} post={post} />
        })}
        </> : <></>} 
        {tab == 'Likes' ? <>
        {userData?.likedPosts?.map((post, index) => {
        return <PostCard key={index} post={post} />
        })}
        </> : <></>} 
        {tab == 'Comments' ? <>
        {userData?.writtenComments?.map((post, index) => {
        return <PostCard type='comment' key={index} post={post} />
        })}
        </> : <></>} 
      </div>
      </div>
    </>
      : <> User Does Not Exist </>}
    </div>
    </div>
    </div>
    )
}



