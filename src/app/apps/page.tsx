import { getData } from '@/lib/DataFetch';
import AppCard from '../Components/Card';

const AllApps = async () => {
    const allApps = await getData();
    return (
        <div className='max-w-7xl mx-auto px-6 lg:px-8 py-16'>

            {/* ---- Section Heading ---- */}
            <div className='text-center mb-12'>
                <span className='inline-block px-4 py-1.5 mb-4 text-xs font-medium rounded-full bg-[#7d73f2]/10 text-[#7d73f2] uppercase tracking-wide'>
                    Full Collection
                </span>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3'>
                    All{' '}
                    <span className='text-transparent bg-clip-text bg-linear-to-r from-[#7d73f2] to-purple-600'>
                        Apps
                    </span>
                </h1>
                <p className='text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed'>
                    Browse our complete collection of apps — discover, explore, and install what you need.
                </p>
            </div>

            {/* ---- Apps Grid ---- */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {allApps.map((data) => (
                    <AppCard key={data.id} data={data} />
                ))}
            </div>

            {/* ---- Empty State (optional) ---- */}
            {allApps.length === 0 && (
                <div className='text-center py-16'>
                    <div className='w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#7d73f2]/10 flex items-center justify-center'>
                        <svg className='w-8 h-8 text-[#7d73f2]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                        </svg>
                    </div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-1'>No apps found</h3>
                    <p className='text-sm text-gray-500'>Try adjusting your search or filters.</p>
                </div>
            )}
        </div>
    );
};

export default AllApps;