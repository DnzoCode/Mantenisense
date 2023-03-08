import React from 'react'

function infoEvent() {
  return (
    <div className='w-screen h-screen fixed flex justify-center items-center z-50'>
        <div className='flex bg-gradient-to-r from-gray-700 via-gray-900 to-black w-10/12 h-4/6 z-50'>
            <div className='flex flex-col w-1/2 justify-center items-center'>
                <input type="text" className='w-10/12 h-12 m-5' />
                <input type="text" className='w-1/2 h-12 m-5' />
                <input type="text" className='w-1/2 h-12 m-5' />
            </div>
            <div className='flex w-1/2'>
                SEGUNDA
            </div>  
        </div>
        
    </div>
  )
}

export default infoEvent