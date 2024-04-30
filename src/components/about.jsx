import React from 'react'

function About() {
  return (
    <div id='aboutus' className='px-5 py-10 flex flex-col sm:flex sm:flex-row sm:items-center'>
      <div className='sm:w-1/2'>
      <h1 className='text-4xl font-semibold mb-10 '># About <span className='text-red-500'>Us</span></h1>
     <h1 className='text-2xl font-semibold uppercase'>WELCOME TO ledtvexpert</h1>
     <p className='flex flex-col gap-5 text-zinc-600 mt-3 font-normal'>
          <span className='text-lg font-light'>Are you trying to find a professional who can fix your LED TV the best way possible? If so, you've found the proper site.</span>
          <span>Our goal is to offer you the most dependable, long-lasting repair service possible at a reasonable cost. Our devoted and knowledgeable specialists are skilled at handling any issue with comfort and simplicity.</span>
          <span>Our service centre is known for its cutting-edge technology and top-notch customer care. With more than ten years of expertise in the TV repair industry, our engineers are highly skilled and able to fix your televisions effectively and affordably. Our experts also receive the greatest level of training, allowing us to provide you with a repair service of the highest calibre. from the moment you call until now</span>
     </p>
      </div>
          <div className='mt-7 sm:w-1/2'>
          <img className='sm:w-full' src="https://goldmineledservices.com/images/about/5.png" />
          </div>
    </div>
  )
}

export default About