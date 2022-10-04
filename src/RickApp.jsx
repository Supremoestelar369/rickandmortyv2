import React, { useState } from 'react'
import CardCharacter from './components/CardCharacter'
import InputSearch from './components/InputSearch'
import LocationInfo from './components/LocationInfo'
import useLocationApi from './hooks/useLocationApi'

const RickApp = () => {

   const [searchLocation, setSearchLocation] = useState()
   const [loading, setLoading] = useState(false)
   const [currentPage, setCurrentPage] = useState(1)

   const location = useLocationApi(searchLocation)

   return (
      <main className='main'>
         <InputSearch setSearchLocation={setSearchLocation} />

         <div className='main__container flex'>
            <LocationInfo location={location} />

            <div className="card flex">
               {location?.residents.map(resident => (
                  <CardCharacter
                     resident={resident}
                     key={resident}
                  />
               ))}
            </div>

         </div>

      </main>
   )
}

export default RickApp