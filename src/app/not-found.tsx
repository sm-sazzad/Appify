import Link from 'next/link'

const NotFound = () => {
    return (
        <div className='relative min-h-screen flex items-center justify-center bg-[#fafafa] overflow-hidden px-6'>

            {/* ---- Ambient Background Glows ---- */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute -top-40 left-1/4 w-[500px] h-[500px] bg-[#7d73f2]/15 rounded-full blur-[120px]' />
                <div className='absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[120px]' />
            </div>

            {/* ---- Dot grid ---- */}
            <div
                className='absolute inset-0 opacity-[0.4] pointer-events-none'
                style={{
                    backgroundImage: 'radial-gradient(circle, #7d73f2 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
                }}
            />

            {/* ---- Content ---- */}
            <div className='relative max-w-xl w-full text-center'>

                {/* 404 Big Number */}
                <div className='relative mb-6'>
                    <h1 className='text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#7d73f2] via-purple-500 to-[#7d73f2] select-none'>
                        404
                    </h1>

                    {/* Floating icon badge */}
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-white shadow-2xl shadow-[#7d73f2]/30 border border-gray-100 flex items-center justify-center -rotate-6 hover:rotate-0 transition-transform duration-500'>
                        <svg className='w-8 h-8 md:w-10 md:h-10 text-[#7d73f2]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                    </div>
                </div>

                {/* Heading */}
                <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                    Page not found
                </h2>

                {/* Description */}
                <p className='text-sm md:text-base text-gray-500 leading-relaxed mb-8 max-w-md mx-auto'>
                    Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                </p>

                {/* Actions */}
                <div className='flex flex-col sm:flex-row items-center justify-center gap-3'>
                    <Link
                        href='/'
                        className='group relative inline-flex items-center gap-2 py-3.5 px-8 bg-gradient-to-r from-[#7d73f2] to-purple-600 hover:from-[#6b60e8] hover:to-purple-700 rounded-2xl font-bold text-sm text-white shadow-xl shadow-[#7d73f2]/30 hover:shadow-2xl hover:shadow-[#7d73f2]/40 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden w-full sm:w-auto justify-center'
                    >
                        <span className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700' />
                        <svg className='relative w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
                        </svg>
                        <span className='relative'>Back to Home</span>
                    </Link>

                    <Link
                        href='/apps'
                        className='group inline-flex items-center gap-2 py-3.5 px-8 bg-white border border-gray-200 hover:border-[#7d73f2]/40 hover:bg-[#7d73f2]/5 rounded-2xl font-bold text-sm text-gray-700 hover:text-[#7d73f2] transition-all duration-300 shadow-sm hover:shadow-md w-full sm:w-auto justify-center'
                    >
                        <svg className='w-4 h-4 group-hover:scale-110 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
                        </svg>
                        Browse Apps
                    </Link>
                </div>

                {/* Footer hint */}
                <p className='mt-10 text-xs text-gray-400'>
                    Error code: <span className='font-mono font-semibold text-gray-500'>404</span> · Not Found
                </p>
            </div>
        </div>
    )
}

export default NotFound