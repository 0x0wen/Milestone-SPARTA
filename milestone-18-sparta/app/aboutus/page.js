// AboutUs.js
import React from 'react'
import BuddiesCard from '../components/BuddiesCard'
import Header from '../components/Header'
import greenery from '../../public/images/work.webp'
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
		{
			id: 3,
			nama: 'Jeremy Deandito',
			nim: 19622244,
			kelompok: 'A2',
			imageurl: require('../../public/images/BuddiesA/Jeremy.jpg'),
		},
		{
			id: 4,
			nama: 'Juan Alfred Widjaya',
			nim: 19622073,
			kelompok: 'A2',
			imageurl: require('../../public/images/BuddiesA/Juan.jpg'),
		},
		{
			id: 5,
			nama: 'Serenada Cinta Sunindyo',
			nim: 19622024,
			kelompok: 'A2',
			imageurl: require('../../public/images/BuddiesA/Cinta.jpg'),
		}
	]
	const BuddiesM = [
		{
			id: 1,
			nama: 'Owen Tobias Sinurat',
			nim: 19622270,
			kelompok: 'M1',
			imageurl: require('../../public/images/BuddiesM/owen.jpg'),
		},
		{
			id: 2,
			nama: 'Novelya Putri Ramadhani',
			nim: 19622135,
			kelompok: 'M1',
			imageurl: require('../../public/images/BuddiesM/novel.jpg'),
		},
		{
			id: 3,
			nama: 'Raizan Iqbal Resi',
			nim: 19622029,
			kelompok: 'M1',
			imageurl: require('../../public/images/BuddiesM/iqbal.jpg'),
		},
		{
			id: 4,
			nama: 'Alvin Fadhilah Akmal',
			nim: 19622020,
			kelompok: 'M1',
			imageurl: require('../../public/images/BuddiesM/Alvin.jpg'),
		},
	]
	const BuddiesP = [
		{
			id: 1,
			nama: 'Zahira Dina Amalia',
			nim: 19622111,
			kelompok: 'P2',
			imageurl: require('../../public/images/BuddiesP/hira.jpg'),
		},
		{
			id: 2,
			nama: 'Farrel Natha Saskoro',
			nim: 19622235,
			kelompok: 'P2',
			imageurl: require('../../public/images/BuddiesP/natha.jpg') 
		},
		{
			id:3,
			nama:"Bastian Natanael Sibarani",
			nim: 19622215,
			kelompok: 'P2',
			imageurl: require('../../public/images/BuddiesP/bastian.jpg')
		},
		{
			id: 4,
			nama: 'Ammar Naufal',
			nim: 19622047,
			kelompok: 'P2',
			imageurl: require('../../public/images/BuddiesP/Ammar.jpeg'),
		},
	]

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
			<h2 className="text-center mt-20 mx-5 text-green7 font-bold font-subheader text-5xl sm:text-6xl md:text-7xl lg:text-8xl md:mb-10">
				Buddies M1
			</h2>
			<div className="justify-center pt-20  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-20">
				{BuddiesM.map((buddy) => {
					return (
						<center>
							<BuddiesCard key={buddy.id} data={buddy} />
						</center>
					)
				})}
			</div>
			<h2 className="text-center mt-20 mx-5 text-green7 font-bold font-subheader text-5xl sm:text-6xl md:text-7xl lg:text-8xl md:mb-10">
				Buddies P2
			</h2>
			<div className="justify-center pt-20 mb-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20">
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
