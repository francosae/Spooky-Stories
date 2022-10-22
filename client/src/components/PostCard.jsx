import React, {useState} from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    
    <div class="mb-8 sm:break-inside-avoid">
        <Link to={`/posts/${post.authorUsername}/${post.id}`}>
            <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
            <p class="text-3xl">
                {post.title}
            </p>
            <br></br>
            <p class="leading-relaxed text-gray-700 break-words">
                {post.content}
            </p>
            </blockquote>
        </Link>
            <div class="mt-4 flex items-center gap-4">
            <img
                src="https://picsum.photos/seed/picsum/200/300"
                class="h-12 w-12 rounded-full object-cover"
            />
            <Link to={`/user/${post.authorUsername}/`}>
            <div class="text-sm">
                <p class="font-medium">{post.authorUsername}</p>
                <p class="mt-1">{post.createdAt}</p>
            </div>
            </Link>
            </div>
        </div>


  )
}

export default PostCard