import React from 'react'

const InputComponent = ({ 
    label,
    classNames,
    id,
    type, 
    // required,
    placeholder, 
    onChange,
    error 
    }) => {
  return (
    <div>
      <label className='block pb-2'>
        <span className='block font-medium text-[18px]'>{label}</span>
        <input 
      // required ={required}
          id={id}
          type={type} 
          placeholder={placeholder} 
          onChange={onChange} 
          className={`mt-1 block w-full px-3 py-2 bg-white 
                        border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      ${classNames}`} />
        {error && <span>{error}</span>}
      </label>
    </div>
  )
}

export default InputComponent
