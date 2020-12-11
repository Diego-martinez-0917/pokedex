import React, { useEffect } from 'react';
import { ColorFilter } from '../../components/filters/colorFilter';
import { GenderFilter } from '../../components/filters/genderFilter';
import { SharedFilter } from '../../components/filters/shared';
import { TypeFilter } from '../../components/filters/typeFilter';
import { ListPokemon} from '../../components/pokemons/listPokemon';
import { getAllPokedex } from '../../utils/HTTPrequest';
import './main.scss'
export function MainView() {
    useEffect(()=>{
        async function getPokedex(){
         localStorage.setItem('pokedex',await getAllPokedex() )
        }
        getPokedex()
      },[])
  return (
    <div className='main'> 
      <SharedFilter />
      <TypeFilter/>
      <ColorFilter/>
      <GenderFilter/>
      <ListPokemon/>
    </div>      
  )
}