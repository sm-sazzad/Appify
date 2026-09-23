import Link from 'next/link'

const AppNotFound = () => {
    return (
        <div className='relative min-h-screen flex items-center justify-center bg-[#fafafa] overflow-hidden px-6'>

            {/* Ambient glows */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute -top-40 left-1/4 w-125 h-125 bg-[#7d73f2]/15 rounded-full blur-[120px]' />

                <div className='absolute -bottom-40 right-1/4 w-125 h-125 bg-purple-400/10 rounded-full blur-[120px]' />
            </div>

            <div className='relative max-w-lg w-full text-center'>

                {/* Icon */}
                <div className='relative mx-auto mb-8 w-24 h-24'>
                    <div className='absolute inset-0 rounded-[28px] bg-linear-to-br from-[#7d73f2] to-purple-600 rotate-6 opacity-20 blur-xl' />
                    <div className='relative w-full h-full rounded-[28px] bg-white border border-gray-100 shadow-2xl shadow-[#7d73f2]/20 flex items-center justify-center'>
                        <svg className='w-11 h-11 text-[#7d73f2]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.8} d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                    </div>
                </div>

                {/* Heading */}
                <h1 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                    App not found
                </h1>

                <p className='text-sm md:text-base text-gray-500 leading-relaxed mb-8'>
                    We couldn't find the app you're looking for. It may have been removed or the link is incorrect.
                </p>

                {/* Actions */}
                <div className='flex flex-col sm:flex-row items-center justify-center gap-3'>
                    <Link
                        href='/apps'
                        className='group inline-flex items-center gap-2 py-3 px-7 bg-linear-to-r from-[#7d73f2] to-purple-600 hover:from-[#6b60e8] hover:to-purple-700 rounded-2xl font-bold text-sm text-white shadow-lg shadow-[#7d73f2]/30 hover:shadow-xl hover:shadow-[#7d73f2]/40 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center'
                    >
                        <svg className='w-4 h-4 group-hover:-translate-x-0.5 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M15 19l-7-7 7-7' />
                        </svg>
                        Back to All Apps
                    </Link>

                    <Link
                        href='/'
                        className='group inline-flex items-center gap-2 py-3 px-7 bg-white border border-gray-200 hover:border-[#7d73f2]/40 hover:bg-[#7d73f2]/5 rounded-2xl font-bold text-sm text-gray-700 hover:text-[#7d73f2] transition-all duration-300 shadow-sm hover:shadow-md w-full sm:w-auto justify-center'
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AppNotFound