const AppDetailSkeleton = () => {
    return (
        <div className='max-w-7xl mx-auto px-6 lg:px-8 py-10 animate-pulse'>

            {/* ---- Back Button ---- */}
            <div className='h-4 w-24 bg-gray-100 rounded-md mb-8' />

            {/* ---- Hero Section ---- */}
            <div className='flex flex-col md:flex-row items-start gap-6 md:gap-8 pb-8 border-b border-gray-100'>

                {/* App Logo */}
                <div className='w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gray-100 shrink-0' />

                {/* Title + Company + Meta + Actions */}
                <div className='flex-1 min-w-0 w-full'>
                    {/* Title */}
                    <div className='h-7 md:h-8 w-2/3 bg-gray-100 rounded-lg mb-3' />

                    {/* Company */}
                    <div className='h-4 w-1/3 bg-gray-100 rounded-md mb-5' />

                    {/* Rating + Downloads + Size inline meta */}
                    <div className='flex flex-wrap items-center gap-4 mb-6'>
                        <div className='h-4 w-20 bg-gray-100 rounded-md' />
                        <div className='h-4 w-24 bg-gray-100 rounded-md' />
                        <div className='h-4 w-16 bg-gray-100 rounded-md' />
                    </div>

                    {/* Action Buttons */}
                    <div className='flex flex-wrap gap-3'>
                        <div className='h-11 w-36 bg-gray-100 rounded-xl' />
                        <div className='h-11 w-11 bg-gray-100 rounded-xl' />
                    </div>
                </div>
            </div>

            {/* ---- Content Grid ---- */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10'>

                {/* ---- Left Column (Main Content) ---- */}
                <div className='lg:col-span-2 space-y-8'>

                    {/* Screenshots / Preview Section */}
                    <div>
                        <div className='h-5 w-32 bg-gray-100 rounded-md mb-4' />
                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                            {[...Array(3)].map((_, i) => (
                                <div
                                    key={i}
                                    className='aspect-9/16 rounded-xl bg-gray-100'
                                />
                            ))}
                        </div>
                    </div>

                    {/* Description Section */}
                    <div>
                        <div className='h-5 w-28 bg-gray-100 rounded-md mb-4' />
                        <div className='space-y-2.5'>
                            <div className='h-3.5 w-full bg-gray-100 rounded-md' />
                            <div className='h-3.5 w-full bg-gray-100 rounded-md' />
                            <div className='h-3.5 w-11/12 bg-gray-100 rounded-md' />
                            <div className='h-3.5 w-full bg-gray-100 rounded-md' />
                            <div className='h-3.5 w-3/4 bg-gray-100 rounded-md' />
                        </div>
                    </div>

                    {/* Info Grid (Details) */}
                    <div>
                        <div className='h-5 w-24 bg-gray-100 rounded-md mb-4' />
                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className='space-y-2'>
                                    <div className='h-3 w-16 bg-gray-100 rounded-md' />
                                    <div className='h-3.5 w-20 bg-gray-100 rounded-md' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ---- Right Column (Sidebar / Ratings) ---- */}
                <div className='lg:col-span-1'>
                    <div className='bg-white rounded-2xl border border-gray-100 p-6 space-y-6'>

                        {/* Rating Summary */}
                        <div className='text-center'>
                            <div className='h-10 w-20 mx-auto bg-gray-100 rounded-lg mb-2' />
                            <div className='h-3 w-24 mx-auto bg-gray-100 rounded-md mb-3' />
                            <div className='flex justify-center gap-1'>
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className='w-4 h-4 bg-gray-100 rounded-sm' />
                                ))}
                            </div>
                        </div>

                        {/* Rating Breakdown Bars */}
                        <div className='space-y-3 pt-4 border-t border-gray-100'>
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className='flex items-center gap-3'>
                                    <div className='h-3 w-6 bg-gray-100 rounded-md' />
                                    <div className='flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden'>
                                        <div
                                            className='h-full bg-gray-200 rounded-full'
                                            style={{ width: `${80 - i * 15}%` }}
                                        />
                                    </div>
                                    <div className='h-3 w-8 bg-gray-100 rounded-md' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDetailSkeleton