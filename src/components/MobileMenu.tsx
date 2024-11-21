'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

const MobileMenu = () => {
    const [isShow,setIsShow] = useState(false)

    const toggleMenu = ()=>{
        setIsShow(!isShow)
    }
  return (
    <div className="lg:hidden">
    <Button onClick={toggleMenu} variant="ghost">
      {
        isShow ? <IoClose size={30}  /> :
        <GiHamburgerMenu size={30} />

      }
    </Button>
  </div>
  )
}

export default MobileMenu