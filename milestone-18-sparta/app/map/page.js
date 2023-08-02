import MapClient from './clientpage';
import map from '../../public/images/map.webp'
import Header from "../components/Header";
const MapPage = () => {
    return (
        <>
            <Header
                header="POLLUTION MAP"
                desc="See the air condition on your neighborhood and start changing now!"
                image={map}
            />
            <section className='pb-5 mt-10 text-green8 font-paragraph font-bold text-center overflow-auto'>
            <h2 className="mt-20 xl:mt-0  text-3xl md:text-5xl">Click anywhere on the map to see the AQI of your location</h2>
            
            <MapClient /></section>

        </>
    );
}

export default MapPage;