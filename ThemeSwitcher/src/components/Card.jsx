import React from 'react';

export default function Card() {
    return (
        <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <a href="/">
                <img
                    className="w-full h-64 object-cover"
                    src="https://hips.hearstapps.com/hmg-prod/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*"
                    alt="Golden Retriever"
                />
            </a>
            <div className="p-5">
                <a href="/">
                    <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Golden Retriever
                    </h5>
                </a>
                <div className="flex items-center mt-3 mb-5">
                    {Array(4)
                        .fill(0)
                        .map((_, index) => (
                            <svg
                                key={index}
                                className="w-5 h-5 text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        ))}
                    <svg
                        className="w-5 h-5 text-gray-300 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="ml-3 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-blue-100 dark:bg-blue-900 px-2 py-0.5 rounded">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$20</span>
                    <a
                        href="/"
                        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                    >
                        Own It
                    </a>
                </div>
            </div>
        </div>
    );
}
