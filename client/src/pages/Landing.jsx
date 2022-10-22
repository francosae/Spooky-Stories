import React from 'react'

function Landing() {
  return (
    <>
        <Hero />
        <Stories />
        <Placeholder />
    </>
  )
}

function Hero(){
    return(
        <section class=" text-[#221E22]">
        <div
            class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[100vh] lg:items-center"
        >
            <div class="mx-auto max-w-3xl text-center">
            <h1
                class="bg-gradient-to-r from-[#ECA72C] to-[#EE5622] bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
                Understand User Flow.

                <span class="sm:block"> Increase Conversion. </span>
            </h1>

            <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
                The best spooky stories are the ones that are shared. Share your spooky story with us and we'll share it with the world.
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
                <a
                class="group relative inline-block focus:outline-none focus:ring"
                href="/download"
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
    <div
        class=" mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[5] lg:items-center"
    >
        <div
        class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
        >
        <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
            <h2 class="text-3xl font-bold sm:text-4xl">Read some of our current stories! 📖👻</h2>

            <h1 class="mt-4 text-[#221E22]">
            Welcome to my website about sharing spooky stories. Our current stories are sure to send a chill up your spine. So sit back, relax, and enjoy and check out some of our current stories.
            </h1>

            <a
            class="mt-8 inline-flex items-center rounded border border-black bg-black px-8 py-3 text-white "
            href="/get-started"
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

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <a
            class="block rounded-xl border border-black p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="/accountant"
            >
            <span class="inline-block rounded-lg bg-gray-50 p-3">
                <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
                </svg>
            </span>

            <h2 class="mt-2 font-bold">Accountant</h2>

            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
            </p>
            </a>

            <a
            class="block rounded-xl border border-black p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="/accountant"
            >
            <span class="inline-block rounded-lg bg-gray-50 p-3">
                <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
                </svg>
            </span>

            <h2 class="mt-2 font-bold">Accountant</h2>

            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
            </p>
            </a>

            <a
            class="block rounded-xl border border-black p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="/accountant"
            >
            <span class="inline-block rounded-lg bg-gray-50 p-3">
                <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
                </svg>
            </span>

            <h2 class="mt-2 font-bold">Accountant</h2>

            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
            </p>
            </a>

            <a
            class="block rounded-xl border border-black p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="/accountant"
            >
            <span class="inline-block rounded-lg bg-gray-50 p-3">
                <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
                </svg>
            </span>

            <h2 class="mt-2 font-bold">Accountant</h2>

            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
            </p>
            </a>

            <a
            class="block rounded-xl border border-black p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="/accountant"
            >
            <span class="inline-block rounded-lg bg-gray-50 p-3">
                <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
                </svg>
            </span>

            <h2 class="mt-2 font-bold">Accountant</h2>

            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
            </p>
            </a>

            <a
            class="block rounded-xl border border-black p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="/accountant"
            >
            <span class="inline-block rounded-lg bg-gray-50 p-3">
                <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
                </svg>
            </span>

            <h2 class="mt-2 font-bold">Accountant</h2>

            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
            </p>
            </a>
        </div>
        </div>
    </div>
    </section>

    )
}


function Placeholder(){
    return(
    <section>
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 class="max-w-xl text-4xl font-bold sm:text-5xl">
        Read my personal favorites!
        </h2>
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
                alt="Woman"
                src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                class="h-12 w-12 rounded-full object-cover"
            />

            <div class="text-sm">
                <p class="font-medium">Gladis Lennon</p>
                <p class="mt-1">Head of SEO</p>
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
                alt="Woman"
                src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                class="h-12 w-12 rounded-full object-cover"
            />

            <div class="text-sm">
                <p class="font-medium">Gladis Lennon</p>
                <p class="mt-1">Head of SEO</p>
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
                alt="Woman"
                src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                class="h-12 w-12 rounded-full object-cover"
            />

            <div class="text-sm">
                <p class="font-medium">Gladis Lennon</p>
                <p class="mt-1">Head of SEO</p>
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
                alt="Woman"
                src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                class="h-12 w-12 rounded-full object-cover"
            />

            <div class="text-sm">
                <p class="font-medium">Gladis Lennon</p>
                <p class="mt-1">Head of SEO</p>
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
                alt="Woman"
                src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                class="h-12 w-12 rounded-full object-cover"
            />

            <div class="text-sm">
                <p class="font-medium">Gladis Lennon</p>
                <p class="mt-1">Head of SEO</p>
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
                alt="Woman"
                src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                class="h-12 w-12 rounded-full object-cover"
            />

            <div class="text-sm">
                <p class="font-medium">Gladis Lennon</p>
                <p class="mt-1">Head of SEO</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>

    )
}
export default Landing