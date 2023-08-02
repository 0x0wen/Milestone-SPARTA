import Image from 'next/image'
import waveHeader from '../../public/images/waveHeader.svg'
const Header = (props) => {
	return (
		<header className="h-screen relative">
			<div className="-z-10 ">
				<Image
					src={props.image}
					className="h-[110%] w-full lg:h-[110%] object-cover absolute  top-0"
				/>
				<div className="bg-black bg-opacity-60 h-[110%] lg:h-[110%] w-full absolute top-0"></div>
			</div>
			<section className="absolute top-1/2 left-1/2 lg:top-1/4 -translate-x-1/2 -translate-y-1/4 text-center">
				<h1 className="font-header text-5xl lg:text-7xl ">{props.header}</h1>
				<p className="font-paragraph text-slate-200">{props.desc}</p>
			</section>
			<Image src={waveHeader} className="absolute -bottom-16 sm:-bottom-28 md:-bottom-32 lg:-bottom-44 w-full" />
		</header>
	)
}

export default Header
