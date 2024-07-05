import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div>
     <p> Home is here</p>
     <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default Home