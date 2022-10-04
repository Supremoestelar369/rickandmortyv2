import React from 'react'

const LocationInfo = ({ location }) => {

    console.log(location)

    return (
        <article id='inf-location' className='inf-location flex'>
            <h2 className='inf-location__subtitle'>{location?.name}</h2>
            <ul className='inf-location__list-items'>
                <li className='inf-location__list-item'><span className='inf-location_span'>Type: </span>{location?.type}</li>
                <li className='inf-location__list-item'><span className='inf-location_span'>Dimension: </span>{location?.dimension}</li>
                <li className='inf-location__list-item'><span className='inf-location_span'>Population: </span>{location?.residents.length}</li>
            </ul>
        </article>
    )
}

export default LocationInfo