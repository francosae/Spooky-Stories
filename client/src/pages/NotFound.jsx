import React from 'react'

function NotFound() {
  return (
    <div class="grid h-[60vh] place-content-center bg-white">
    <div class="text-center">
        
     <img src="https://www.freeiconspng.com/uploads/ghost-icon-12.png" alt="404" width="350" height="450" />
        <h1
        class="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
        👻 Boo!
        </h1>

        <p class="mt-4 text-gray-500">Spooky... we can't find that page.</p>
        <a
        href="#"
        class="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
        >
            Run Back Home
        </a>
    </div>
    </div>
  )
}

export default NotFound