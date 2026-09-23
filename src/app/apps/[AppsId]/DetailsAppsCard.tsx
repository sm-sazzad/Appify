import { IData } from '@/DataType/DataType'
import Image from 'next/image'
import Link from 'next/link'
import InstallAppBtn, { FavouriteBtn } from './detailspageBtn/install&favouriteBtn'

const DetailsAppsCard = ({ apps }: { apps: IData }) => {
    // 🛡️ Guard clauses — prevent runtime crashes
    if (!apps) return null

    const ratings = apps.ratings ?? []
    const maxCount = ratings.length > 0 ? Math.max(...ratings.map((r) => r.count)) : 1
    const totalRatings = ratings.reduce((sum, r) => sum + r.count, 0)

    return (
        <div className='relative min-h-screen bg-[#fafafa]'>

            {/* ---- Ambient Background ---- */}
            <div className='absolute inset-x-0 top-0 h-125 overflow-hidden pointer-events-none'>
                <div className='absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-[#7d73f2]/10 rounded-full blur-[100px]' />
                <div className='absolute top-20 right-1/4 w-75 h-75 bg-purple-400/10 rounded-full blur-[80px]' />
            </div>

            <div className='relative max-w-6xl mx-auto px-6 lg:px-8 py-8'>

                {/* ---- Back Button ---- */}
                <Link
                    href='/apps'
                    className='group inline-flex items-center gap-2.5 text-sm font-medium text-gray-500 hover:text-[#7d73f2] transition-colors mb-8'
                >
                    <span className='w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-gray-200 group-hover:border-[#7d73f2]/40 group-hover:bg-[#7d73f2]/5 group-hover:-translate-x-0.5 transition-all shadow-sm'>
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M15 19l-7-7 7-7' />
                        </svg>
                    </span>
                    Back to Apps
                </Link>

                {/* ============ HERO CARD ============ */}
                <div className='relative bg-white rounded-[28px] border border-gray-100 shadow-[0_20px_60px_-20px_rgba(125,115,242,0.25)] overflow-hidden'>

                    {/* Gradient banner */}
                    <div className='relative h-40 md:h-48 bg-linear-to-br from-[#7d73f2] via-[#8b7ef5] to-purple-600 overflow-hidden'>
                        {/* Radial glows */}
                        <div className='absolute -top-20 -left-20 w-80 h-80 bg-white/20 rounded-full blur-3xl' />
                        <div className='absolute -bottom-20 -right-20 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl' />

                        {/* Dot grid */}
                        <div
                            className='absolute inset-0 opacity-[0.15]'
                            style={{
                                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                                backgroundSize: '24px 24px'
                            }}
                        />

                        {/* Diagonal shine */}
                        <div className='absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-white/20' />
                    </div>

                    {/* Content */}
                    <div className='relative px-6 md:px-10 pb-8'>

                        {/* Logo overlapping banner */}
                        <div className='flex flex-col md:flex-row md:items-end gap-5 -mt-16 md:-mt-20'>

                            {/* Logo with ring */}
                            <div className='relative shrink-0'>
                                <div className='relative w-28 h-28 md:w-32 md:h-32 rounded-[28px] overflow-hidden bg-white ring-[6px] ring-white shadow-2xl shadow-[#7d73f2]/20'>
                                    <Image
                                        src={apps.image}
                                        alt={apps.title}
                                        fill
                                        unoptimized
                                        sizes='128px'
                                        className='object-cover'
                                    />
                                </div>
                                {/* Verified checkmark */}
                                <div className='absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-emerald-500 ring-4 ring-white flex items-center justify-center shadow-lg'>
                                    <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M5 13l4 4L19 7' />
                                    </svg>
                                </div>
                            </div>

                            {/* Title block */}
                            <div className='flex-1 md:pb-3 min-w-0'>
                                <h1 className='text-2xl md:text-3xl lg:text-[2.25rem] font-bold text-gray-900 leading-tight mb-5'>
                                    {apps.title}
                                </h1>

                                <div className='flex flex-wrap items-center gap-3'>
                                    <Link
                                        href='#'
                                        className='inline-flex items-center gap-1.5 text-sm font-semibold text-[#7d73f2] hover:text-[#6b60e8] transition-colors'
                                    >
                                        {apps.companyName}
                                        <svg className='w-3.5 h-3.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M5 13l4 4L19 7' />
                                        </svg>
                                    </Link>

                                    <span className='w-1 h-1 rounded-full bg-gray-300' />

                                    <span className='text-sm text-gray-500'>Free · In-app purchases</span>
                                </div>
                            </div>
                        </div>

                        {/* Meta pills */}
                        <div className='flex flex-wrap items-center gap-2 mt-7'>
                            {/* Rating */}
                            <div className='inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-linear-to-r from-yellow-50 to-amber-50 border border-yellow-200/60 shadow-sm'>
                                <svg className='w-3.5 h-3.5 text-yellow-500 fill-current' viewBox='0 0 20 20'>
                                    <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                                </svg>
                                <span className='text-xs font-bold text-gray-900'>{apps.ratingAvg}</span>
                                <span className='text-xs text-gray-500'>({apps.reviews})</span>
                            </div>

                            {/* Downloads */}
                            <div className='inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#7d73f2]/8 border border-[#7d73f2]/20 shadow-sm'>
                                <svg className='w-3.5 h-3.5 text-[#7d73f2]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 4v12m0 0l-4-4m4 4l4-4' />
                                </svg>
                                <span className='text-xs font-bold text-gray-900'>{apps.downloads}</span>
                            </div>

                            {/* Size */}
                            <div className='inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-gray-50 border border-gray-200/60 shadow-sm'>
                                <svg className='w-3.5 h-3.5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z' />
                                </svg>
                                <span className='text-xs font-bold text-gray-900'>{apps.size} MB</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className='flex flex-wrap items-center gap-3 mt-7'>
                            <InstallAppBtn apps={apps} />
                            <FavouriteBtn apps={apps} />
                            <button
                                aria-label='Share'
                                className='group w-13 h-13 inline-flex items-center justify-center rounded-2xl bg-white border border-gray-200 hover:border-[#7d73f2]/40 hover:bg-[#7d73f2]/5 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md'
                            >
                                <svg className='w-5 h-5 text-gray-500 group-hover:text-[#7d73f2] group-hover:scale-110 transition-all' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z' />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* ============ CONTENT GRID ============ */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8'>

                    {/* ---- LEFT COLUMN ---- */}
                    <div className='lg:col-span-2 space-y-6'>

                        {/* About Card */}
                        <div className='bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm'>
                            <SectionHeader
                                icon={
                                    <svg className='w-4 h-4 text-[#7d73f2]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                                    </svg>
                                }
                                title='About this app'
                            />
                            <p className='text-[15px] text-gray-600 leading-[1.8]'>
                                {apps.description}
                            </p>

                            {/* Tags */}
                            <div className='flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-100'>
                                {['Messaging', 'Communication', 'Social', 'Free'].map((tag) => (
                                    <span
                                        key={tag}
                                        className='px-3.5 py-1.5 text-xs font-semibold rounded-full bg-[#7d73f2]/8 text-[#7d73f2] border border-[#7d73f2]/15 hover:bg-[#7d73f2]/15 hover:border-[#7d73f2]/30 transition-all cursor-pointer'
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* App Information Card */}
                        <div className='bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm'>
                            <SectionHeader
                                icon={
                                    <svg className='w-4 h-4 text-[#7d73f2]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' />
                                    </svg>
                                }
                                title='App Information'
                            />

                            <div className='grid grid-cols-2 sm:grid-cols-3 gap-6'>
                                {[
                                    { label: 'Size', value: `${apps.size} MB` },
                                    { label: 'Downloads', value: apps.downloads, brand: true },
                                    { label: 'Reviews', value: apps.reviews },
                                    { label: 'Rating', value: `${apps.ratingAvg} / 5` },
                                    { label: 'Developer', value: apps.companyName },
                                    { label: 'Category', value: 'Messaging' },
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        className='group/detail space-y-1.5 p-3 -m-3 rounded-xl hover:bg-[#7d73f2]/3 transition-colors'
                                    >
                                        <p className='text-[10px] text-gray-400 uppercase tracking-[0.08em] font-bold'>
                                            {item.label}
                                        </p>
                                        <p className={`text-[15px] font-bold truncate ${item.brand ? 'text-[#7d73f2]' : 'text-gray-900'}`}>
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ---- RIGHT: RATINGS SIDEBAR ---- */}
                    <div className='lg:col-span-1'>
                        <div className='bg-white rounded-3xl border border-gray-100 p-6 md:p-8 lg:sticky lg:top-6 shadow-sm'>

                            <SectionHeader
                                icon={
                                    <svg className='w-4 h-4 text-[#7d73f2] fill-current' viewBox='0 0 20 20'>
                                        <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                                    </svg>
                                }
                                title='Ratings'
                            />

                            {/* Big rating */}
                            <div className='flex items-center gap-6 pb-6 border-b border-gray-100'>
                                <div className='text-center'>
                                    <div className='text-[64px] font-black text-transparent bg-clip-text bg-linear-to-br from-[#7d73f2] to-purple-600 leading-none tracking-tight'>
                                        {apps.ratingAvg}
                                    </div>
                                    <p className='text-[10px] text-gray-400 uppercase tracking-wider font-bold mt-2'>
                                        out of 5
                                    </p>
                                </div>
                                <div className='flex-1'>
                                    <div className='flex gap-0.5 mb-2'>
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-4.5 h-4.5 ${i < Math.round(apps.ratingAvg) ? 'text-yellow-400' : 'text-gray-200'} fill-current`}
                                                viewBox='0 0 20 20'
                                            >
                                                <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className='text-xs text-gray-500 font-medium'>
                                        {apps.reviews} reviews
                                    </p>
                                </div>
                            </div>

                            {/* Breakdown */}
                            <div className='space-y-3.5 pt-6'>
                                {[...ratings].reverse().map((rating) => {
                                    const percent = maxCount > 0 ? (rating.count / maxCount) * 100 : 0
                                    const starNum = rating.name.replace(' star', '')
                                    return (
                                        <div key={rating.name} className='flex items-center gap-3 group/bar'>
                                            <span className='text-xs font-bold text-gray-600 w-7 shrink-0 flex items-center gap-0.5'>
                                                {starNum}
                                                <svg className='w-3 h-3 text-yellow-400 fill-current' viewBox='0 0 20 20'>
                                                    <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                                                </svg>
                                            </span>

                                            <div className='flex-1 h-2 bg-gray-100 rounded-full overflow-hidden'>
                                                <div
                                                    className='h-full bg-linear-to-r from-[#7d73f2] via-purple-500 to-purple-600 rounded-full transition-all duration-700 group-hover/bar:from-[#6b60e8] group-hover/bar:to-purple-700'
                                                    style={{ width: `${percent}%` }}
                                                />
                                            </div>

                                            <span className='text-[11px] text-gray-400 w-12 text-right shrink-0 tabular-nums font-medium'>
                                                {formatCount(rating.count)}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Total */}
                            <div className='mt-6 pt-6 border-t border-gray-100 flex items-center justify-between'>
                                <span className='text-xs text-gray-500 font-medium'>
                                    Total ratings
                                </span>
                                <span className='text-sm font-bold text-gray-900 tabular-nums'>
                                    {formatCount(totalRatings)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---- Similar Apps ---- */}
                <div className='mt-14'>
                    <div className='flex items-center justify-between mb-6'>
                        <div>
                            <h2 className='text-xl font-bold text-gray-900'>
                                You might also like
                            </h2>
                            <p className='text-sm text-gray-500 mt-1'>
                                Similar apps picked for you
                            </p>
                        </div>
                        <Link
                            href='/apps'
                            className='group inline-flex items-center gap-1.5 text-sm font-bold text-[#7d73f2] hover:text-[#6b60e8] transition-colors'
                        >
                            View All
                            <svg className='w-4 h-4 group-hover:translate-x-0.5 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M9 5l7 7-7 7' />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

// ---- Reusable Section Header ----
const SectionHeader = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
    <div className='flex items-center gap-3 mb-6'>
        <div className='w-9 h-9 rounded-xl bg-linear-to-br from-[#7d73f2]/15 to-purple-500/10 border border-[#7d73f2]/10 flex items-center justify-center shadow-sm'>
            {icon}
        </div>
        <h2 className='text-lg font-bold text-gray-900'>
            {title}
        </h2>
    </div>
)

const formatCount = (n: number) => {
    if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
    if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`
    return n.toString()
}

export default DetailsAppsCard