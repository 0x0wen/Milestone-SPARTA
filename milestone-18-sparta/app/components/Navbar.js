'use client'
import Link from 'next/link'
import Image from 'next/image'
import menu from '../../public/icons/menu.svg'
import logoPotter from '../../public/images/logoPotter.svg'
import SideMenu from './SideMenu'
import {useState, useEffect} from 'react'

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const [navbar, setNavbar] = useState(false)
	const openMenu = () => {
		setMenuOpen(true)
	}
	const closeMenu = () => {
		setMenuOpen(false)
	}
	useEffect(() => {
		window.addEventListener('scroll', changeBackground)
		return () => {
			window.removeEventListener('scroll', changeBackground)
		}
	}, [])

	const changeBackground = () => {
		if (window.scrollY >= 80) {
			setNavbar(true)
		} else {
			setNavbar(false)
		}
	}
	return (
		<nav className="fixed z-[99999]">
			<section
				className={` ${
					navbar
						? 'w-screen flex justify-between px-3 md:px-4 lg:px-5 bg-green6'
						: 'bg-transparent w-screen flex justify-between px-3 md:px-4 lg:px-5'
				}`}
			>
				<Link href="/" className="">
					<Image src={logoPotter} />
				</Link>
				<button onClick={openMenu}>
					<Image src={menu} />
				</button>
			</section>
			{menuOpen && <SideMenu onClick={closeMenu} />}
		</nav>
	)
}

export default Navbar
