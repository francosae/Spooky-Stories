import React from 'react'
import PostCard from '../components/PostCard'

function Feed() {
  return (
    <FeedGrid />
  )
}


function FeedGrid(){
    return(
    <section>
    <div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center"
    >
        
    <div class="grid grid-cols-4 gap-4">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
    </div>
    </section>
    )
}
export default Feed