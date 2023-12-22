import React, { useRef, useState } from 'react'

const InputComponent = ({ 
    label,
    classNames,
    id,
    type,
    isVisibility, 
    // required,
    placeholder, 
    onChange,
    error 
    }) => {
      const [isPasswordVisible, setIsPasswordVisible] = useState(false)
      const show = useRef(null)

      const inputType = isPasswordVisible ? 'text' : type || 'text'

      const handlePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible)
  return (
    <div>
      <label className='block pb-2'>
        <span className='block font-medium text-[18px]'>{label}</span>
        <div className='flex items-center relative'>
          <input 
        // required ={required}
            id={id}
            ref={show}
            type={inputType} 
            placeholder={placeholder} 
            onChange={onChange} 
            className={`mt-1 block w-full px-3 py-2 bg-white outline outline-none
                          border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        ${classNames}`} 
            />
            {
              isVisibility && type === 'password' && 
              <span className="material-symbols-outlined absolute right-0 pr-3 cursor-pointer" onClick={handlePasswordVisibility}>
                {isPasswordVisible ? 'visibility' : 'visibility_off'}
              </span>
            }
        </div>
        {error && <span>{error}</span>}
      </label>
    </div>
  )
}

export default InputComponent
