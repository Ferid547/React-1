import React from 'react'

const INput = ({type,onChange,placeholder,children,className}) => {
  return (
    <div>
        <input type={type} onChange={onChange} placeholder={placeholder} className={className}/>
        <span>{children}</span>
    </div>
  )
}

export default INput;