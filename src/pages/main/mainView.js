import React, { useEffect, useState } from 'react'
import { ColorFilter } from '../../components/filters/colorFilter'
import { GenderFilter } from '../../components/filters/genderFilter'
import { SharedFilter } from '../../components/filters/shared'
import { TypeFilter } from '../../components/filters/typeFilter'
import { ListPokemon} from '../../components/pokemons/listPokemon'
import { getAllPokedex, getColor, getGender, getType } from '../../utils/HTTPrequest'
import './main.scss'

export function MainView() {

  const[lengthList, setLengthList]=useState(20)
  const [partitionList,setPartitionList]=useState({})
  const [pokemonFilter,setPokemonFilter]=useState([])
  
  const increase = () => setLengthList(lengthList+20)
  const Partition =(arr)=> setPartitionList(arr.slice(0,lengthList))
  
  useEffect(()=>{
      let pokedex = []
        if(localStorage.getItem('pokedex') === null){
          getAllPokedex().then(resPokedex=>{
            resPokedex.data.pokemon_entries.forEach(elem=>pokedex.push({name:elem.pokemon_species.name,id:elem.entry_number}))
            localStorage.setItem('pokedex',JSON.stringify(pokedex))
            setPokemonFilter(pokedex)
          })           
        }
        if(pokemonFilter.length>0){Partition(pokemonFilter)}
        else{Partition(JSON.parse(localStorage.getItem('pokedex')))}                
  },[lengthList])  

  const handleChangeType = (value) => {
    
    let resulApiType=[]
    let definitiveArr =[]

    getType(value).then(resType=>{          
      resType.data.pokemon.forEach(elem=>resulApiType.push(elem.pokemon.name))        
      
      if(pokemonFilter.length>0){
        pokemonFilter.forEach(elem => {
          if(resulApiType.includes(elem.name)) definitiveArr.push(elem)
        })
      }
      else{
        JSON.parse(localStorage.getItem('pokedex')).forEach(elem=>{
          if(resulApiType.includes(elem.name))definitiveArr.push({name:elem.name,id:elem.id})
        })
      }
      console.log('type filter',definitiveArr)
      setPokemonFilter(pokemonFilter.concat(definitiveArr)) 
    })
  }
      
  const handleChangeColor = (value) => {
    
    let resulApiColor = []
    let definitiveArr =[]
    
    getColor(value).then(resColor=>{
      resColor.data.pokemon_species.forEach(elem=> resulApiColor.push(elem.name))          
      
      if(pokemonFilter.length>0){
        pokemonFilter.forEach(elem => {
          if(resulApiColor.includes(elem.name)) definitiveArr.push(elem)
        })
      }
      else{
        JSON.parse(localStorage.getItem('pokedex')).forEach(elem=>{
        if(resulApiColor.includes(elem.name))definitiveArr.push({name:elem.name,id:elem.id})          
        }) 
      }
      console.log('color filter',definitiveArr)
      //setPokemonFilter(pokemonFilter.concat(definitiveArr))
    })       
  }  

  const handleChangeGender = (value) => {
    let resulApiGender = []
    let definitiveArr =[]
    if(value!=='all'){
      getGender(value).then(resGender=>{
      resGender.data.pokemon_species_details.forEach(elem=>resulApiGender.push(elem.pokemon_species.name))
      if(pokemonFilter.length>0){
        pokemonFilter.forEach(elem=>{
          if(resulApiGender.includes(elem.name))definitiveArr.push({name:elem.name,id:elem.id})          
        })
      }
      else{
        JSON.parse(localStorage.getItem('pokedex')).forEach(elem=>{
          if(resulApiGender.includes(elem.name))definitiveArr.push({name:elem.name,id:elem.id})          
        })
      }
      console.log('gender filter',definitiveArr)
      setPokemonFilter(pokemonFilter.concat(definitiveArr))
      })
    }
  }
  useEffect(()=>{
    if(pokemonFilter.length!==0) {
      /*setPokemonFilter(Array.from(new Set(pokemonFilter)))
      console.log(Array.from(new Set(pokemonFilter)))*/
    }
  },[pokemonFilter])

  return (
    <div className='main'> 
      <SharedFilter />
      <TypeFilter handleChangeType={handleChangeType}/>
      <ColorFilter handleChangeColor={handleChangeColor}/>
      <GenderFilter handleChangeGender={handleChangeGender}/>
      <ListPokemon partitionList={partitionList} increase={increase}/>
    </div>      
  )
}