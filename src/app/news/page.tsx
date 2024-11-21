import NewsList from '@/components/newscomponent/NewsList'
import React from 'react'

const Newspage = () => {
  return (
    <div className='py-12'>
        <h1 className='font-bold text-xl'>Latest News</h1>
       
       <NewsList/>
    </div>
  )
}

export default Newspage