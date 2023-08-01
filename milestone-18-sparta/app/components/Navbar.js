import Link from 'next/link'
import Image from 'next/image'
import menu from '../../public/icons/menu.svg'
import logoPotter from '../../public/images/logoPotter.svg'
const Navbar = () => {
	return (
		<nav className='fixed z-50'>
			<div className='flex justify-between mx-3'>
				<Image src={logoPotter} />
				<button>
					<Image src={menu} />
				</button>
			</div>
			<ul>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</nav>
	)
}

export default Navbar
