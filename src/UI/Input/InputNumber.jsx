import React from 'react'
import cl from './Input.module.css'


export const InputNumber = ({value, onChangeAmount}) => {
  return (
    <input onChange={onChangeAmount} type="number" className={cl.Input} value={value}/>
  )
}
