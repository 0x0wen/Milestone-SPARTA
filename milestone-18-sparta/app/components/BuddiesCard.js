import React from 'react'
import Image from 'next/image'

const BuddiesCard = ({data}) => {
	return (
		<div className="w-[225px] h-[400px] flex flex-col gap-2 group-hover:scale-105 transition border-2 rounded-xl shadow-md bg-[#A0C49D]">
			<div className="h-[300px] overflow-hidden rounded-t-xl">
				<Image
					src={data.imageurl}
					alt={data.nama}
					className="object-cover object-center h-full"
				/>
			</div>
			<div className="px-4 py-2 flex flex-col justify-between flex-1">
				<div className="text-center text-xl font-bold font-paragraph text-green-800 break-normal">
					{data.nama}
				</div>
				<div className="text-center text-lg text-green-800 font-subheader font-semibold pt-2 pb-1">
					{data.nim}
				</div>
				<div className="text-center text-base text-green-700 font-subheaderitalic mb-2 font-medium">
					Buddies {data.kelompok}
				</div>
			</div>
		</div>
	)
}

export default BuddiesCard
