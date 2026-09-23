const AppCardSkeleton = () => {
    return (
        <div className='relative flex flex-col bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden'>

            {/* ---- Shimmer Sweep Overlay ---- */}
            <div className='absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-linear-to-r from-transparent via-white/60 to-transparent pointer-events-none z-10' />

            {/* ---- Header Row ---- */}
            <div className='flex items-start gap-3.5 mb-4'>
                {/* App Logo placeholder (matches real: rounded-2xl, ring) */}
                <div className='w-14 h-14 rounded-2xl bg-linear-to-br from-gray-100 to-gray-50 ring-1 ring-gray-100 shrink-0 relative overflow-hidden'>
                    <div className='absolute inset-0 bg-linear-to-br from-[#7d73f2]/5 to-transparent' />
                </div>

                {/* Title + Company + Rating */}
                <div className='flex-1 min-w-0 pt-0.5 space-y-2'>
                    {/* Title */}
                    <div className='h-3.5 bg-gray-100 rounded-md w-3/4' />

                    {/* Company */}
                    <div className='h-2.5 bg-gray-100/80 rounded-md w-1/2' />

                    {/* Rating stars row */}
                    <div className='flex items-center gap-1 mt-2'>
                        <div className='flex gap-0.5'>
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-3 h-3 rounded-sm ${i < 3 ? 'bg-gray-200' : 'bg-gray-100'}`}
                                />
                            ))}
                        </div>
                        <div className='w-6 h-2.5 bg-gray-100 rounded-md ml-1' />
                    </div>
                </div>
            </div>

            {/* ---- Stats Grid (with brand tint in middle) ---- */}
            <div className='grid grid-cols-3 gap-2 py-3 border-y border-gray-100 mb-4'>
                {/* Reviews */}
                <div className='flex flex-col items-center gap-1.5'>
                    <div className='h-3 w-10 bg-gray-100 rounded-md' />
                    <div className='h-2 w-12 bg-gray-100/70 rounded-md' />
                </div>

                {/* Size */}
                <div className='flex flex-col items-center gap-1.5 border-x border-gray-100'>
                    <div className='h-3 w-12 bg-gray-100 rounded-md' />
                    <div className='h-2 w-8 bg-gray-100/70 rounded-md' />
                </div>

                {/* Downloads (brand tinted to hint at real color) */}
                <div className='flex flex-col items-center gap-1.5'>
                    <div className='h-3 w-10 bg-[#7d73f2]/15 rounded-md' />
                    <div className='h-2 w-14 bg-gray-100/70 rounded-md' />
                </div>
            </div>

            {/* ---- Footer: Progress + CTA ---- */}
            <div className='mt-auto flex items-center justify-between gap-3'>
                {/* Progress bar */}
                <div className='flex-1 h-1 bg-gray-100 rounded-full overflow-hidden'>
                    <div className='h-full w-2/3 bg-linear-to-r from-[#7d73f2]/30 to-purple-500/20 rounded-full' />
                </div>

                {/* CTA */}
                <div className='h-2.5 w-10 bg-gray-100 rounded-md' />
            </div>
        </div>
    )
}

export default AppCardSkeleton