import Link from 'next/link'
import potter from '../../public/images/logoPotter.svg'
import Image from 'next/image'
import close from '../../public/icons/close.svg'
const SideMenu = (props) => {
	return (
		<nav className="h-screen">
			<div
				className="absolute top-0 left-0 bg-black bg-opacity-70 h-screen w-screen"
				onClick={props.onClick}
			></div>
			<ul className="absolute top-0 right-0 bg-green1 h-screen w-40 sm:w-64 md:w-96">
				<section className="flex justify-end p-5">
					<button
						className="right-4 top-2 hover:bg-slate-400"
						onClick={props.onClick}
					>
						<Image src={close} />
					</button>
				</section>
				<li className="w-full py-5">
					<Link
						className="pl-5 h-full w-full pr-96 py-5 font-paragraph font-bold"
						href="/"
					>
						Home
					</Link>
				</li>
				<li className="w-full py-5">
					<Link
						className="pl-5 h-full w-full pr-96 py-5 font-paragraph font-bold"
						href="/map"
					>
						Map
					</Link>
				</li>
				<li className="w-full py-5">
					<Link
						className="pl-5 h-full w-full pr-96 py-5 font-paragraph font-bold"
						href="/counter"
					>
						Counter
					</Link>
				</li>
				<section className="absolute bottom-0 bg-green8 h-20 w-40 sm:w-64 md:w-96">
					<Image src={potter} alt="Potter logo" className="h-20 mx-auto" />
				</section>
			</ul>
		</nav>
	)
}

export default SideMenu
