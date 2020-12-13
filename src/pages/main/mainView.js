import React, { useEffect, useState } from 'react'
import { ColorFilter } from '../../components/filters/colorFilter'
import { GenderFilter } from '../../components/filters/genderFilter'
import { SharedFilter } from '../../components/filters/shared'
import { TypeFilter } from '../../components/filters/typeFilter'
import { ListPokemon} from '../../components/pokemons/listPokemon'
import { getAllPokedex } from '../../utils/HTTPrequest'
import './main.scss'
export function MainView() {

  const[lengthList, setLengthList]=useState(133)
  const [partitionList,setPartitionList]=useState({})
  const increase = () => setLengthList(lengthList+20)

    useEffect(()=>{
        async function getPokedex(){
          if(localStorage.getItem('pokedex')=== null){
            localStorage.setItem('pokedex',JSON.stringify(await getAllPokedex()))            
          }
          setPartitionList(JSON.parse(localStorage.getItem('pokedex')).slice(0,lengthList))
        }
        getPokedex()
      },[lengthList])
      
      const handleChangeType = (value) => {
        console.log(value)
      }
      
      const handleChangeColor = (value) => {
        console.log(value)
      }  

      const handleChangeGender = (value) => {
        console.log(value)
      }

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