import React from 'react'
// import Logo from '../../assets/'

export default function Onboarding() {
  return (
    <main className='bg-cats'>
        <div className='flex flex-col justify-center items-center h-[100vh]'>
            <img src='https://res.cloudinary.com/mindset/image/upload/v1701523698/logo_ttcvzp.png' alt="" className='my-8'/>
            <h1 className='text-center'>Revolutionizing governance through Innovative and <br /> transparent digital solutions</h1>

            <div className='mt-8 flex flex-col border w-[500px] justify-center text-center items-center h-[200px] shadow-lg shadow-[#FAFAFA]-500/50 rounded-lg'>
                <p>User Dashboard</p>
                <button className='bg-[#EBAC0A] text-white p-3 rounded-lg text-[20px] mt-10'>View Project</button>

            </div>

            <div className='mt-10 flex flex-col border w-[500px] justify-center text-center items-center h-[200px] shadow-lg shadow-[#FAFAFA]-500/100 rounded-lg'>
                <p>Government Dashboard</p>
                <button className='bg-[#EBAC0A] text-white p-3 rounded-lg text-[20px] mt-10'>View Project</button>

            </div>
        </div>
    </main>
  )
}
