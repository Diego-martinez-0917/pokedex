import React from 'react';
export function SharedFilter() {
  return (
    <div className='shared'> 
      <input type='text' placeholder='Shared' onChange={(event)=>console.log(event.target.value)} />
    </div>      
  )
}