import React from 'react'

export default function Success() {
  return (
    <main className="font-DMsans text-black">
        <div className='lg:m-[4rem] pt-[3rem] bg-[#F7F2FF] h-[75vh]'>
            <div className='lg:w-[80%] sm:w-[80%] md:w-[37.5rem] w-full mx-auto p-[2rem]'>
                <h1 className='flex item-center justify-center text-[36px]'>Registration Successful</h1>
                <p className='flex item-center justify-center text-center text-[24px] pt-[2rem]'>A verification link has been sent to your email. Verify your email to create a profile.</p>
            </div>
        </div>
    </main>
  )
}
