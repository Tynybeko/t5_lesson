import React from 'react'
import { Button } from './Button'

export default function Item({ item }) {
    const buy = () => {
        if (item.price > 200) {
            alert('Не достаточно средств')
        } else {
            alert(`Вы купили ${item.title} за ${item.price}`)
        }
    }




    return (
        <div className='flex-1 border border-gray-400 rounded-lg py-7 pl-2 '>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
            <Button title='Купить' callback={buy} />
        </div>
    )
}
