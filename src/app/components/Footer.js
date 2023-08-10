import waveFooter from '../../public/images/waveFooter.svg'
import logoITB from '../../public/images/logoITB.svg'
import logoSTEIK22 from '../../public/images/logoSTEIK22.svg'
import footerBG from '../../public/images/footerBG.svg'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
	return (
		<footer className="relative">
			<Image src={waveFooter} alt="" className="w-full" />
			<section className="bg-green1 text-white font-paragraph -mt-1 py-5">
				<ul className="grid grid-cols-4 self-center md:text-xl">
					<li className="text-center">
						<Link href="/" className='hover:text-black hover:font-boldF
            transition font-paragraph'> Home</Link>
					</li>
					<li className="text-center">
						<Link href="/map" className='hover:text-black hover:font-boldF
            transition font-paragraph'>Map</Link>
					</li>
					<li className="text-center">
						<Link href="/counter" className='hover:text-black hover:font-boldF
            transition font-paragraph'>Counter</Link>
					</li>
					<li className="text-center">
						<Link href="/aboutus" className='hover:text-black hover:font-boldF
            transition font-paragraph'>About Us</Link>
					</li>
				</ul>
				<h3 className="text-white text-center font-subheader text-3xl mt-5 md:text-5xl">
					Milestone 18
				</h3>
				<div className="flex justify-center mt-5">
					<Image
						src={logoSTEIK22}
						alt="logo STEI-K22"
						className="w-36 md:w-52"
					/>
					<Image src={logoITB} alt="logo ITB" className="w-32 md:w-48" />
				</div>
			</section>
		</footer>
	)
}

export default Footer
