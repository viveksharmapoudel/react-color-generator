import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [hexIn,setHexIn]=useState();
  const [valError,setValError]=useState(false);
  const [colors, setColors]=useState(new Values("#f15025").all(10));
  const handleSubmit = (e) =>{
    e.preventDefault()
    try{
      let valColors= new Values(hexIn).all(10)
      setColors(valColors) 
    }catch(error){
      setValError(true)
      console.log(" there is an error")
    }
  }
  return (
    <main>
      <section className="container">
        <h3>Color Generator</h3>
        <form class="input" onSubmit={handleSubmit}>
          <input
            type="text"
            name="hexIn"
            value={hexIn}
            onChange={(e)=>setHexIn(e.target.value)}
            className= {`${(valError)?'error':null}`}
            placeholder="#f15025"
          />
          <button 
            type="submit" 
            className="btn"
          >
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {
          colors.map((color,index)=>{
            return <SingleColor key={index} {...color} hex={color.hex} index={index}/>
          })
        }
      </section>
    </main>
  )
}

export default App
