import React from 'react'
import { useSelector } from 'react-redux'

const UserData = ({close}) => {
     const data = useSelector((state) => state.contacts.user)

  return (
    <>
      <div className='fixed top-1/2 left-1/2 call p-10 bg-white z-50 w-1/2 rounded-xl shadow-lg '>
        <p className='text-2xl font-semibold heading-color  mb-5'>Congratulations, <span className='blue-color font-semibold text-3xl'> {data.name}</span></p>
        <span></span>
        <p className='text-lg mb-6 text-neutral-600'> We are succesfully recieve your quiry request. You are eligible for the our equiry. We will inform you at <span className='font-bold blue-color text-lg'>{data.email}</span></p>

<div className='flex justify-end'>
<button className='red-bg text-white py-2 w-20 rounded-lg' onClick={close}>Okay</button>
</div>
       
    

      </div>
    </>
  )
}

export default UserData
