import React from 'react'
import { useRegistrationForm } from '../hooks/useRegistrationForm'
import { useNavigate } from "react-router-dom"
function Register() {
    const { form, isProcessing, handleOnInputChange, handleOnSubmit, accountCreated } = useRegistrationForm();
    const navigate = useNavigate()
    console.log(accountCreated)
    if (accountCreated == true){
        navigate('/feed')
    }
  return (
    <section class="bg-white">
    <div class="lg:grid lg:min-h-[100vh] lg:grid-cols-12">
        <section
        class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
        >
        <img
            alt="Night"
            src="https://media.istockphoto.com/photos/candlestick-pumpkin-and-a-fire-in-the-dark-halloween-picture-id1030774210?k=20&m=1030774210&s=612x612&w=0&h=e4DI7mh3JYg_s8LeULfgbftCYYeO8ohFvsdb4-ki_yo="
            class="absolute inset-0 h-full w-full object-cover opacity-80"
        />

        <div class="hidden lg:relative lg:block lg:p-12">
            <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Welcome to Spooky Stories 🎃
            </h2>

            <p class="mt-4 leading-relaxed text-white/90">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
            dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
        </div>
        </section>

        <main
        aria-label="Main"
        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
        >
        <div class="max-w-xl lg:max-w-3xl">
            <div class="relative -mt-16 block lg:hidden">
            <a
                class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                href="/"
            >
                <span class="sr-only">Home</span>
                <svg
                class="h-8 sm:h-10"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
<path d="m11.6 11c0-.552-.448-1-1-1-1.655 0-4.945 0-6.6 0-.552 0-1 .448-1 1v9c0 .552.448 1 1 1h6.6c.552 0 1-.448 1-1 0-2.092 0-6.908 0-9zm9.4 6c0-.552-.448-1-1-1h-6c-.538 0-1 .477-1 1v3c0 .552.448 1 1 1h6c.552 0 1-.448 1-1zm0-13c0-.552-.448-1-1-1-1.537 0-4.463 0-6 0-.552 0-1 .448-1 1v9.6c0 .552.448 1 1 1h6c.552 0 1-.448 1-1 0-2.194 0-7.406 0-9.6zm-9.4 0c0-.552-.448-1-1-1-1.655 0-4.945 0-6.6 0-.552 0-1 .448-1 1v3.6c0 .552.448 1 1 1h6.6c.552 0 1-.448 1-1 0-1.017 0-2.583 0-3.6z" fill-rule="nonzero"/>
                </svg>
            </a>

            <h1
                class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
            >
                Welcome to Spooky Stories 🎃
            </h1>

            <p class="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
                nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
            </div>

            <div class="mt-8 grid grid-cols-6 gap-6">
            <div class="col-span-6">
                <label
                for="FirstName"
                class="block text-sm font-medium text-gray-700"
                >
                Username
                </label>

                <input
                id="username"
                name="username"
                type="username"
                autoComplete="username"
                onChange={handleOnInputChange}
                required
                class="mt-1 w-full rounded-md h-10  border-black text-sm text-gray-700 shadow-md"
                />
            </div>
            <div class="col-span-6">
                <label for="Email" class="block text-sm font-medium text-gray-700">
                Email
                </label>

                <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                onChange={handleOnInputChange}
                required
                class="mt-1 w-full rounded-md h-10  border-black text-sm text-gray-700 shadow-md"
                />
            </div>

            <div class="col-span-6 sm:col-span-3">
                <label
                for="Password"
                class="block text-sm font-medium text-gray-700"
                >
                Password
                </label>

                <input
                id="password"
                name="password"
                type="password"
                pattern=".{8,}"
                autoComplete="password"
                onChange={handleOnInputChange}
                required
                class="mt-1 w-full rounded-md h-10  border-black text-sm text-gray-700 shadow-md"
                />
            </div>

            <div class="col-span-6 sm:col-span-3">
                <label
                for="PasswordConfirmation"
                class="block text-sm font-medium text-gray-700"
                >
                Password Confirmation
                </label>

                <input
                id="passwordConfirm"
                name="passwordConfirm"
                type="passwordConfirm"
                pattern=".{8,}"
                autoComplete="passwordConfirm"
                onChange={handleOnInputChange}
                required
                class="mt-1 w-full rounded-md h-10  border-black text-sm text-gray-700 shadow-md"
                />
            </div>

            <div class="col-span-6">
                <label for="MarketingAccept" class="flex gap-4">
                <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                />

                <span class="text-sm text-gray-700">
                    I want to receive ghost emails (aka nothing)
                </span>
                </label>
            </div>

            <div class="col-span-6">
                <p class="text-sm text-gray-500">
                By creating an account, you agree to our terms and conditions and privacy policy (there's none).
                </p>
            </div>

            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
            <a
                class="group relative inline-block focus:outline-none focus:ring"
                >
                <span
                    class="absolute inset-0 translate-x-0 translate-y-0 bg-[#ECA72C] transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"
                ></span>

                <span
                    class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
                    onClick={handleOnSubmit}
                >
                    Create Account
                </span>
                </a>

                <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                Already have an account?
                ⠀
                <a href="/Login" class="text-gray-700 underline">Log in</a>.
                </p>
            </div>
            </div>
        </div>
        </main>
    </div>
    </section>
  )
}

export default Register