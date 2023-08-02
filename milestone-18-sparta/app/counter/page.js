'use client'

import {useState} from 'react'
import Header from '../components/Header'
import factory from '../../public/images/factory.jpg'
import './counter.css'

const Counter = () => {
	const [distance, setDistance] = useState(0)
	const updateDistance = (evt) => {
		setDistance(evt.target.value)
	}
	return (
		<section>
			<Header
				header="EMISSION COUNTER"
				desc="Try our Emission Counter to see how much you contribute to overall global emission."
				image={factory}
			/>
			<section className="vechiles_option">
				<button className="vechile_button_1">Car</button>
				<button className="vechile_button_2">Motorcycle</button>
				<button className="vechile_button_3">Bus</button>
			</section>
			<form className="distance_forms">
				<div className="passengers_form">
					<input type="number" name="" id="" />
					<span>Passengers</span>
				</div>
				<div className="distance_slider">
					<input type="range" value={distance} onChange={updateDistance} />
					<br />
					<span className="distance_info">
						Distance Traveled: {distance} Km
					</span>
				</div>
			</form>
			<section className="emission_info">
				<h2>Emission per Passenger</h2>
				<h1>0</h1>
				<h2>Metric Tons</h2>
				<h2>
					CO<sub>2</sub> / year
				</h2>
			</section>
		</section>
	)
}
export default Counter
