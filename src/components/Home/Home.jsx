import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full">
            {/* Hero Section with Equal Padding */}
           \<aside className="bg-white text-black min-h-screen flex items-center justify-center px-16">
    <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-16">
        {/* Left - Image */}
        <div className="flex-shrink-0 flex justify-center">
            <img 
                className="w-72 sm:w-96" 
                src="https://www.pngkey.com/png/full/649-6494832_i-start-coding-many-programming-languages-which-are.png" 
                alt="Coding" 
            />
        </div>

        {/* Right - Content */}
        <div className="max-w-xl text-center sm:text-left space-y-8">
            <h2 className="text-4xl font-bold sm:text-5xl">
                Download Now
                <span className="block">Lorem Ipsum</span>
            </h2>

            <Link
                className="inline-flex items-center px-6 py-3 font-medium text-white bg-orange-700 rounded-lg hover:opacity-75"
                to="/"
            >
                <svg
                    fill="white"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                >
                    <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
                &nbsp; Download now
            </Link>
        </div>
    </div>
</aside>


            {/* Second Image Section */}
            <div className="grid place-items-center mt-20">
                <img 
                    className="sm:w-96 w-48" 
                    src="https://img.freepik.com/premium-vector/freelancer-working-beach_701961-1883.jpg" 
                    alt="Freelancer" 
                />
            </div>

            {/* Heading */}
            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
        </div>
    );
}
