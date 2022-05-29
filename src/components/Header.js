import React from 'react'

const Header = () => {
  return (
    <ul className='flex ml-auto w-full font-bold'>
      <i className="text-xs text-gray-800 
                    ml-auto mr-6 border-b-2 
                    border-green-400 
                    cursor-pointer">Weather</i>
      <i className="text-xs text-gray-800 
                    mr-6 alert-notice 
                    cursor-pointer border-b-2 
                    hover:border-green-400">Alerts</i>
      <i className="text-xs text-gray-800
                    mr-6 cursor-pointer
                    border-b-2 hover:border-green-400">Map</i>
      <i className="text-xs text-gray-800
                    mr-6 cursor-pointer border-b-2 
                    hover:border-green-400">Satelite</i>
      <i className="text-xs text-gray-800
                    cursor-pointer border-b-2 
                    hover:border-green-400">News</i>
    </ul>
  )
}

export default Header