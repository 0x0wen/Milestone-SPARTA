import Header from '../components/Header'
import map from '../../public/images/map.png'
const Map = () => {
	return (
		<div>
			<Header
				header="POLLUTION MAP"
				desc="See the air condition on your neighborhood and start changing now!"
                image={map}
			/>
		</div>
	)
}

export default Map
