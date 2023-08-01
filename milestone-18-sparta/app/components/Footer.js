import footerWave from '../../public/images/footerWave.svg'
import logoITB from '../../public/images/logoITB.svg'
import logoSTEIK22 from '../../public/images/logoSTEIK22.svg'
import footerBG from '../../public/images/footerBG.svg'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
	return (
		<footer className="relative">
			<Image src={footerWave} alt="" className="w-full" />
			<section className="bg-green1 text-white font-paragraph -mt-1 py-5">
				<ul className="grid grid-cols-3 self-center md:text-xl">
					<li className="text-center">
						<Link href="/" target="blank">
							Home
						</Link>
					</li>
					<li className="text-center">
						<Link href="/map" target="blank">
							Map
						</Link>
					</li>
					<li className="text-center">
						<Link href="/counter" target="blank">
							Counter
						</Link>
					</li>
				</ul>
				<h3 className="text-white text-center font-subheader text-3xl mt-5 md:text-5xl">Milestone 18</h3>
				<div className="flex justify-center mt-5">
					<Image src={logoSTEIK22} alt="logo STEI-K22" className="w-36 md:w-52" />
					<Image src={logoITB} alt="logo ITB" className="w-32 md:w-48" />
				</div>
			</section>
		</footer>
	)
}

export default Footer
