import axios from 'axios'
const POKEAPIBASE = 'https://pokeapi.co/api/v2/';

export const getAllPokedex = async()=>{
    try {
        const resp = await axios({
            baseURL:POKEAPIBASE,
            url:'pokedex/national',
            method:'GET'
        })
        return resp.data
    } catch (error) {
        throw error        
    }
}