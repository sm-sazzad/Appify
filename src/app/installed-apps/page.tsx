"use client"

import { AppContext } from "@/Context/AppProvider";
import Link from "next/link";
import { useContext, useState } from "react";
import InstalledCard from "./InstalledCard";

const page = () => {
    const { favouriteApp, setFavouriteApp, installedApp, setInstalledApp } = useContext(AppContext)
    const [btnType, setBtnType] = useState<'installed' | 'favourite'>("installed");
    return (
        <div>
            <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 w-[90%] mx-auto  pt-10 pb-8'>

                {/* Left: Heading */}
                <div className='max-w-xl'>
                    {
                        btnType === "installed" ? (<>

                            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-2'>
                                Your{' '}
                                <span className='text-transparent bg-clip-text bg-linear-to-r from-[#7d73f2] to-purple-600'>
                                    Installed Apps
                                </span>
                            </h1>
                            <p className='text-sm md:text-base text-gray-500 leading-relaxed'>
                                Manage and keep track of all the apps you've installed.
                            </p></>) : (
                            <>
                                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-2'>
                                    Your{' '}
                                    <span className='text-transparent bg-clip-text bg-linear-to-r from-[#7d73f2] to-purple-600'>
                                        Your Favourite Apps
                                    </span>
                                </h1>
                                <p className='text-sm md:text-base text-gray-500 leading-relaxed'>
                                    Keep your favourite apps close and discover them anytime.
                                </p>
                            </>
                        )
                    }
                </div>

                {/* Right: Buttons */}
                <div className='inline-flex p-1 gap-1 bg-white border border-gray-100 rounded-2xl shadow-sm self-start lg:self-end'>

                    <button
                        onClick={() => setBtnType('installed')}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm rounded-xl cursor-pointer transition-all duration-300 ${btnType === 'installed'
                            ? 'bg-linear-to-r from-[#7d73f2] to-purple-600 text-white font-semibold shadow-md shadow-[#7d73f2]/30'
                            : 'text-gray-600 font-medium hover:text-gray-900 hover:bg-gray-50'
                            }`}
                    >
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 4v12m0 0l-4-4m4 4l4-4' />
                        </svg>
                        Installed
                    </button>

                    <button
                        onClick={() => setBtnType('favourite')}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm rounded-xl cursor-pointer transition-all duration-300 ${btnType === 'favourite'
                            ? 'bg-linear-to-r from-[#7d73f2] to-purple-600 text-white font-semibold shadow-md shadow-[#7d73f2]/30'
                            : 'text-gray-600 font-medium hover:text-gray-900 hover:bg-gray-50'
                            }`}
                    >
                        <svg
                            className='w-4 h-4'
                            fill={btnType === 'favourite' ? 'currentColor' : 'none'}
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                        </svg>
                        Favourite
                    </button>

                </div>
            </div>
            <div className="mb-5">
                {
                    btnType === 'installed' ? (
                        installedApp.length === 0 ? (
                            <div className='text-center py-20 max-w-md mx-auto'>
                                <div className='w-16 h-16 mx-auto mb-5 rounded-2xl bg-[#7d73f2]/10 flex items-center justify-center'>
                                    <svg className='w-7 h-7 text-[#7d73f2]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 4v12m0 0l-4-4m4 4l4-4' />
                                    </svg>
                                </div>
                                <h1 className='text-xl font-bold text-gray-900 mb-2'>
                                    No apps installed
                                </h1>
                                <p className='text-sm text-gray-500 mb-6'>
                                    You haven't installed any apps yet. Start exploring the market.
                                </p>
                                <Link
                                    href='/apps'
                                    className='inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#7d73f2] to-purple-600 hover:from-[#6b60e8] hover:to-purple-700 text-white text-sm font-semibold rounded-xl shadow-md shadow-[#7d73f2]/30 hover:shadow-lg hover:shadow-[#7d73f2]/40 transition-all duration-300 hover:-translate-y-0.5'
                                >
                                    Install App
                                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M9 5l7 7-7 7' />
                                    </svg>
                                </Link>
                            </div>
                        ) : (
                            <div className='grid grid-cols-1 gap-5'>
                                {installedApp.map((app) => (
                                    <InstalledCard key={app.id} app={app} btnType={btnType} />
                                ))}
                            </div>
                        )
                    ) : favouriteApp.length === 0 ? (
                        <div className='text-center py-20 max-w-md mx-auto'>
                            <div className='w-16 h-16 mx-auto mb-5 rounded-2xl bg-[#7d73f2]/10 flex items-center justify-center'>
                                <svg className='w-7 h-7 text-[#7d73f2]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                                </svg>
                            </div>
                            <h1 className='text-xl font-bold text-gray-900 mb-2'>
                                No favourites yet
                            </h1>
                            <p className='text-sm text-gray-500 mb-6'>
                                Tap the heart on any app to save it here for quick access.
                            </p>
                            <Link
                                href='/apps'
                                className='inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#7d73f2] to-purple-600 hover:from-[#6b60e8] hover:to-purple-700 text-white text-sm font-semibold rounded-xl shadow-md shadow-[#7d73f2]/30 hover:shadow-lg hover:shadow-[#7d73f2]/40 transition-all duration-300 hover:-translate-y-0.5'
                            >
                                Go to App Market
                                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M9 5l7 7-7 7' />
                                </svg>
                            </Link>
                        </div>
                    ) : (
                        <div className='grid grid-cols-1 gap-5'>
                            {favouriteApp.map((app) => (
                                <InstalledCard key={app.id} app={app} btnType={btnType} />
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default page;