import React from 'react';
export function TypeFilter({handleChangeType}) {
    const TypeRadioButton = [
        {name: 'Bug', value: '1'},
        {name: 'Psychic', value: '2'},
        {name: 'Electric', value: '3'},
        {name: 'Fighting', value: '4'},
        {name: 'Water', value: '5'},
        {name: 'Fairy', value: '6'},
        {name: 'Ground',  value: '7'},
        {name: 'Dark', value: '8'},
        {name: 'Fire', value: '9'},
        {name: 'Dragon', value: '10'},
        {name: 'Ice', value: '11'},
        {name: 'Steel', value: '12'},
        {name: 'Flying', value: '13'},
        {name: 'Plant', value: '14'},
        {name: 'Rock', value: '15'},
        {name: 'Poison', value: '16'},
        {name: 'Normal', value: '17'},
        {name: 'Ghost', value: '18'},
        {name: 'Grass', value: '19'},
        {name: 'Unknown', value: '20'},
      ]
      
  return (
    <div className='type'>
        <h4 style={{margin:'5px'}}>Filters</h4>
         <div className="gender-radiobuttons">
            <h6 className='title'>Type</h6>             
            { TypeRadioButton.map(option=>
            <div key={option.name}>
                <input type="radio" name="radio-type" value={option.value} onChange={()=>handleChangeType(option.value)}/>
            <label>{option.name}</label>
            </div>
            )}
            
        </div>
    </div>      
  )
}