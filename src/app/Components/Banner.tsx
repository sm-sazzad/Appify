import Image from 'next/image';
import banner from "@/asstes/appify.jpg"
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="relative w-full">
            <div className="relative">
                {/* Banner Image with Gradient Overlay */}
                <Image
                    src={banner}
                    alt='banner'
                    className='w-full h-[90vh] object-cover'
                />

                {/* Dark Gradient Overlay for better text readability */}
                <div className='absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent'></div>

                {/* Content Container */}
                <div className='absolute inset-0 flex items-center'>
                    <div className='container mx-auto px-6 md:px-12 lg:px-6'>
                        <div className='max-w-2xl'>
                            {/* Heading */}
                            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6'>
                                Discover Apps. <br />
                                <span className='text-transparent bg-clip-text bg-linear-to-r from-purple-700 to-purple-300'>
                                    Build Your Collection.
                                </span>
                            </h1>

                            {/* Description */}
                            <p className='text-base md:text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed'>
                                Explore amazing apps, discover their features, and keep your favorite apps organized in one place.
                            </p>

                            {/* Buttons */}
                            <div className='flex flex-col sm:flex-row gap-4'>
                                <Link href={"/apps"}>
                                    <button className='px-8 py-3 bg-linear-to-r from-purple-800 to-[#7d73f2] text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
                                        Explore Apps
                                    </button>
                                </Link>
                                <Link href={"installed-apps"}>
                                    <button className='px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300'>
                                        My Apps
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;