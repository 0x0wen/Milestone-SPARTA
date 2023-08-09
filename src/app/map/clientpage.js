/*'use client'
import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const MapClient = () => {
  
  const [aqi, setAqi] = useState()
  const [data, setData] = useState({})
  const mapInstance = useRef(null);
  const getcolor = (level) => {
    if (level == 1)
      return ("bg-[#A7FFBA]")
    else if (level == 2)
      return ("bg-[#F7FF96]")
    else if (level == 3)
      return ("bg-[#FEA777]")
    else if (level == 4)
      return ("bg-[#FF7272]")
    else if (level == 5)
      return ("bg-[#B461C2]")
  }
  useEffect(() => {
    // Create the map and specify its center and initial zoom level
    mapInstance.current = L.map(mapInstance.current).setView([-6.891480, 107.610657], 50);

    // Add the tile layer (map tiles) to the map using OpenStreetMap as the map provider
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapInstance.current);
    const popup = L.popup();
    const getAqi = async (lat, lng) => {
      const res = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=8890989f5a9f387eec556f48518adac3`)
      console.log(res.data)
      setAqi(Number(res.data.list[0].main.aqi))
      setData(res.data.list[0].components)
      return (
        res.data.list[0].main.aqi
      )
    }
    const getLocation = async (lat, lng) => {
      const res = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=8d59f4675db549ed82273b8539d735d6`)

      const addressline1 = res.data.features[0].properties.address_line1
      const addressline2 = res.data.features[0].properties.address_line2
      const sendfull = [addressline1, addressline2]

      return (sendfull)
    }
    async function onMapClick(e) {
      try {
        const aqi = await getAqi(e.latlng.lat, e.latlng.lng);
        const location = await getLocation(e.latlng.lat, e.latlng.lng)
        popup
          .setLatLng(e.latlng)
          .setContent(
            "The AQI at " +
            location[0] + " " + location[1] +
            ` is ` +
            aqi
          )
          .openOn(mapInstance.current);
      } catch (error) {
        console.error('Error fetching air quality data:', error);
      }
    }

    mapInstance.current.on('click', onMapClick);
    // Return a cleanup function to remove the map when the component unmounts
    return () =>{
      if (mapInstance.current) {
        mapInstance.current.remove();
      }
    };
  }, []);



  return (
    <>
    <table className=' border-2 border-slate-950 mx-auto text-xs sm:text-sm md:text-md lg:text-2xl hidden md:table'>
        <thead className='bg-[#A0C49D] text-black'>
          <tr>
            <th className='p-3 border-2 border-slate-950' rowspan={2}>AQI Level</th>

            <th className='p-3 border-2 border-slate-950 ' colSpan={6}>Concentration %</th>
          </tr>
          <th className='p-3 border-2 border-slate-950'>SO<sub>2</sub></th>
          <th className='p-3 border-2 border-slate-950'>NO<sub>2</sub></th>
          <th className='p-3 border-2 border-slate-950'>PM<sub>10</sub></th>
          <th className='p-3 border-2 border-slate-950'>PM<sub>2.5</sub></th>
          <th className='p-3 border-2 border-slate-950'>O<sub>3</sub></th>
          <th className='p-3 border-2 border-slate-950'>CO</th>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center text-black bg-[#A7FFBA]">1</td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;0; 20&#41;
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;0; 40&#41;
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;0; 20&#41;
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;0; 10&#41;
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;0; 60&#41;
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;0; 4400&#41;
            </td>
          </tr>
          <tr>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center  text-black bg-[#F7FF96]">2</td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;20; 80&#41;
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;40; 70&#41;
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;20; 50&#41;
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;10; 25&#41;
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;60; 100&#41;
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;4400; 9400&#41;
            </td>

          </tr>
          <tr>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center text-black bg-[#FEA777]">3</td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;80; 250&#41;
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;70; 150&#41;
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;50; 100&#41;
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;25; 50&#41;
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;100; 140&#41;
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;9400-12400&#41;
            </td>

          </tr>
          <tr>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center text-black bg-[#FF7272]">4</td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;250; 350&#41;
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;150; 200&#41;
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;100; 200&#41;
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;50; 75&#41;
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;140; 180&#41;
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              &#91;12400; 15400&#41;
            </td>

          </tr>
          <tr>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center text-black bg-[#B461C2]">5</td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              ⩾350
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              ⩾200
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              ⩾200
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              ⩾75
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              ⩾180
            </td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">
              ⩾15400
            </td>

          </tr>
        </tbody>
      </table>
      <div className="overflow-x-auto">
  <table className="border-collapse border-2 border-slate-950 mx-auto text-xs sm:text-sm md:text-md lg:text-2xl md:hidden">
    <thead className="bg-[#A0C49D] text-black">
      <tr>
        <th className="p-3 border-2 border-slate-950 text-center" rowspan={4}>AQI Level</th>
        <th className="p-3 border-2 border-slate-950 text-center bg-[#A7FFBA]">1</th>
        <th className="p-3 border-2 border-slate-950 text-center bg-[#F7FF96]">2</th>
        <th className="p-3 border-2 border-slate-950 text-center bg-[#FEA777]">3</th>
        <th className="p-3 border-2 border-slate-950 text-center bg-[#FF7272]">4</th>
        <th className="p-3 border-2 border-slate-950 text-center bg-[#B461C2]">5</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center text-black ">SO<sub>2</sub></td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;0; 20&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;20; 80&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;80; 250&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;250; 350&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">⩾350</td>
      </tr>
      <tr>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center text-black ">NO<sub>2</sub></td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;0; 40&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;40; 70&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;70; 150&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;150; 200&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">⩾200</td>
      </tr>
      <tr>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center text-black ">PM<sub>10</sub></td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;0; 20&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;20; 50&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;50; 100&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;100; 200&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">⩾200</td>
      </tr>
      <tr>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center text-black ">PM<sub>2.5</sub></td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;0; 10&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;10; 25&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;25; 50&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;50; 75&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">⩾75</td>
      </tr>
      <tr>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center text-black ">O<sub>3</sub></td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;0; 60&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;60; 100&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;100; 140&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;140; 180&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">⩾180</td>
      </tr>
      <tr>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center text-black F">CO</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;0; 4400&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;4400; 9400&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;9400-12400&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">&#91;12400; 15400&#41;</td>
        <td className="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">⩾15400</td>
      </tr>
    </tbody>
  </table>
</div>
      <div className="flex  justify-center pt-[6rem] px-5">

        <div className="w-[400px] h-[300px] md:w-[450px] md:h-[300px] lg:w-[800px] lg:h-[600px]  bg-gray-300 rounded-md overflow-hidden">
          <div ref={mapInstance} style={{ width: '100%', height: '100%' }} >

          </div>
        </div>
      </div>
      <div class="overflow-x-auto">
  <table class="m-10 lg:m-[5rem] border-collapse border-2 border-slate-950 mx-auto text-xs sm:text-sm md:text-md lg:text-2xl md:hidden ">
    <caption className='pb-2 text-xl'>SELECTED DATA:</caption>
    <tbody>
      <tr>
        <td class="px-1 py-3  lg:px-6 border-2 border-slate-950 bg-[#A0C49D] text-black">AQI</td>
        <td class={`px-1 py-3  lg:px-6 border-2 border-slate-950 text-center ${getcolor(aqi) } text-black`}>{aqi}</td>
      </tr>
      <tr>
        <td class="px-1 py-3  lg:px-6 border-2 border-slate-950 bg-[#A0C49D] text-black">SO<sub>2</sub></td>
        <td class="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">{data.so2}</td>
      </tr>
      <tr>
        <td class="px-1 py-3  lg:px-6 border-2 border-slate-950 bg-[#A0C49D] text-black">NO<sub>2</sub></td>
        <td class="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">{data.no2}</td>
      </tr>
      <tr>
        <td class="px-1 py-3  lg:px-6 border-2 border-slate-950 bg-[#A0C49D] text-black">PM<sub>10</sub></td>
        <td class="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">{data.pm10}</td>
      </tr>
      <tr>
        <td class="px-1 py-3  lg:px-6 border-2 border-slate-950 bg-[#A0C49D] text-black">PM<sub>2.5</sub></td>
        <td class="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">{data.pm2_5}</td>
      </tr>
      <tr>
        <td class="px-1 py-3  lg:px-6 border-2 border-slate-950 bg-[#A0C49D] text-black">O<sub>3</sub></td>
        <td class="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">{data.o3}</td>
      </tr>
      <tr>
        <td class="px-1 py-3  lg:px-6 border-2 border-slate-950 bg-[#A0C49D] text-black">CO</td>
        <td class="px-1 py-3  lg:px-6 border-2 border-slate-950 text-center">{data.co}</td>
      </tr>
    </tbody>
  </table>
</div>
      <table className='m-[3rem] border-2 border-slate-950 mx-auto text-xs sm:text-sm md:text-md lg:text-2xl hidden md:table '>
      <caption className='pb-2 text-xl lg:text-3xl'>SELECTED DATA:</caption>
        <thead className='bg-[#A0C49D] text-black'>
          <tr>
            <th className='p-3 border-2 border-slate-950'>AQI</th>
            <th className='p-3 border-2 border-slate-950'>SO<sub>2</sub></th>
            <th className='p-3 border-2 border-slate-950'>NO<sub>2</sub></th>
            <th className='p-3 border-2 border-slate-950'>PM<sub>10</sub></th>
            <th className='p-3 border-2 border-slate-950'>PM<sub>2.5</sub></th>
            <th className='p-3 border-2 border-slate-950'>O<sub>3</sub></th>
            <th className='p-3 border-2 border-slate-950'>CO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`border-2 border-slate-950 px-1 py-3  lg:px-6 text-center text-black ${getcolor(aqi)}`}>{aqi}</td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">{data.so2}</td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">{data.no2}</td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">{data.pm10}</td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">{data.pm2_5}</td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">{data.o3}</td>
            <td className="border-2 border-slate-950 px-1 py-3  lg:px-6 text-center">{data.co}</td>
          </tr>
        </tbody>
      </table>
  


    </>
  );
};

export default MapClient;*/
