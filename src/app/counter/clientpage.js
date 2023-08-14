'use client'

import { useState } from 'react'

import './counter.css'

const CounterClient = () => {
	const [vehicle, setVehicle] = useState("")
	const [distance, setDistance] = useState(0)
	const [passengers, setPassengers] = useState(1)
	const [trees, setTrees] = useState(0)
	const updateTrees = (evt) => {
		setTrees(evt.target.value)
	}
	const updateDistance = (evt) => {
		setDistance(evt.target.value)
	}
	const updatePassengers = (evt) => {
		setPassengers(evt.target.value)
	}
	const getEmission = (distance, vehicle, passengers) => {
		if (!vehicle)
			return ("Please Select Your Vehicle")
		else if (vehicle === "Car") {
			return (distance * 192) / passengers
		} else if (vehicle === "Motorcycle") {
			// Update this condition based on your requirements
			return (distance * 105) / passengers
		} else {
			return (distance * 103) / passengers
		}
	}
	return (
		<section>
			<section className="vechiles_option ">
				<h2 className="my-10 mx-5 text-green7 font-bold font-subheader text-5xl sm:text-6xl md:text-7xl lg:text-8xl md:mb-10">
					See how much do you pollute
				</h2>
				<button className={`vechile_button_1 py-5  hover:text-green8 ${vehicle=="Car"?("text-green8"):("text-[#609966]")} transition`} onClick={() => setVehicle("Car")}>Car</button>
				<button className={`vechile_button_2 py-5 hover:text-green8 ${vehicle=="Motorcycle"?("text-green8"):("text-[#609966]")} transition`} onClick={() => setVehicle("Motorcycle")}>Motorcycle</button>
				<button className={`vechile_button_3 py-5 hover:text-green8 ${vehicle=="Bus"?("text-green8"):("text-[#609966]")} transition`} onClick={() => setVehicle("Bus")}>Bus</button>
			</section>
			<form className="distance_forms">
				<div className="passengers_form">
					<input type="number" name="passengers" id="passengers" value={passengers} onChange={updatePassengers} className='w-[25%] sm:w-[20%] md:w-[15%] lg:w-[10%]' />
					<span>Passengers</span>
				</div>
				<div className="distance_slider">
					<input type="range" min={0} max={1000} value={distance} onChange={updateDistance} class="border-1 border-black appearance-none bg-transparent w-[40%] sm:w-[35%] md:w-[30%] lg:w-[25%] [&::-webkit-slider-runnable-track]:h-[40px] [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-[#C4D7B2] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[50px] [&::-webkit-slider-thumb]:w-[50px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#E3F4BE] 
					[&::-webkit-slider-thumb]:-mt-[5px]" />
					<br />
					<span className="distance_info mt-[3rem]">
						Distance Traveled: {distance} Km daily
					</span>
				</div>
			</form>
			<section className="emission_info">
				<h2>Emission per Passenger</h2>
				<h1 className='text-green-700 font-bold text-3xl my-5'>{getEmission(distance, vehicle, passengers)}</h1>
				<h2>Grams</h2>
				<h2>
					CO<sub>2</sub>
				</h2>
			</section>
			<section className="vechiles_option ">
				<h2 className="my-10 mx-5 text-green7 font-bold font-subheader text-5xl sm:text-6xl md:text-7xl lg:text-8xl md:mb-10">
					Want to save The Earth?
				</h2>
				<h3 className='my-10 mx-5 text-green6 font-bold font-paragraph text-lg sm:text-xl md:text-2xl lg:text-3xl md:mb-10'>

					A single tree offsets about 20 kg of carbon dioxide each year, start planting now !
				</h3>
			</section>
			<form className="distance_forms">
				<div className="distance_slider">
					<input type="range" value={trees} onChange={updateTrees} min={0} max={200} class="border-1 border-black appearance-none bg-transparent w-[40%] sm:w-[35%] md:w-[30%] lg:w-[25%] [&::-webkit-slider-runnable-track]:h-[40px] [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-[#C4D7B2] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[50px] [&::-webkit-slider-thumb]:w-[50px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#E3F4BE] 
					[&::-webkit-slider-thumb]:-mt-[5px]" />
					<br />
					<span className="distance_info mt-[3rem]">
						Trees planted: {trees} trees
					</span>
				</div>
			</form>
			<section className="emission_info">
				<h2>Total Emission Offset</h2>
				<h1 className='text-green-700 font-bold text-3xl my-5'>{trees * 20 * 1000}</h1>
				<h2>Grams</h2>
				<h2>
					CO<sub>2</sub>
				</h2>
				<h3 className='my-10 mx-5 text-green6 font-bold font-paragraph text-lg sm:text-xl md:text-2xl lg:text-3xl md:mb-10'>

					Assuming you travel the same distance everyday, you would save
				</h3>
				<h1 className='text-green-700 font-bold text-3xl my-5'>{(trees * 20 * 1000 / getEmission(distance, vehicle, passengers)).toFixed(2)}  %</h1>
				<h2 className='mb-20'>Of your anual carbon footprint.</h2>
				
			</section>
		</section>

	)
}
export default CounterClient
