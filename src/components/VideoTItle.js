import React from 'react'

const VideoTItle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black p-4 px-12 text-xl rounded-md hover:bg-opacity-50'>Play</button>
        <i className="fas fa-heart" />
        <button className='bg-gray-500 p-4 px-12 mx-2 text-xl bg-opacity-50 rounded-md'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTItle