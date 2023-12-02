import React, {useState,useEffect} from 'react'
import Button from '../../button'



export default function Congrat() {
    return (
        <main className="font-DMsans text-black">
            <div className='lg:m-[4rem] pt-[3rem] bg-[#F7F2FF] h-[75vh]'>
                <div className='lg:w-[70%] sm:w-[80%] md:w-[37.5rem] w-full mx-auto p-[2rem]'>
                    <h1 className='flex item-center justify-center text-[36px]'>Congratulations!</h1>
                    <p className='flex item-center justify-center text-center text-[24px] pt-[2rem]'>Your documents have been processed and your state code is ready.
                        You can now Login to view your profile.</p>

                        <Button
                type="submit"
                // disabled={loading}
                classNames={`bg-purple hover:bg-[#7C43D9] text-[1rem] leading-9 lg:text-[1.5rem] mt-[3rem] font-medium text-white w-full`}
              >
                <a href="/">Login</a>

              </Button>
                    <div>
                       
                    </div>
                </div>
            </div>
        </main>
    )
}
