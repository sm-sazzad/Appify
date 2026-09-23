"use client"
import { AppContext } from "@/Context/AppProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Sidebar = () => {
    const { isOpen, setIsOpen } = useContext(AppContext)
    const pathName = usePathname();
    return (
        <div
            onClick={() => setIsOpen(false)}
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-60 transition-opacity duration-300 ${isOpen ? 'visible opacity-100 pointer-events-auto' : 'invisible opacity-0 pointer-events-none'
                }`}
        >
            <ul
                onClick={(e) => e.stopPropagation()}
                className={`absolute top-0 right-0 bottom-0 w-72 bg-white p-6 flex flex-col gap-1 shadow-2xl transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* ---- Header ---- */}
                <div className='flex items-center justify-between mb-6 pb-4 border-b border-gray-100'>
                    <span className='text-sm font-bold text-gray-900'>
                        Menu
                    </span>
                    <button
                        onClick={() => setIsOpen(false)}
                        aria-label='Close menu'
                        className='w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer'
                    >
                        <RxCross2 className='text-xl' />
                    </button>
                </div>

                {/* ---- Nav Links ---- */}
                <li
                    onClick={() => setIsOpen(false)}
                    className={`list-none px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${pathName === '/'
                        ? 'bg-[#7d73f2]/10 text-[#7d73f2] font-semibold'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#7d73f2]'
                        }`}
                >
                    <Link href='/' className='block'>Home</Link>
                </li>

                <li
                    onClick={() => setIsOpen(false)}
                    className={`list-none px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${pathName === '/apps'
                        ? 'bg-[#7d73f2]/10 text-[#7d73f2] font-semibold'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#7d73f2]'
                        }`}
                >
                    <Link href='/apps' className='block'>All Apps</Link>
                </li>

                <li
                    onClick={() => setIsOpen(false)}
                    className={`list-none px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${pathName === '/installed-apps'
                        ? 'bg-[#7d73f2]/10 text-[#7d73f2] font-semibold'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#7d73f2]'
                        }`}
                >
                    <Link href='/installed-apps' className='block'>Installed Apps</Link>
                </li>
            </ul>
        </div>
    );
};


const MenuIcon = () => {
    const { isOpen, setIsOpen } = useContext(AppContext)
    return <RiMenu3Fill className="text-2xl " onClick={() => setIsOpen(true)} />
}

export default Sidebar;
export { MenuIcon };