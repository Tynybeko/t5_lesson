import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import Loading from '../Loading'
import { Button } from '../Button'
import CreateUserPopap from './CreateUserPopap'

export default function Users() {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [createData, setCreateData] = useState({
        name: '',
        points: ''
    })

    const [open, setOpen] = useState(true)
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
            <CreateUserPopap
                isOpen={open}
                setClose={() => setOpen(true)}
                setLoading={setLoading}
                setUsers={setUsers}
            />
            <div className='shadow-sm flex shadow-green-500 py-3 px-5'>
                <Button callback={() => {
                    setOpen(prev => !prev)
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
