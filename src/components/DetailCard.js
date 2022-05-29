import moment from 'moment';
import React from 'react';

const DetailCard = ({ weather_icon, data }) => {
  moment.locale('fa');
  const { clouds, main, weather } = data.list[0];
  console.log(data)
  return (
    <div className='container p-4 
                    flex flex-col 2xl:flex-row
                    2xl:items-center justify-center 
                    shadow-lg 
                    bg-white h-1/3 mb-auto
                    rounded-lg'>
      <div className="my-auto">
        <p className="font-bold text-5xl 
                    text-pink-800 mb-2">
          {Math.round(main.temp)}&deg;C</p>
        <p className="text-4xl text-gray-800 
                      tracking-widest">
          {weather[0].main}
          <img src={weather_icon} className="w-1/4 inline" />
        </p>
        <p className='text-gray-400 text-xs uppercase tracking-widest'>
          {weather[0].description}
        </p>
        <p className="tracking-wider">{moment().format("dddd MMM YYYY")}</p>
      </div>
      <div className='my-2 2xl:border-l-2 2xl:border-gray-100 p-2'>
        <p className="text-gray-400 text-lg">Feels Like: {Math.round(main.feels_like)}&deg;C</p>
        <p className="text-gray-400 text-lg">Humidity: {main.humidity}%</p>
        <p className="text-gray-400 text-lg">Cloud Cover: {clouds.all}%</p>
        <p className="text-gray-400 text-lg">Min Temp: {Math.round(main.temp_min)}&deg;C</p>
        <p className="text-gray-400 text-lg">Max Temp: {Math.round(main.temp_max)}&deg;C</p>
      </div>
    </div>
  )
}

export default DetailCard