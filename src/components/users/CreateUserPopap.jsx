import React, { useState } from 'react'

export default function CreateUserPopap({ isOpen, setClose, setLoading, setUsers }) {
    const [createData, setCreateData] = useState({
        name: '',
        points: ''
    })

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setCreateData(prev => {
            return { ...prev, [name]: value }
        })
    }
    const handleSubmit = (e) => {
        if (
            Object.values(createData)
                .map(el => el.trim())
                .some(el => el.length == 0)
        ) return
        e.preventDefault()
        setLoading(true)
        fetch(`https://67ab161165ab088ea7e899b5.mockapi.io/api/v1/users`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createData)
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject('Error')
            })
            .then(data => {
                setUsers(prev => [...prev, data])
                setCreateData({
                    name: '',
                    points: ''
                })
                setClose()
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className={`${isOpen ? 'translate-x-[400px]' : 'translate-x-[0]'}  duration-300 h-screen fixed w-[400px] bg-black/80 right-0`}>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5 p-2 shadow-sm shadow-white'>
                <div className='bg-gray-300 p-1 rounded-lg'>
                    <p>Name</p>
                    <input name='name' value={createData.name} onChange={handleChange} type="text" className='border w-full rounded-lg pl-1' />
                </div>
                <div className='bg-gray-300 p-1 rounded-lg'>
                    <p>Points</p>
                    <input name='points' value={createData.points} onChange={handleChange} type="text" className='border w-full rounded-lg pl-1' />
                </div>
                <div className='bg-gray-300 rounded-lg'>
                    <input type='submit' className='border w-full cursor-pointer hover:bg-blue-200 duration-300 rounded-lg pl-1' />
                </div>
            </form>
        </div>
    )
}
