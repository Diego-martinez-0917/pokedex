import axios from 'axios'
const POKEAPIBASE = 'https://pokeapi.co/api/v2/';

export const getAllPokedex = async()=>{
    try {
        const resp = await axios({
            baseURL:POKEAPIBASE,
            url:'pokedex/national',
            method:'GET'
        })
        return resp.data.pokemon_entries
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

export const getValueUrl = async(url) => {
    try {
      const response = await axios({
        url: url,
        method: 'GET'
      })
      return response.data
    } catch(err){
      console.log(err)
    }
  }
  export const getGender = async(gender) => {
    try {
      const response = await axios({
        baseURL: POKEAPIBASE,
        url: `gender/${gender}`,
        method: 'GET'
      })
      return response.data
    } catch(err){
      console.log(err)
    }
  }