'use client'
import Link from 'next/link'
import Image from 'next/image'
import menu from '../../public/icons/menu.svg'
import logoPotter from '../../public/images/logoPotter.svg'
import SideMenu from './SideMenu'
import { useState, useCallback } from 'react'
import Scroll from './Scroll'

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const [navbar, setNavbar] = useState(false)
	const setColoredNavbar = useCallback(() => {
		setNavbar(true)
	}, [])

	const setTransparentNavbar = useCallback(() => {
		setNavbar(false)
	}, [])
	const openMenu = () => {
		setMenuOpen(true)
	}
	const closeMenu = () => {
		setMenuOpen(false)
	}
	return (
		<nav className="fixed z-[99999]">
			<Scroll colored={setColoredNavbar} transparent={setTransparentNavbar} />
			<section
				className={` ${navbar
					? 'w-screen flex justify-between px-3 md:px-4 lg:px-5 bg-green6'
					: 'bg-transparent w-screen flex justify-between px-3 md:px-4 lg:px-5'
					}`}
			>
				<Link href="/" className="">
					<Image src={logoPotter} alt="" />
				</Link>
				<ul className="hidden lg:flex lg:gap-44 lg:items-center pr-20">
					<Link href="/" className='hover:text-black hover:font-bold
            transition font-paragraph'>Home</Link>
					<Link href="/map " className='hover:text-black hover:font-bold
            transition font-paragraph'>Map</Link>
					<Link href="/counter" className='hover:text-black hover:font-bold
            transition font-paragraph'>Counter</Link>
					<Link href="/aboutus" className='hover:text-black hover:font-bold
            transition font-paragraph'>About Us</Link>
				</ul>
				<button onClick={openMenu} className="lg:hidden">
					<Image src={menu} alt="" />
				</button>
			</section>
			{menuOpen && <SideMenu onClick={closeMenu} />}
		</nav>
	)
}

export default Navbar
