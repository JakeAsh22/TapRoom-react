import React from 'react'

function NewStaffForm(){
  return(
    <div>
      <form>
        <input  
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <input 
          type='text'
          id='location'
          placeholder='Location'/>
        <textarea
          id='issue'
          placeholder='Descrive your issue.'/>
      </form>
    </div>
  )
}

export default NewStaffForm