import React from 'react'

export const Button = ({varient , colorScheme,children}) => {
  return (
    <div className={`btn${colorScheme||"red"}${varient||"ghost"}`}>{children}</div>
  )
}
