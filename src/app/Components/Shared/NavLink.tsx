'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = () => {

    const pathName = usePathname();

    return (<>
        <li className={`${pathName === "/" ? "text-purple-600 font-bold" : ''} hover:text-purple-600 duration-200`}>
            <Link href={"/"}>Home</Link>
        </li>
        <li className={`${pathName === "/apps" ? "text-purple-600 font-bold" : ''} hover:text-purple-600 duration-200`}>
            <Link href={"/apps"}>All Apps</Link>
        </li>
        <li className={`${pathName === "/installed-apps" ? "text-purple-600 font-bold" : ''} hover:text-purple-600 duration-200`}>
            <Link href={"/installed-apps"}>Installed Apps</Link>
        </li>
    </>);
};

const Popular = () => {
    const pathName = usePathname();
    return (
        <li className={`${pathName === "/" ? "text-purple-600 font-bold" : ''} hover:text-purple-600 duration-200`}>
            <Link href={"/"}>Popular Apps</Link>
        </li>
    )
}

export default NavLink;
export { Popular };