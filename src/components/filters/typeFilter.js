import React from 'react'

export function TypeFilter({handleChangeType}) {
  
  const TypeRadioButton = [
    {name: 'Bug', value: 'bug'},
    {name: 'Psychic', value: 'psychic'},
    {name: 'Electric', value: 'electric'},
    {name: 'Fighting', value: 'fighting'},
    {name: 'Water', value: 'water'},
    {name: 'Fairy', value: 'fairy'},
    {name: 'Ground',  value: 'ground'},
    {name: 'Dark', value: 'dark'},
    {name: 'Fire', value: 'fire'},
    {name: 'Dragon', value: 'dragon'},
    {name: 'Ice', value: 'ice'},
    {name: 'Steel', value: 'steel'},
    {name: 'Flying', value: 'flying'},
    {name: 'Shadow', value: 'shadow'},
    {name: 'Rock', value: 'rock'},
    {name: 'Poison', value: 'poison'},
    {name: 'Normal', value: 'normal'},
    {name: 'Ghost', value: 'ghost'},
    {name: 'Grass', value: 'grass'},
    {name: 'Unknown', value: 'unknown'},
  ]
      
  return (
    <div className='type'>
        <h4 style={{margin:'5px'}}>Filters</h4>
         <div className="gender-radiobuttons">
            <h6 className='title'>Type</h6>             
            { TypeRadioButton.map(option=>
            <div key={option.name}>
                <input type="radio" name="radio-type" value={option.name} onChange={()=>handleChangeType(option.value)}/>
            <label>{option.name}</label>
            </div>
            )}
            
        </div>
    </div>      
  )
}