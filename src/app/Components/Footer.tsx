import footer from '@/asstes/nav.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='relative bg-gradient-to-b from-gray-900 to-[#0f0e1a] text-gray-300'>
            {/* Top brand accent line */}
            <div className='h-0.5 bg-gradient-to-r from-transparent via-[#7d73f2] to-transparent' />

            <div className='max-w-7xl mx-auto px-6 lg:px-8 py-14'>
                {/* ---- Main Grid ---- */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8'>

                    {/* Column 1: Brand + Description */}
                    <div className='lg:col-span-2'>
                        <Link href='/' className='inline-block mb-4'>
                            <Image
                                src={footer}
                                alt='Appify'
                                className='h-9 w-auto'
                            />
                        </Link>
                        <p className='text-sm text-gray-400 leading-relaxed max-w-sm mb-6'>
                            Discover, explore, and manage your favorite apps — all in one place.
                        </p>

                        {/* Social icons (compact row) */}
                        <div className='flex items-center gap-3'>
                            <a
                                href='https://github.com/sm-sazzad'
                                target='_blank'
                                rel='noreferrer'
                                aria-label='GitHub'
                                className='w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#7d73f2] text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-0.5'
                            >
                                <FaGithub className='text-base' />
                            </a>
                            <a
                                href='https://www.linkedin.com/in/sm-sazzad/'
                                target='_blank'
                                rel='noreferrer'
                                aria-label='LinkedIn'
                                className='w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#7d73f2] text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-0.5'
                            >
                                <FaLinkedin className='text-base' />
                            </a>
                            <a
                                href='https://www.facebook.com/sazzad.hossain.5758/'
                                target='_blank'
                                rel='noreferrer'
                                aria-label='Facebook'
                                className='w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#7d73f2] text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-0.5'
                            >
                                <FaFacebook className='text-base' />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div>
                        <h3 className='text-sm font-semibold text-white uppercase tracking-wider mb-4'>
                            Navigate
                        </h3>
                        <ul className='space-y-2.5 text-sm'>
                            {[
                                { label: 'Home', href: '/' },
                                { label: 'Popular Apps', href: '/popular' },
                                { label: 'All Apps', href: '/apps' },
                                { label: 'Installed Apps', href: '/installed' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className='group inline-flex items-center gap-2 text-gray-400 hover:text-[#7d73f2] transition-colors duration-200'
                                    >
                                        <span className='w-1 h-1 rounded-full bg-gray-600 group-hover:bg-[#7d73f2] group-hover:w-3 transition-all duration-200' />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Connect */}
                    <div>
                        <h3 className='text-sm font-semibold text-white uppercase tracking-wider mb-4'>
                            Connect
                        </h3>
                        <ul className='space-y-2.5 text-sm'>
                            <li>
                                <a
                                    href='https://github.com/sm-sazzad'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='group flex items-center gap-2.5 text-gray-400 hover:text-[#7d73f2] transition-colors duration-200'
                                >
                                    <FaGithub className='text-base group-hover:scale-110 transition-transform' />
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://www.linkedin.com/in/sm-sazzad/'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='group flex items-center gap-2.5 text-gray-400 hover:text-[#7d73f2] transition-colors duration-200'
                                >
                                    <FaLinkedin className='text-base group-hover:scale-110 transition-transform' />
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://www.facebook.com/sazzad.hossain.5758/'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='group flex items-center gap-2.5 text-gray-400 hover:text-[#7d73f2] transition-colors duration-200'
                                >
                                    <FaFacebook className='text-base group-hover:scale-110 transition-transform' />
                                    Facebook
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ---- Bottom Bar ---- */}
                <div className='mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3'>
                    <p className='text-xs text-gray-500'>
                        © {new Date().getFullYear()} <span className='text-gray-400 font-medium'>Appify</span>. All rights reserved.
                    </p>
                    <p className='text-xs text-gray-500'>
                        Built with <span className='text-[#7d73f2]'>♥</span> by{' '}
                        <a
                            href='https://github.com/sm-sazzad'
                            target='_blank'
                            rel='noreferrer'
                            className='text-gray-400 hover:text-[#7d73f2] transition-colors font-medium'
                        >
                            SM Sazzad
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer