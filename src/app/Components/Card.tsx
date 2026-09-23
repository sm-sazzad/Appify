import { IData } from '@/DataType/DataType'
import Image from 'next/image'
import Link from 'next/link'

interface AppCardProps {
    data: IData
}

const AppCard = ({ data }: AppCardProps) => {
    const ratingPercent = (data.ratingAvg / 5) * 100

    return (
        <Link
            href={`/apps/${data.id}`}
            className='group relative flex flex-col bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#7d73f2]/40 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_-8px_rgba(125,115,242,0.25)] transition-all duration-300 hover:-translate-y-1 overflow-hidden'
        >
            {/* Soft brand glow on hover (background) */}
            <div className='absolute inset-0 bg-gradient-to-br from-[#7d73f2]/0 via-[#7d73f2]/0 to-[#7d73f2]/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />

            {/* ---- Header Row ---- */}
            <div className='relative flex items-start gap-3.5 mb-4'>
                {/* App Logo */}
                <div className='relative w-14 h-14 rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0 ring-1 ring-gray-100 group-hover:ring-[#7d73f2]/30 group-hover:scale-105 transition-all duration-300 shadow-sm'>
                    <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        unoptimized
                        sizes='56px'
                        className='object-cover'
                    />
                </div>

                {/* Title + Company */}
                <div className='flex-1 min-w-0 pt-0.5'>
                    <h3 className='text-[15px] font-semibold text-gray-900 truncate leading-tight group-hover:text-[#7d73f2] transition-colors duration-200'>
                        {data.title}
                    </h3>
                    <p className='text-xs text-gray-500 truncate mt-1'>
                        {data.companyName}
                    </p>

                    {/* Inline rating (moved here for tighter grouping) */}
                    <div className='flex items-center gap-1 mt-1.5'>
                        <div className='flex items-center'>
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className={`w-3 h-3 ${i < Math.round(data.ratingAvg) ? 'text-yellow-400' : 'text-gray-200'} fill-current`}
                                    viewBox='0 0 20 20'
                                >
                                    <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                                </svg>
                            ))}
                        </div>
                        <span className='text-[11px] font-medium text-gray-600 ml-0.5'>
                            {data.ratingAvg.toFixed(1)}
                        </span>
                    </div>
                </div>
            </div>

            {/* ---- Stats Grid (3 columns, clean) ---- */}
            <div className='relative grid grid-cols-3 gap-2 py-3 border-y border-gray-100 mb-4'>
                {/* Reviews */}
                <div className='flex flex-col items-center text-center'>
                    <span className='text-[13px] font-semibold text-gray-900 leading-none'>
                        {data.reviews}
                    </span>
                    <span className='text-[10px] text-gray-400 mt-1 uppercase tracking-wide'>
                        Reviews
                    </span>
                </div>

                {/* Size */}
                <div className='flex flex-col items-center text-center border-x border-gray-100'>
                    <span className='text-[13px] font-semibold text-gray-900 leading-none'>
                        {data.size} MB
                    </span>
                    <span className='text-[10px] text-gray-400 mt-1 uppercase tracking-wide'>
                        Size
                    </span>
                </div>

                {/* Downloads */}
                <div className='flex flex-col items-center text-center'>
                    <span className='text-[13px] font-semibold text-[#7d73f2] leading-none'>
                        {data.downloads}
                    </span>
                    <span className='text-[10px] text-gray-400 mt-1 uppercase tracking-wide'>
                        Downloads
                    </span>
                </div>
            </div>

            {/* ---- Footer: Progress + CTA ---- */}
            <div className='relative mt-auto flex items-center justify-between gap-3'>
                {/* Rating progress bar (thin, subtle) */}
                <div className='flex-1'>
                    <div className='h-1 w-full bg-gray-100 rounded-full overflow-hidden'>
                        <div
                            className='h-full bg-gradient-to-r from-[#7d73f2] to-purple-500 rounded-full transition-all duration-500'
                            style={{ width: `${ratingPercent}%` }}
                        />
                    </div>
                </div>

                {/* CTA */}
                <span className='inline-flex items-center gap-1 text-[11px] font-semibold text-[#7d73f2] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300'>
                    View
                    <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M9 5l7 7-7 7' />
                    </svg>
                </span>
            </div>
        </Link>
    )
}

export default AppCard