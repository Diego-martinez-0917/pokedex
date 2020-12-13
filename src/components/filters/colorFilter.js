import React from 'react';
export function ColorFilter({handleChangeColor}) {
    const optionsColor = [
        {name: 'blue',value: '1',},
        {name: 'yellow',value: '2'},
        {name: 'red',value: '3'},
        {name: 'brown',value: '4'},
        {name: 'gray',value: '5'},
        {name: 'green',value: '6'},
        {name: 'purple',value: '7'},
        {name: 'white',value: '8'},
        {name: 'pink',value: '9',},
        {name: 'black',value: '10'},
      ];
    
  return (
    <div  className='color'>     
     <div className="color-radiobuttons">
         <h6 className='title'>Colors</h6>
        {optionsColor.map(option =>
            <div key={option.name} className='div-color' style={{backgroundColor:`${option.name}`}} >
                <input type="radio" name="radio-color" value={option.value} onChange={()=>handleChangeColor(option.value)}/>
            </div>
        )}
     </div>
    </div>      
  )
}