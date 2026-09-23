import Link from 'next/link';
import React from 'react';

const NavLink = () => {
    return (<>
        <li>
            <Link href={"/"}>Home</Link>
        </li>
        <li>
            <Link href={"/all-apps"}>All Apps</Link>
        </li>
        <li>
            <Link href={"/installed-apps"}>Installed Apps</Link>
        </li>
    </>);
};

export default NavLink;