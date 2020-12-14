import React from 'react'

export function ColorFilter({handleChangeColor}) {
  
  const optionsColor = [
    {name: 'blue',value: '2',},
    {name: 'yellow',value: '10'},
    {name: 'red',value: '8'},
    {name: 'brown',value: '3'},
    {name: 'gray',value: '4'},
    {name: 'green',value: '5'},
    {name: 'purple',value: '7'},
    {name: 'white',value: '9'},
    {name: 'pink',value: '6',},
    {name: 'black',value: '1'},
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