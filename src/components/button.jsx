import React from 'react'

const Button = ({ type, children, classNames, disabled }) => {
  return (
    <div>
      <button 
        type={type} 
        disabled={disabled} 
        className={`
          mt-4 px-8 py-2 rounded-lg ${classNames}
        `}
        >
        {children}
      </button>
    </div>
  )
}

export default Button
