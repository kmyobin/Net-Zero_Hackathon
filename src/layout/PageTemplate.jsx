import React from 'react'
import Header from './Header'

function PageTemplate({content}) {
  return (
    <div className='w-full h-screen flex justify-center flex-wrap'>
      <div className="relative flex h-full w-full max-w-xl flex-col justify-between overflow-hidden bg-[#ECEFF4]">
        <Header />
        <div className='h-screen flex justify-center items-center'>
          {content}
        </div>
      </div>
    </div>
  )
}

export default PageTemplate
