import React from 'react'
import { Button } from './Button'
import Item from './Item'



const data = [
    {
        id: 1,
        title: 'Food',
        price: 120,
        description: 'Описание'
    },
    {
        id: 2,
        title: 'Ice Cream',
        price: 32,
        description: 'Описание'
    },
    {
        id: 3,
        title: 'Bread',
        price: 213,
        description: 'Описание'
    },
    {
        id: 4,
        title: 'Cola',
        price: 421,
        description: 'Описание'
    },
    {
        id: 51,
        title: 'fdg',
        price: 120,
        description: 'asdsadsadsaasdsadsadsad asdadasdsa '
    },
    {
        id: 125,
        title: 'Ice asdsa',
        price: 32,
        description: 'Описasdasdsad sa dsasa dsa sa dasd ание'
    },
    {
        id: 42,
        title: '12f',
        price: 213,
        description: 'Описание'
    },
    {
        id: 243,
        title: 'asfsaf',
        price: 421,
        description: 'Описание'
    },
]

export default function Products() {
    return (
        <div className='flex flex-col'>
            <div className='py-2 px-3 border-b-2 border-blue-300'>
                <h2 className='text-white '>Products</h2>
            </div>
            <div className='flex gap-2 w-full flex-wrap text-white'>
                {
                    data.map(item => (
                        <Item item={item} />
                    ))
                }
            </div>
        </div>
    )
}
