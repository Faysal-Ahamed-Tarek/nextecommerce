import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from "next/router";

export default function MainHeader() {
    const router = useRouter();

    const [MobileMenu, setMobileMenu] = useState(true);
    return (
        <>
        <header className="bg_color py-2">
            <div className="container mx-auto">
                <nav className="flex justify-between content-center items-center">

                    {/* logo */}
                    <div className="logo"> 
                        <Image className="justify-items-center" src="/logo.png" alt="Logo" width={50} height={50}/>
                    </div>
                    {/* Menu */}
                    <div className="md:block hidden">
                        <ul className="flex lg:gap-x-2 md:gap-x-1">
                            <li>
                                <Link href="/home">
                                    <a className={`${router.asPath === '/home' ? 'Active_Nav' : ''} text-white px-4 rounded text-lg py-2 hover:bg-white hover:text-black`}>
                                    Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a className={`text-white px-4 rounded text-lg py-2 hover:bg-white hover:text-black ${router.asPath === '/shop' ? 'ActiveClass' : ''}`}>
                                    Shop</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a className={`text-white px-4 rounded text-lg py-2 hover:bg-white hover:text-black ${router.asPath === '/about' ? 'ActiveClass' : ''}`}>
                                        About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className=" text-white px-4 rounded text-lg py-2 hover:bg-white hover:text-black">Store</a></Link></li>
                            <li><Link href="#"><a className=" text-white px-4 rounded text-lg py-2 hover:bg-white hover:text-black">Admin</a></Link></li>
                        </ul>
                    </div>
                    {/* Login Button */}
                    <div className="md:block hidden bg-white rounded px-3 py-1 shadow-lg">
                                <Link href="#"><a className="text-lg px-1 flex items-center content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                Log In</a></Link>
                    </div>
                    {/* Mobile Menu Trigger */}
                    <div className="block md:hidden px-2 bg-white py-2 rounded" onClick={() => setMobileMenu(!MobileMenu)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </div>
                </nav>
            </div>
        </header>
        {/* Mobile Menu Here   */}
        <div className={`pt-10 bg_color md:hidden px-14 max-h-full ${MobileMenu ? 'Mobile_Menu_Active' : 'Mobile_Menu_Inactive'}`}>
            <div className="">
                <ul className="lg:gap-x-2 md:gap-x-1 text-center">
                    <li><Link href="/home"><a className="block text-white px-4 rounded text-lg py-2 hover:bg-white hover:text-black">Home</a></Link></li>
                    <li onClick={() => setMobileMenu(!MobileMenu)}><Link href="/shop"><a className="block text-white px-4 rounded text-lg py-2 hover:bg-white hover:text-black">Shop</a></Link></li>
                    <li onClick={() => setMobileMenu(!MobileMenu)}><Link href="/about"><a className="block text-white px-4 rounded text-lg py-2 hover:bg-white hover:text-black">About</a></Link></li>
                    <li><Link href="#"><a className="block text-white px-4 rounded text-lg py-2 hover:bg-white hover:text-black">Store</a></Link></li>
                    <li><Link href="#"><a className="block text-white px-4 rounded text-lg py-2 hover:bg-white hover:text-black">Admin</a></Link></li>
                    <div className="bg-white rounded px-3 py-2 shadow-lg text-center my-2">
                                <Link href="#"><a className="text-lg px-1 flex items-center content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                Log In</a></Link>
                    </div>
                </ul>
            </div>
        </div>
        </>
    )
}
