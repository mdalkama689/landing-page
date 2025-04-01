import Image from 'next/image'
import React from 'react'

function Main() {
  return (
   <div className='flex w-full'>
    <div>
    </div>
    <Image src='https://teambuilding-ksa.com/wp-content/uploads/2024/11/dddd-1-1-1024x495.jpg'
    alt='sheikh-img'
    height={100}
    width={100}
      className='flex-1 object-cover'
      unoptimized
   />
 <Image src='https://teambuilding-ksa.com/wp-content/uploads/2024/11/dddd-1-1-1024x495.jpg'
    alt='sheikh-img'
    height={100}
    width={100}
    unoptimized
      className='flex-1 object-cover'
    />
   </div>
  )
}

export default Main