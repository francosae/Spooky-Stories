import { useAuthContext } from "../contexts/auth"
import PostCreationModal from "./PostModal"
function Navbar() {
    const { user, handleLogout } = useAuthContext()
    return (
    <nav class="bg-black px-2 sm:px-4 py-2.5 dark:bg-black fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="/" class="flex items-center">
        <img src="https://static.vecteezy.com/system/resources/previews/001/199/733/original/jack-o-lantern-png.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap text-white">Spooky Stories</span>
    </a>
    <div class="flex md:order-2">
        {user?.username == null ?
        <a href="/Register">
        <button type="button" class="text-white bg-[#ECA72C] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-[#ECA72C] dark:hover:bg-[#EE5622] dark:focus:ring-[#ECA72C]">Sign Up</button>
        </a>
        :
        <a href="/">
        <button type="button" onClick={handleLogout} class="text-white bg-[#ECA72C] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-[#ECA72C] dark:hover:bg-[#EE5622] dark:focus:ring-[#ECA72C]">Logout</button>
        </a>
        }
    </div>

    </div>
    </nav>
  )
}

export default Navbar