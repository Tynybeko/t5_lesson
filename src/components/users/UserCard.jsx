import React from 'react'

export default function UserCard({ user, index }) {
    return (
        <div className='shadow-sm p-2 flex flex-col gap-2 flex-[1_0_200px]'>
            <div className='flex justify-between'>
                <p>{index}</p>
                <h3>{user.name}</h3>
            </div>
            <p>{user.points}</p>
        </div>
    )
}
