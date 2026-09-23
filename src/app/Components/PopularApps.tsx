import { getData } from '@/lib/DataFetch';
import React from 'react';
import Card from './Card';
import AppCard from './Card';
import Link from 'next/link';

const PopularApps = async () => {

    const allData = await getData();
    console.log(allData)

    return (
        <div id='popular' className='w-[90%] mx-auto'>
            <div className='text-center py-16 px-6 bg-purple-200'>
                {/* Optional: Small badge/label above heading */}
                <span className='inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-[#7d73f2]/10 text-[#7d73f2]'>
                    🔥 Trending Now
                </span>

                {/* Heading */}
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                    Popular on{' '}
                    <span className='text-transparent bg-clip-text bg-linear-to-r from-[#7d73f2] to-purple-600'>
                        Appify
                    </span>
                </h1>

                {/* Description */}
                <p className='text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
                    Find the most popular apps and discover something new.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    allData.map(data => <AppCard key={data.id} data={data} />)
                }
            </div>
            <div className='text-center my-5'>
                <Link href={"/all-apps"}>
                    <button className='group inline-flex items-center gap-2 px-5 py-2.5 bg-[#7d73f2] hover:bg-[#6b60e8] text-white text-sm font-semibold rounded-xl shadow-sm hover:shadow-lg hover:shadow-[#7d73f2]/30 transition-all duration-300 hover:-translate-y-0.5'>
                        View All
                        <svg className='w-4 h-4 group-hover:translate-x-0.5 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M9 5l7 7-7 7' />
                        </svg>
                    </button>
                </Link>
            </div>


        </div>
    );
};

export default PopularApps;