import React from 'react'

export const Button = ({ title = 'Hello', callback = () => null }) => {
    return (
        <button onClick={callback} className='text-white bg-blue-300 hover:bg-blue-600 rounded-lg py-1 px-5 font-medium duration-300 cursor-pointer'> {title}</button>
    )
}

