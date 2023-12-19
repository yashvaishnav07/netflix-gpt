import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-3/4 grid grid-cols-12'>
            <input type="text" placeholder='What whould you like to watch today?' className='p-4 m-4 col-span-10'/>
            <button className='m-4 py-2 px-4 bg-red-700 text-white rounded-md col-span-2'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar