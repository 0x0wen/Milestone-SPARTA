'use client'

import {useState} from 'react'
import Header from '../components/Header'
import factory from '../../public/images/factory.jpg'
import './counter.css'
import CounterClient from './clientpage'
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
			<CounterClient/>
		</section>
	)
}
export default Counter
