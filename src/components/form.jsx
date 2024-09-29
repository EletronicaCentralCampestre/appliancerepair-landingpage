import React from 'react'
import video from '../assets/video-home.mp4'
const Form = () => {
  return (
    <div className='flex justify-center py-[2rem]'>
        <div>
            <video width="320" height="240" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
            </video>    
        </div>
        <form className='bg-primary p-4 rounded-lg gap-2 max-w-[400px] '>
            <h1 className='text-white text-center w-full'>Agende agora</h1>
            <input type='text' placeholder='Nome' className='p-2 my-2 rounded-md' />
            <input type='text' placeholder='Endereço' className=' p-2 my-2 rounded-md' />
            <input type='select' placeholder='Data' className=' p-2 my-2 rounded-md' />
        </form>
    </div>
  )
}

export default Form