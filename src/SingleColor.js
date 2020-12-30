import React, { useState, useEffect } from 'react'
import rgbToHex from './Utils'

const SingleColor = ({rgb, alpha, type, weight, hex,index}) => {
  const [alert,setAlert]= useState(false)
  const bcg= rgb.join(',')

  useEffect(()=>{
    const timeo= setTimeout(()=>{
      setAlert(false)
    },5000)
    return () => clearTimeout(timeo)
  },[alert])
  
  return (
    <article className={`"color" ${(index>10)?'color-light':null}`} 
      style={{backgroundColor:`rgb(${bcg})`}}
      onClick={()=>{
        setAlert(true)
        navigator.clipboard.writeText("#"+hex)
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className={`"color-value"`}>{`#${hex}`}</p>
      { 
        alert && 
        <p className="alert">
          Copied to clipboard 
        </p>
      }
    </article>

  )
}

export default SingleColor
