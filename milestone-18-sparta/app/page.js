import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import cars from '../public/images/cars.webp'
import Image from 'next/image'
import waveIndo1 from '../public/images/waveIndo1.svg'
import waveIndo2 from '../public/images/waveIndo2.svg'
import jakarta from '../public/images/jakarta.jpeg'
import factory from '../public/images/factory.jpg'
import waveQuotes1 from '../public/images/waveQuotes1.svg'
import waveQuotes2 from '../public/images/waveQuotes2.svg'
import transport from '../public/images/transport.png'
import recycle from '../public/images/recycle.png'
import burn from '../public/images/burn.png'

const Home = () => {
	return (
		<div className="bg-green4 min-w-screen min-h-screen">
			<Navbar />
			<Header
				header="EMISSION COUNTER"
				desc="Try our Emission Counter to see how much you contribute to overall global emission."
				image={cars}
			/>
			<section className=" mt-10 text-green8 font-paragraph font-bold text-center">
				<h2 className=" mt-20 font-subheader text-3xl md:text-5xl">Did You Know?</h2>
				<ul className="mt-5 md:grid md:grid-cols-3">
					<li className="p-5 ">
						<h3 className="text-5xl md:text-7xl font-bold">
							99<span className="text-base">%</span>
						</h3>
						<p>
							of all global populations breathe air that exceeds WHO guidelines
							limits.
						</p>
					</li>
					<li className="p-5">
						<h3 className="text-5xl  md:text-7xl font-bold">37</h3>
						<p>
							of the 40 most polluted cities in the world are in South Asia.
						</p>
					</li>
					<li className="p-5">
						<h3 className="text-5xl  md:text-7xl font-bold">7</h3>
						<p>million people die every year from air pollution.</p>
					</li>
				</ul>
			</section>
			<section className="h-screen relative mb-52">
				<div className="-z-10">
					<Image
						src={jakarta}
						className="h-[141%] w-full object-cover absolute top-0"
					/>
					<div className="bg-black bg-opacity-70 h-[141%] w-full absolute top-0"></div>
				</div>
				<section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 text-center text-white md:w-full">
					<h2 className="font-header text-5xl md:mb-20">What about Indonesia?</h2>
					<ul className="md:grid md:grid-cols-2">
						<li className="p-5">
							<p className="font-paragraph text-white opacity-80">
								2022 Average PM 2.5 concentration is
							</p>
							<h3 className="font-bold text-5xl md:text-7xl">6.1<span className='text-lg'>x</span></h3>
							<p className="font-paragraph text-white opacity-80">the WHO annual air quality guideline value</p>
						</li>
						<li className="p-5">
							<p className="font-paragraph text-white opacity-80">in 2023</p>
							<h3 className="font-bold text-5xl md:text-7xl">6.900</h3>
							<p className="font-paragraph text-white opacity-80">
								people lost their lives in Jakarta due to the adverse effects of
								air pollution.
							</p>
						</li>
					</ul>
				</section>
				<Image src={waveIndo2} className="absolute top-0 w-full" />
				<Image src={waveIndo1} className="absolute -bottom-[14rem] w-full" />
			</section>
			<section className="bg-brown2 pt-10 pb-20 text-center font-paragraph">
				<section className="bg-green4 text-green8 w-72 rounded-3xl mx-auto py-14">
					<p className="font-paragraphitalic text-3xl  pb-5 px-10">
						“Preserve and cherish the pale blue dot, the only home we've ever
						known.”
					</p>
					<h3 className="text-2xl font-extrabold">Carl Sagan</h3>
					<p className="text-green8 opacity-70">Astronomer</p>
				</section>
			</section>
			<section className="h-screen relative mb-40">
				<div className="-z-10">
					<Image
						src={factory}
						className="h-[130%] w-full object-cover absolute top-0"
					/>
					<div className="bg-black bg-opacity-70 h-[130%] w-full absolute top-0"></div>
				</div>
				<h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 font-header text-5xl w-32 text-center leading-loose">
					Do Your Part.
				</h3>
				<Image src={waveQuotes1} className="absolute -top-8 w-full" />
				<Image src={waveQuotes2} className="absolute -bottom-40 w-full" />
			</section>
			<section className="text-center">
				<h2 className="text-green8 font-header text-5xl pb-10">What can we do?</h2>
				<ul className="text-green8 mb-32 ">
					<li className="flex flex-wrap justify-center items-center mb-10">
						<Image src={transport} />
						<section className='w-80 md:mx-6'>
							<h3 className='font-subheader text-2xl'>Use public transportation</h3>
							<p className='font-paragraph'>
								Lesser vehicles on roads will contribute to lesser emissions.
							</p>
						</section>
					</li>
					<li className="flex flex-wrap justify-center items-center mb-10">
						<Image src={recycle} className='md:order-last'/>
						<section className='w-80 md:mx-6'>
							<h3 className='font-subheader text-2xl'>Recycle and reuse</h3>
							<p className='font-paragraph'>
								Recycling helps reduce greenhouse gas emissions by reducing
								energy consumption.
							</p>
						</section>
					</li>
					<li className="flex flex-wrap justify-center items-center mb-10">
						<Image src={burn} />
						<section className='w-80 md:mx-6'>
							<h3 className='font-subheader text-2xl'>Stop waste burning</h3>
							<p className='font-paragraph'>
								The toxic chemicals released during burning can lead to health
								problems.
							</p>
						</section>
					</li>
				</ul>
			</section>
			<Footer />
		</div>
	)
}

export default Home
