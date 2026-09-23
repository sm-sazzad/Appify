import { IData } from '@/DataType/DataType'
import Image from 'next/image'
import Link from 'next/link'
import Uninstall from './UnstallRemoveBtn/UnstallRemoveBtn'

const InstalledCard = ({ app, btnType }: { app: IData, btnType: string }) => {
    return (
        <div className='w-[90%] mx-auto group flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-[#7d73f2]/30 shadow-sm hover:shadow-[0_8px_24px_-8px_rgba(125,115,242,0.2)] transition-all duration-300 '>

            {/* ---- Logo + Info (clickable → details) ---- */}
            <Link
                href={`/apps/${app.id}`}
                className='flex items-center gap-4 flex-1 min-w-0'
            >
                {/* Logo */}
                <div className='relative w-14 h-14 rounded-xl overflow-hidden bg-gray-50 shrink-0 ring-1 ring-gray-100 group-hover:ring-[#7d73f2]/30 transition-all duration-300'>
                    <Image
                        src={app.image}
                        alt={app.title}
                        fill
                        unoptimized
                        sizes='56px'
                        className='object-cover'
                    />
                </div>

                {/* Title + Company */}
                <div className='flex-1 min-w-0'>
                    <h3 className='text-sm font-semibold text-gray-900 truncate group-hover:text-[#7d73f2] transition-colors'>
                        {app.title}
                    </h3>
                    <p className='text-xs text-gray-500 truncate mt-0.5'>
                        {app.companyName}
                    </p>

                    {/* Meta row */}
                    <div className='flex items-center gap-3 mt-1.5 text-[11px] text-gray-500'>
                        <span className='flex items-center gap-1'>
                            <svg className='w-3 h-3 text-yellow-400 fill-current' viewBox='0 0 20 20'>
                                <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                            </svg>
                            {app.ratingAvg}
                        </span>
                        <span className='w-1 h-1 rounded-full bg-gray-300' />
                        <span>{app.size} MB</span>
                    </div>
                </div>
            </Link>

            {/* ---- Uninstall Button ---- */}
            <Uninstall btnType={btnType} app={app} />
        </div>
    )
}

export default InstalledCard