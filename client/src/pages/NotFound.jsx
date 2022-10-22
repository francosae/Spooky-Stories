import React from 'react'

function NotFound() {
  return (
    <div class="grid mb-[10%] mt-[10%] place-content-center bg-white">
    <div class="text-center">
        
     <img src="https://www.freeiconspng.com/uploads/ghost-icon-12.png" alt="404" width="250" height="350" />
        <h1
        class="mt-5 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
        👻 Boo!
        </h1>

        <p class="mt-0 text-gray-500">Spooky... we can't find that page.</p>
        <a
        href="/feed"
        class="mt-6 inline-block rounded bg-[#ECA72C] px-5 py-3 text-sm font-medium text-white hover:bg-[#bd8a33] focus:outline-none focus:ring"
        >
            Run Back Home
        </a>
    </div>
    </div>
  )
}

export default NotFound