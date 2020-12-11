import React from 'react';
export function GenderFilter() {
    const GenderRadioButton = [
        {name: 'All', value: 'all'},
        {name: 'Male', value: 'male'},
        {name: 'Female', value: 'female'},
        {name: 'Undefined', value: 'genderless'}
      ]
      const handleChangeGender = (value) => {
        console.log(value)
        }
  return (
    <div className='gender'>
        <div className="gender-radiobuttons">
         <h6 className='title'>Gender</h6>
        {GenderRadioButton.map(option =>
            <div key={option.name} className='div-color' style={{backgroundColor:`${option.name}`}} >
                <input type="radio" name="radio-gender" value={option.value} onChange={()=>handleChangeGender(option.value)}/>
                <label>{option.name}</label>
            </div>
        )}
     </div>
    </div>      
  )
}