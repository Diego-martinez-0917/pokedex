import React, { useState } from 'react'
import {Card} from 'react-bootstrap'
import { ModalPokemon } from './modalPokemon'

export  function ListPokemon({partitionList,increase}) {

  const [showModal, setShowModal] = useState(false)
  const [namePokemon, setNamePokemon] = useState('')   
  
  const hadleClickPokemon=(name)=>{
    setShowModal(true)
    setNamePokemon(name)
  }

  const hadleHideClickPokemon=()=>{
    setShowModal(false)
    setNamePokemon('')
  }

  return (
    <div className='viewList'>
      <span className='text-get-information'>Choose a pokemon to get more information</span>
      {Object.keys(partitionList).length === 0 ? <span className='text-get-information'>loading</span> : partitionList.map(pokemon=> 
        <Card key={pokemon.id} onClick ={()=>hadleClickPokemon(pokemon.name)}>
          <Card.Img variant='top' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id.toString().padStart(3,"000")}.png`}></Card.Img>
          <Card.Body>
            <Card.Title>{pokemon.name}</Card.Title>
          </Card.Body>
        </Card>)
      }
      <ModalPokemon  onhide={hadleHideClickPokemon} showModal={showModal} name={namePokemon} />
      <input type='button' className='load' onClick={()=>increase()} value='Load more'/>
    </div>      
  )
}