/* eslint-disable array-callback-return */
import React,{ useEffect, useState } from 'react'
import {Modal} from 'react-bootstrap'
import { getDetailPokemon,getValueUrl } from '../../utils/HTTPrequest'
export function ModalPokemon({onhide,showModal,name}){
    
  const [pokemonDetail, setPokemonDetail]= useState({})
  const [pokemonSpecies, setPokemonSpecies]= useState({})
  const [pokemonEvolutions, setPokemonEvolutions]= useState([])


  
  useEffect(()=>{
    if(name!==''){getDetailPokemon(name).then(resultdetail=>{
      setPokemonDetail(resultdetail.data)         
      getValueUrl(resultdetail.data.species.url).then(resultspecies=>{
        setPokemonSpecies(resultspecies)
        getValueUrl(resultspecies.evolution_chain.url).then(resultevolution=>{
          setPokemonEvolutions(getAllEvolutions(resultevolution))
        })
      })  
    })}
    else{
      setPokemonDetail({})
      setPokemonSpecies({})
      setPokemonEvolutions({})
    }      
  },[name])

  const getAllEvolutions =(resultevolution)=>{
    let chain = [];
          for (let firstlevel in resultevolution.chain){            
            if(firstlevel === 'species'){    
              chain.push({
                name: resultevolution.chain.species.name, 
                image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${resultevolution.chain.species.url.split("/")[6].toString().padStart(3,"000")}.png`
              })
            }

            if (firstlevel === "evolves_to" && resultevolution.chain.evolves_to.length > 0){
              resultevolution.chain.evolves_to.map((element, index) => {
                  for (let secondlevel in resultevolution.chain.evolves_to[index]) {
                    if (secondlevel === 'species') {
                      chain.push({
                        name: resultevolution.chain.evolves_to[index].species.name,
                        image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${resultevolution.chain.evolves_to[index].species.url.split("/")[6].toString().padStart(3, "000")}.png`
                      })
                    }

                    if (secondlevel === "evolves_to" && resultevolution.chain.evolves_to[index].evolves_to.length >= 0) {
                      resultevolution.chain.evolves_to[index].evolves_to.map((secondElem, secondIndex) => {
                        for (let thirdlevel in resultevolution.chain.evolves_to[index].evolves_to[secondIndex]) {
                          if (thirdlevel === "species") {
                            chain.push({
                              name: resultevolution.chain.evolves_to[index].evolves_to[secondIndex].species.name,
                              image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${resultevolution.chain.evolves_to[index].evolves_to[secondIndex].species.url.split("/")[6].toString().padStart(3, "000")}.png`
                            })
                          }
                        }
                      })
                    }
                  }
                })          
            }
          }
          return(chain)
  }

    return(
        <Modal show={showModal} onHide={onhide} size='lg'>
          <Modal.Header closeButton/>
          {Object.keys(pokemonDetail).length!==0 &&
          <div className='modal-container'>            
            <img alt='imagen-pokemon' className='imagen-pokemon' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonDetail.id.toString().padStart(3,"000")}.png`}/>
            <div className='conten-lateral'>
              <h4>{pokemonDetail.name.charAt(0).toUpperCase() + name.slice(1)}</h4>
              <div className='number'><h4>{pokemonDetail.id.toString().padStart(3,"000")}</h4></div>
              <div className='table-detail'>
                <h5>Height</h5><h5>{pokemonDetail.height}</h5>
                <h5>Weight</h5><h5>{pokemonDetail.weight}</h5>
                <h5>Category</h5><h5>{pokemonDetail.types.map(ty=>ty.type.name+' ')}</h5>
                <h5>Gender</h5><h5>{}</h5>
                <h5>Habitat</h5><h5>{Object.keys(pokemonSpecies).length !== 0 && pokemonSpecies.habitat.name}</h5>
                <h5>Color</h5><h5>{Object.keys(pokemonSpecies).length !== 0 && pokemonSpecies.color.name}</h5>
              </div>
              
            </div>
            
            {pokemonEvolutions && pokemonEvolutions.length > 1 ?  pokemonEvolutions.map(pokemon=>
              <div>
                <div className="pokemonImage">
                  <img alt='pokemon-imagen' src={pokemon.image}></img>
                </div>
                  <div className="pokemonName">{pokemon.name}</div>
                </div>
            ).reverse():<span>This pokemon does not evolve</span>}            
          </div>
          }
      </Modal>
    )
} 