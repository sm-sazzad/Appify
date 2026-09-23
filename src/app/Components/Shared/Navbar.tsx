import navlogo from "@/asstes/nav.png"
import NavLink from './NavLink';
import Image from 'next/image';

const Navbar = () => {
    const link = <NavLink />
    return (
        <div className="border-b border-violet-300 z-50 sticky top-0 bg-white">
            <nav className="w-[90%] mx-auto flex justify-between gap-2 items-center py-3 ">
                <Image src={navlogo} alt="Appify" className="h-10 w-auto"></Image>
                <ul className="flex gap-4 font-semibold">
                    {link}
                </ul>
                <button className="py-2 px-4 bg-[#7d73f2] rounded-lg cursor-pointer font-semibold text-white">
                    Connect
                </button>
            </nav>
        </div>
    );
};

export default Navbar;