import React from 'react'
import { useNavigate } from "react-router-dom"
function Landing() {
  return (
    <>
        <Hero />
        <Stories />
        <Divider />
        <Placeholder />
    </>
  )
}

function Hero(){
    const navigate = useNavigate()
    return(
        <section class=" text-[#221E22]">
        <div
            class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[100vh] lg:items-center"
        >
            <div class="mx-auto max-w-3xl text-center">
            <h1
                class="bg-gradient-to-r from-[#ECA72C] to-[#EE5622] bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
                Share and read spooky stories!

                <span class="sm:block">  </span>
            </h1>

            <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
                The best spooky stories are the ones that are shared. Share your spooky story with us and we'll share it with the world.
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
                <a
                class="group relative inline-block focus:outline-none focus:ring"
                href="/Register"
                >
                <span
                    class="absolute inset-0 translate-x-0 translate-y-0 bg-[#ECA72C] transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"
                ></span>

                <span
                    class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
                >
                    Sign Up
                </span>
                </a>


                <a
                class="group relative inline-block focus:outline-none focus:ring"
                href="/download"
                >
                <span
                    class="absolute inset-0 translate-x-0 translate-y-0 bg-[#EE5622] transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"
                ></span>

                <span
                    class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
                >
                    Read Stories
                </span>
                </a>
            </div>
            </div>
        </div>
        </section>
    )
}


function Stories(){
    return (
    <section class="bg-[#EE5622]">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div
                class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
            >
                <img
                alt="Party"
                src="https://media.istockphoto.com/photos/jack-o-lantern-picture-id613872668?k=20&m=613872668&s=612x612&w=0&h=_QkgsUeuQeOrS6wdi0iqciBsS_iRDzKM1obLvItTryA="
                class="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div class="lg:py-24">
                <h2 class="text-3xl font-bold sm:text-4xl">Read some of our current stories! 📖👻</h2>

                <h1 class="mt-4 text-[#221E22]">
                Welcome to my website about sharing spooky stories. Our current stories are sure to send a chill up your spine. So sit back, relax, and enjoy and check out some of our current stories.
                </h1>


                <a
                href="#"
                class="mt-8 inline-flex items-center rounded border border-black bg-black px-8 py-3 text-white hover:bg-transparent hover:text-black"
                >
                <span class="text-sm font-medium"> Read stories </span>

                <svg
                    class="ml-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                </svg>
                </a>
            </div>
            </div>
        </div>
    </section>

    )
}

function Divider(){
    return (
        <div
        class="bg-black px-4 py-3 text-white sm:flex sm:items-center sm:justify-center sm:px-6 lg:px-8 "
        >
        <h2 class="text-center text-lg font-medium sm:text-left">
            Check out some user reviews!
        </h2>
        <p>
        ⠀
        </p>
        </div>
    )
}
function Placeholder(){
    return(
    <section>
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div
        class="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8"
        >
        
        <div class="mb-8 sm:break-inside-avoid">
            <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
            <p class="leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                minima dicta amet, molestiae aliquam incidunt suscipit recusandae
                labore ratione doloremque, architecto et illo minus quo tenetur
                ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam
                corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim
                ad inventore laudantium est illum voluptatem quis.
            </p>
            </blockquote>

            <div class="mt-4 flex items-center gap-4">
            <img
                src="https://picsum.photos/seed/picsum/200/300"
                class="h-12 w-12 rounded-full object-cover"
            />

            <div class="text-sm">
                <p class="font-medium">Paul Franco</p>
                <p class="mt-1">Cool Guy</p>
            </div>
            </div>
        </div>

        <div class="mb-8 sm:break-inside-avoid">
            <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
            <p class="leading-relaxed text-gray-700">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel
                quo deserunt quos expedita minima incidunt sed tempora, a architecto
                consectetur reprehenderit, in repellat voluptatum.
            </p>
            </blockquote>

            <div class="mt-4 flex items-center gap-4">
            <img
                src="https://picsum.photos/id/237/200/300"
                class="h-12 w-12 rounded-full object-cover"
            />

            <div class="text-sm">
                <p class="font-medium">Paul Franco</p>
                <p class="mt-1">Cool Guy</p>
            </div>
            </div>
        </div>

        <div class="mb-8 sm:break-inside-avoid">
            <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
            <p class="leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                beatae incidunt perferendis soluta facilis voluptas dicta
                repudiandae quasi asperiores libero, exercitationem molestiae autem
                sapiente dolore nulla non consequatur. Eaque, dolores.
            </p>
            </blockquote>

            <div class="mt-4 flex items-center gap-4">
            <img
                src="https://picsum.photos/200/300?grayscale"
                class="h-12 w-12 rounded-full object-cover"
            />

            <div class="text-sm">
                <p class="font-medium">Paul Franco</p>
                <p class="mt-1">Cool Guy</p>
            </div>
            </div>
        </div>

        <div class="mb-8 sm:break-inside-avoid">
            <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
            <p class="leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                doloribus eius aut unde, dolores accusantium!
            </p>
            </blockquote>

            <div class="mt-4 flex items-center gap-4">
            <img
                src="https://i.picsum.photos/id/5/200/200.jpg?hmac=oN9VtXdJYLSFssji8vCr48JaI-e5Zi4eH9GAiYBB_Ig"
                class="h-12 w-12 rounded-full object-cover"
            />

            <div class="text-sm">
                <p class="font-medium">Paul Franco</p>
                <p class="mt-1">Cool Guy</p>
            </div>
            </div>
        </div>

        <div class="mb-8 sm:break-inside-avoid">
            <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
            <p class="leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a
                voluptatum quidem nulla quisquam natus velit provident earum esse,
                odio numquam labore recusandae similique sunt.
            </p>
            </blockquote>

            <div class="mt-4 flex items-center gap-4">
            <img
                src="https://i.picsum.photos/id/494/200/200.jpg?hmac=U0wPc_GayOgCTqCyWzhy9Cc_mj8wZEPjLdqILTEl4AM"
                class="h-12 w-12 rounded-full object-cover"
            />

            <div class="text-sm">
                <p class="font-medium">Paul Franco</p>
                <p class="mt-1">Cool Guy</p>
            </div>
            </div>
        </div>

        <div class="mb-8 sm:break-inside-avoid">
            <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
            <p class="leading-relaxed text-gray-700">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut
                necessitatibus, repudiandae qui dolor minima.
            </p>
            </blockquote>

            <div class="mt-4 flex items-center gap-4">
            <img
                src="https://i.picsum.photos/id/171/200/200.jpg?hmac=Iac8JDq1zmWNTEFRE3gkPZthKsJwpOS76FjbzDkGSc8"
                class="h-12 w-12 rounded-full object-cover"
            />

            <div class="text-sm">
                <p class="font-medium">Paul Franco</p>
                <p class="mt-1">Cool Guy</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>

    )
}
export default Landing