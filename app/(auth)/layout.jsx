import React from 'react'

const layout = ({ children}) => {
  return (
    <div className='bg-black w-full h-screen flex justify-center items-center'>
        {children}
    </div>
  )
}

export default layout