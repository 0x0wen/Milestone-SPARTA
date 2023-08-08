import Header from './components/Header'
import greenery from '../public/images/greenery.jpg'
import Image from 'next/image'
import waveIndo1 from '../public/images/waveIndo1.svg'
import waveIndo2 from '../public/images/waveIndo2.svg'
import jakarta from '../public/images/jakarta.jpeg'
import factory from '../public/images/factory.jpg'
import waveDYP1 from '../public/images/waveDYP1.svg'
import waveDYP2 from '../public/images/waveDYP2.svg'
import transport from '../public/images/transport.png'
import recycle from '../public/images/recycle.png'
import burn from '../public/images/burn.png'
import Marquee from 'react-fast-marquee'
const Home = () => {
	return (
		<>
			<Header
				header="Go Green; Breathe Clean"
				desc="It starts with you."
				image={greenery}
			/>
			<section className="min-h-screen text-green8 font-paragraph font-bold text-center md:mt-0 flex justify-center items-center">
				<div className="md:my-auto">
					<h2 className=" mx-5 text-green7 font-bold font-subheader text-5xl sm:text-6xl md:text-7xl lg:text-8xl md:mb-10">
						Did you know?
					</h2>
					<ul className="mt-5 md:grid md:grid-cols-3 ">
						<li className="p-5 ">
							<h3 className="text-5xl md:text-7xl font-bold">
								99<span className="text-base">%</span>
							</h3>
							<p className="w-52 mx-auto">
								of all global populations breathe air that exceeds WHO
								guidelines limits.
							</p>
						</li>
						<li className="p-5">
							<h3 className="text-5xl  md:text-7xl font-bold">37</h3>
							<p className="w-52 mx-auto">
								of the 40 most polluted cities in the world are in South Asia.
							</p>
						</li>
						<li className="p-5">
							<h3 className="text-5xl  md:text-7xl font-bold">7</h3>
							<p className="w-52 mx-auto">
								million people die every year from air pollution.
							</p>
						</li>
					</ul>
				</div>
			</section>
			<section className="min-h-[110vh] md:min-h-[130vh] lg:min-h-[150vh] relative">
				<div className="-z-10">
					<Image
						src={jakarta}
						className="h-[100%] w-full object-cover absolute top-0"
						alt=""
					/>
					<div className="bg-black bg-opacity-70 h-[100%] w-full absolute top-0"></div>
				</div>
				<section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white md:w-full">
					<h2 className="font-header text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-12 md:mb-20">
						What about <span className="text-red-700">Indo</span>nesia?
					</h2>
					<ul className="md:grid md:grid-cols-2">
						<li className="p-5">
							<p className="font-paragraph text-green5 opacity-70">
								2022 Average PM 2.5 concentration is
							</p>
							<h3 className="font-bold text-5xl md:text-7xl">
								6.1<span className="text-lg">x</span>
							</h3>
							<p className="font-paragraph text-green5 opacity-70">
								the WHO annual air quality guideline value
							</p>
						</li>
						<li className="p-5">
							<p className="font-paragraph text-green5 opacity-70">in 2023</p>
							<h3 className="font-bold text-5xl md:text-7xl">6.900</h3>
							<p className="font-paragraph text-green5 opacity-70">
								people lost their lives in Jakarta due to the adverse effects of
								air pollution.
							</p>
						</li>
					</ul>
				</section>
				<Image src={waveIndo1} className="absolute -top-1 w-full" alt="" />
				<Image src={waveIndo2} className="absolute -bottom-1 w-full" alt="" />
			</section>
			<section className="bg-brown2 h-screen text-center font-paragraph flex items-center">
				<Marquee className="" speed={20}>
					<section className="bg-green4 text-green8 w-72 aspect-[3/4] rounded-3xl flex items-center mx-5">
						<div className="">
							<p className="font-paragraphitalic text-3xl  pb-5 px-10">
								&quot;Preserve and cherish the pale blue dot, the only home
								we&apos;ve ever known.&quot;
							</p>
							<h3 className="text-2xl font-extrabold ">Carl Sagan</h3>
							<p className="text-green8 opacity-70 ">Astronomer</p>
						</div>
					</section>
					<section className="bg-green4 text-green8 w-72 aspect-[3/4] rounded-3xl flex items-center mx-5">
						<div className="my-auto">
							<p className="font-paragraphitalic text-3xl  pb-5 px-10">
								&quot;You can start changing the world for the better daily - no
								matter how small the action.&quot;
							</p>
							<h3 className="text-2xl font-extrabold">Nelson Mandela</h3>
							<p className="text-green8 opacity-70">Politician</p>
						</div>
					</section>
					<section className="bg-green4 text-green8 w-72 aspect-[3/4] rounded-3xl flex items-center mx-5">
						<div className="my-auto">
							<p className="font-paragraphitalic text-3xl  pb-5 px-10">
								&quot;The Earth does not belong to us: we belong to the
								Earth.&quot;
							</p>
							<h3 className="text-2xl font-extrabold">Marlee Matlin</h3>
							<p className="text-green8 opacity-70">Activist</p>
						</div>
					</section>
					<section className="bg-green4 text-green8 w-72 aspect-[3/4] rounded-3xl flex items-center mx-5">
						<div className="my-auto">
							<p className="font-paragraphitalic text-3xl  pb-5 px-10">
								&quot;We are living on this planet as if we had another one to
								go to.&quot;
							</p>
							<h3 className="text-2xl font-extrabold">Terri Swearingen</h3>
							<p className="text-green8 opacity-70">Nurse</p>
						</div>
					</section>
					<section className="bg-green4 text-green8 w-72 aspect-[3/4] rounded-3xl flex items-center mx-5">
						<div className="my-auto">
							<p className="font-paragraphitalic text-3xl  pb-5 px-10">
								&quot;We shall require a substantially new manner of thinking if
								mankind is to survive.&quot;
							</p>
							<h3 className="text-2xl font-extrabold">Albert Einstein</h3>
							<p className="text-green8 opacity-70">Physicist</p>
						</div>
					</section>
				</Marquee>
			</section>
			<section className="h-[110vh] md:h-[130vh] lg:h-[150vh] relative mb-40">
				<div className="-z-10">
					<Image
						src={factory}
						className="h-[100%] w-full object-cover absolute top-0"
						alt=""
					/>
					<div className="bg-black bg-opacity-70 h-[100%] w-full absolute top-0"></div>
				</div>
				<h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-header text-5xl sm:text-6xl md:text-7xl lg:text-8xl w-32 lg:w-64 text-center leading-loose">
					Do Your Part.
				</h3>
				<Image src={waveDYP1} className="absolute -top-1 w-full" alt="" />
				<Image src={waveDYP2} className="absolute -bottom-1 w-full" alt="" />
			</section>
			<section className="text-center">
				<h2 className="text-green8 font-header text-5xl sm:text-6xl md:text-7xl lg:text-8xl pt-10 pb-10">
					What can we do?
				</h2>
				<ul className="text-green8 mb-32 ">
					<li className="flex flex-wrap justify-center items-center mb-10">
						<Image src={transport} alt="" />
						<section className="w-80 md:mx-6">
							<h3 className="font-subheader text-2xl">
								Use public transportation
							</h3>
							<p className="font-paragraph">
								Lesser vehicles on roads will contribute to lesser emissions.
							</p>
						</section>
					</li>
					<li className="flex flex-wrap justify-center items-center mb-10">
						<Image src={recycle} className="md:order-last" alt="" />
						<section className="w-80 md:mx-6">
							<h3 className="font-subheader text-2xl">Recycle and reuse</h3>
							<p className="font-paragraph">
								Recycling helps reduce greenhouse gas emissions by reducing
								energy consumption.
							</p>
						</section>
					</li>
					<li className="flex flex-wrap justify-center items-center mb-10">
						<Image src={burn} alt="" />
						<section className="w-80 md:mx-6">
							<h3 className="font-subheader text-2xl">Stop waste burning</h3>
							<p className="font-paragraph">
								The toxic chemicals released during burning can lead to health
								problems.
							</p>
						</section>
					</li>
				</ul>
			</section>
		</>
	)
}

export default Home
