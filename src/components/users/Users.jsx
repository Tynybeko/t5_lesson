import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import Loading from '../Loading'
import { Button } from '../Button'

export default function Users() {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [zero, setZero] = useState(400)
    const fetchData = () => {
        setLoading(true)
        setError('')
        const response = fetch(`https://67ab161165ab088ea7e899b5.mockapi.io/api/v1/users`)
        response
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                return Promise.reject(response.json())
            })
            .then(data => {
                setUsers(data)
            })
            .catch(e => {
                setError('Ошибка при получении данных!')
            })
            .finally(() => {
                setLoading(false)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section className='flex flex-col gap-5'>
            <div className={`translate-x-[${zero}px] duration-300 h-screen fixed w-[400px] bg-black/80 right-0`}>

            </div>

            <div className='shadow-sm flex shadow-green-500 py-3 px-5'>
                <Button callback={() => {
                    setZero(prev => !prev ? 400 : 0)
                }} title='Добавить' />
            </div>
            <div className='flex w-full p-5 shadow-sm flex-wrap gap-4'>
                {
                    users && users.map((el, index) => (
                        <UserCard key={el.id} index={index + 1} user={el} />
                    ))
                }
                {
                    loading && <Loading />
                }
                {
                    error && <p className='text-red-500 w-full font-bold text-center text-2xl'>{error}</p>
                }
                {
                    users && users.length == 0 && <p className='text-blue-500 w-full font-bold text-center text-2xl'>... Пока нету данных</p>
                }
            </div>
        </section>

    )
}
