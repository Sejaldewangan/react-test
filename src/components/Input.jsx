import React, { useState } from 'react'

const Input = () => {
    const [input,setInput]=useState("")
  return (
    <div>
      <input value={input} onChange={(event)=>{setInput(event.target.value)}} type="text" placeholder='enter your name' />
      <hr />
      {console.log(input)}
    </div>
  )
}

export default Input
