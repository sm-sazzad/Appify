import navlogo from "@/asstes/nav.png"
import NavLink from './NavLink';
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import Sidebar, { MenuIcon } from "./Sidebar";

const Navbar = () => {
    const link = <NavLink />
    return (<>
        <div className="border-b border-violet-300 z-50 sticky top-0 bg-white">
            <nav className="w-[90%] mx-auto flex justify-between gap-2 items-center py-3 ">
                <Link href={"/"}>
                    <Image src={navlogo} alt="Appify" className="h-10 w-auto cursor-pointer"></Image>
                </Link>
                <ul className="hidden md:flex gap-4 font-semibold">
                    {link}
                </ul>
                <a href="https://github.com/sm-sazzad">
                    <button className='hidden group md:inline-flex items-center gap-2 py-2.5 px-5 bg-[#7d73f2] hover:bg-[#6b60e8] rounded-lg font-semibold text-sm text-white shadow-sm hover:shadow-lg hover:shadow-[#7d73f2]/30 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer'>
                        <FaGithub className='text-base group-hover:rotate-12 transition-transform duration-300' />
                        Connect
                    </button>
                </a>
                <div className="bolck md:hidden">
                    <MenuIcon />
                </div>
            </nav>
        </div>
        <Sidebar />
    </>);
};

export default Navbar;