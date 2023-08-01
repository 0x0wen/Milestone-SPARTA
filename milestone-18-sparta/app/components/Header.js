import Image from 'next/image'
import waveHeader from '../../public/images/waveHeader.svg'
const Header = (props) => {
	return (
		<header className="h-screen relative">
			<div className="h- -z-10 ">
				<Image
					src={props.image}
					className="h-[110%] w-full object-cover absolute top-0"
				/>
				<div className="bg-black bg-opacity-60 h-[110%] w-full absolute top-0"></div>
			</div>
			<section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 text-center">
				<h1 className="font-header text-5xl">{props.header}</h1>
				<p className="font-paragraph text-slate-200">{props.desc}</p>
			</section>
			<Image src={waveHeader} className="absolute -bottom-20 w-full" />
		</header>
	)
}

export default Header
