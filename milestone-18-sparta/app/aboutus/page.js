// AboutUs.js
import React from 'react'
import BuddiesCard from '../components/BuddiesCard'
import Header from '../components/Header'
import greenery from '../../public/images/greenery.jpg'
// Import the image using `require` function

const AboutUs = () => {
	const BuddiesA = [
		{
			id: 1,
			nama: 'Imanuel Sebastian Girsang',
			nim: 19622068,
			kelompok: 'A2',
			imageurl: require('../../public/images/BuddiesA/nuel.jpg'),
		},
		{
			id: 2,
			nama: 'Rayhan Ridhar Rahman',
			nim: 19622282,
			kelompok: 'A2',
			imageurl: require('../../public/images/BuddiesA/Rayhan.jpg'),
		},
	]
	const BuddiesM = [
		{
			id: 1,
			nama: 'Owen Tobias Sinurat',
			nim: 19622270,
			kelompok: 'M1',
			imageurl: require('../../public/images/BuddiesM/owen.jpg'),
		},
	]
	const BuddiesP = []

	return (
		<>
			<Header
				header="About Us"
				desc="Know the people behind this team."
				image={greenery}
			/>
			<h2 className="text-center my-10 mx-5 text-green7 font-bold font-subheader text-5xl sm:text-6xl md:text-7xl lg:text-8xl md:mb-10">
				Buddies A2
			</h2>
			<div className="justify-center pt-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-20">
				{BuddiesA.map((buddy) => {
					return (
						<center>
							<BuddiesCard key={buddy.id} data={buddy} />
						</center>
					)
				})}
			</div>
			<h2 className="text-center my-10 mx-5 text-green7 font-bold font-subheader text-5xl sm:text-6xl md:text-7xl lg:text-8xl md:mb-10">
				Buddies M
			</h2>
			<div className="justify-center pt-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-20">
				{BuddiesM.map((buddy) => {
					return (
						<center>
							<BuddiesCard key={buddy.id} data={buddy} />
						</center>
					)
				})}
			</div>
			<h2 className="text-center my-10 mx-5 text-green7 font-bold font-subheader text-5xl sm:text-6xl md:text-7xl lg:text-8xl md:mb-10">
				Buddies P
			</h2>
			<div className="justify-center pt-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-20">
				{BuddiesP.map((buddy) => {
					return (
						<center>
							<BuddiesCard key={buddy.id} data={buddy} />
						</center>
					)
				})}
			</div>
		</>
	)
}

export default AboutUs
