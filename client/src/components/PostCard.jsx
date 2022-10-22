import React, {useState} from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    
    <article key={post.id} class="rounded-xl border border-gray-700 bg-gray-800 p-4">
    <div class="flex items-center">
    <Link to={`/user/${post.authorUsername}/`}>
    <img
      alt="Developer"
      src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
      class="h-16 w-16 rounded-full object-cover"
    />

    <div class="ml-3">
      <h3 class="text-lg font-medium text-white">{post.authorUsername}</h3>
    </div>
    </Link>
  </div>
  <Link to={`/posts/${post.authorUsername}/${post.id}`}>
  <ul class="mt-4 space-y-2">
    <li>
      <a
        href="#"
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
      >
        <strong class="font-medium text-white">{post.title}</strong>
        <br></br>
        <p class="mt-1 text-xs font-medium text-gray-300 min-w-80">
          {post.content}
        </p>
        <br></br>
      </a>
    </li>
    </ul>
    </Link>
    <br></br>
    <span class='text-sm text-white font-thin'>Created {post.createdAt}</span>
    </article>


  )
}

export default PostCard