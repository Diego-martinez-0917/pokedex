import axios from 'axios'
const POKEAPIBASE = 'https://pokeapi.co/api/v2/'

export const getAllPokedex = ()=>{
  try {
    return axios({
      baseURL:POKEAPIBASE,
      url:'pokedex/national',
      method:'GET'
    })
  } catch (error) {
    throw error        
  }
}

export const getDetailPokemon= (name)=>{
  try {
    return axios({
      baseURL:POKEAPIBASE,
      url:`pokemon/${name}`,
      method:'GET'
    })
  } catch (error) {
    throw error        
  }
}

export const getValueUrl = (url) => {
  try {
    return axios({
      url: url,
      method: 'GET'
    })
  } catch(err){
    throw(err)
  }
}

export const getGender = (gender) => {
  try {
    return axios({
      baseURL: POKEAPIBASE,
      url: `gender/${gender}`,
      method: 'GET'
    })
  } catch(err){
    throw(err)
  }
}

export const getColor = (color) => {
  try {
    return axios({
      baseURL: POKEAPIBASE,
      url: `pokemon-color/${color}`,
      method: 'GET'
    })    
  } catch(err){
    throw(err)
  }
}
  
export const getType = (type) => {
  try {
    return axios({
      baseURL: POKEAPIBASE,
      url: `type/${type}`,
      method: 'GET'
    })    
  } catch(err){
    throw(err)      
  }
}