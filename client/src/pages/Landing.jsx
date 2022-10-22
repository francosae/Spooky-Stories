import React from 'react'

function Landing() {
  return (
    <>
        <Hero />
    </>
  )
}

function Hero(){
    return(
        <section class="bg-gray-900 text-white">
        <div
            class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
        >
            <div class="mx-auto max-w-3xl text-center">
            <h1
                class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
                Understand User Flow.

                <span class="sm:block"> Increase Conversion. </span>
            </h1>

            <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                tenetur fuga ducimus numquam ea!
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
                <a
                class="group relative inline-block focus:outline-none focus:ring"
                href="/download"
                >
                <span
                    class="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"
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
                    class="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"
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
export default Landing