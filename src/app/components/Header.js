import Image from 'next/image'
import waveHeader from '../../public/images/waveHeader.svg'
const Header = (props) => {
	return (
		<header className="h-[110vh] md:h-[115vh] lg:h-[135vh] relative">
			<div className="-z-10 ">
				<Image
					src={props.image}
					className="h-[100%] w-full object-cover absolute  top-0"
					alt=""
				/>
				<div className="bg-black bg-opacity-60 h-[100%] w-full absolute top-0"></div>
			</div>
			<section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center md:-translate-y-3/4">
				<h1 className="font-header text-5xl lg:text-7xl ">{props.header}</h1>
				<p className="font-paragraph text-slate-200">{props.desc}</p>
			</section>
			<Image src={waveHeader} className="absolute -bottom-1 w-full" alt=""/>
		</header>
	)
}

export default Header
