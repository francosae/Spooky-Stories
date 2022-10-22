import React from 'react'

function PostCard() {
  return (
<article class="rounded-xl border border-gray-700 bg-gray-800 p-4">
  <div class="flex items-center">
    <img
      alt="Developer"
      src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
      class="h-16 w-16 rounded-full object-cover"
    />

    <div class="ml-3">
      <h3 class="text-lg font-medium text-white">Username</h3>
    </div>
  </div>

  <ul class="mt-4 space-y-2">
    <li>
      <a
        href="#"
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
      >
        <strong class="font-medium text-white">Title</strong>

        <p class="mt-1 text-xs font-medium text-gray-300 min-w-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          consequuntur deleniti, unde ab ut in!
        </p>
      </a>
    </li>
  </ul>
</article>

  )
}

export default PostCard