import React from 'react'
import  useCharacterApi from '../hooks/useCharacterApi'

const CardCharacter = ({ resident }) => {

  const character = useCharacterApi(resident)

  console.log(character)

  const status = () => {
    let color = {backgroundColor: 'blue'}
    if(character?.status === 'Dead'){
      color = {backgroundColor: 'red'}
    }
    if(character?.status === 'unknown'){
      color = {backgroundColor: 'gray'}
    }
    return color

  }

  return (
    <section id='inf' className='card__character'>
      <div className="card__status flex">
        <div className="dot" style={status()} ></div>
        <p>{character?.status}</p>
      </div>
      <img className='card__img' src={character?.image} alt="" />
      <h2>{character?.name}</h2>
      <p><span>Race:</span> {character?.species}</p>
      <p><span>Origin:</span> {character?.origin.name}</p>
      <p><span>Episodes:</span> {character?.episode.length}</p>
    </section>
  )
}

export default CardCharacter