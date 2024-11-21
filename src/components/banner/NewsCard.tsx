import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { NewsCardProps } from '@/app/types/news'

const NewsCard = ({item}:NewsCardProps) => {
  return (
    <div className='p-4 border rounded-md  shadow-md space-y-4'>
         <Link href={`/news/${item?._id}`}>
         <Image className='hover:scale-105 transition-all ease-in-out duration-300' width={500} height={500}  src={item?.imageUrl} alt='image' />
         </Link>
         <h2 className='font-semibold'>{item?.title}</h2>
        <p className='py-3' >{item?.description.slice(0,105)}...</p>
        <Link href={`/news/${item?._id}`}>
        <Button variant={'default'}>Read more</Button>
        </Link>
    </div>
  )
}

export default NewsCard