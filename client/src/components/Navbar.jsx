import {useEffect, useState} from "react";
import Image from "./Image.jsx";
import {Link} from "react-router-dom";
import {SignedIn, SignedOut, useAuth, UserButton} from "@clerk/clerk-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const {getToken} = useAuth();

    useEffect(() => {
        getToken().then((token) => {console.log(token)});
    }, [])

    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            {/* LOGO */}
            <Link to={"/"} className='flex items-center gap-4 text-2xl font-bold'>
                <Image src="logo.png" alt="Lama Logo" w={32} h={32}/>
                <span>lamalog</span>
            </Link>
            {/* MOBILE MENU */}
            <div className='md:hidden'>
                {/* MOBILE Button */}
                <div className="cursor-pointer text-4xl" onClick={() => setOpen(!open)}>
                    {open ? "X" : "☰"}
                </div>
                {/* MOBILE Link List */}
                <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
                    open ? "-right-0" : "-right-100"
                }`}>
                    <Link to={"/"}>Home</Link>
                    <a href="/">Trending</a>
                    <a href="/">Most Popular</a>
                    <a href="/">About</a>
                    <a href="">
                        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login</button>
                    </a>
                </div>
            </div>
            {/* DESKTOP MENU */}
            <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
                <Link to={"/"}>Home</Link>
                <a href="/posts?sort=trending">Trending</a>
                <a href="/posts?sort=popular">Most Popular</a>
                <a href="/">About</a>
                <SignedOut>
                    <Link to="/login">
                        <button className={'py-2 px-4 rounded-3xl bg-blue-800 text-white'}>Login</button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>

        </div>
    )
}

export default Navbar