import React, { useState } from 'react'
import { useAuthContext } from '../contexts/auth'
export default function ProfileCard({ users }) {
  const { user } = useAuthContext()
    return (
    <div class=" w-full max-w-sm sticky min-h-screen top-0 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4">
            <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                <span class="sr-only">Open dropdown</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
            </button>
        </div>
        <div class="flex flex-col items-center pb-10">
            <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://i.picsum.photos/id/909/200/200.jpg?hmac=MBq84AuRxQbIS381LPxRbG5b7THHQUSRuIupyC6IJGg" alt="Bonnie image" />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{users.username}</h5>
            <h6 class="font-medium"> Following {users.following.length} Followers {users.followedBy.length}</h6>
            <div class="flex mt-4 space-x-3 md:mt-6">
                {users?.email !== user?.email ? <><a href="" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#f16d21]rounded-lg ">Follow</a></> : <></>}
            </div>
        </div>
    </div>
  )
}