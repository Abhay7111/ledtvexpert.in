import React from 'react'

function Cards({carddt}) {
  return (
    <div id='whcard' className=' bg-[#E4C59E] py-10 overflow-hidden rounded-xl cursor-pointer'>
     <div className="w-80 h-72 flex px-5 flex-col items-center relative">
       <div id='icon' className="icon size-12 border-zinc-400 rounded-full cursor-pointer transition-all flex items-center justify-center bg-[#2E375F]">
         <i>{carddt.icon}</i>
       </div>
       <h1 className="title text-lg text-zinc-800 font-medium mt-7 uppercase">{carddt.title}</h1>
       <div className="des text-zinc-600 mt-5 font-normal flex-wrap text-center px-8">{carddt.des}</div>
     </div>
     </div>
  )
}

export default Cards