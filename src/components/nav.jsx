import React, { useEffect } from 'react'

function Nav() {
     useEffect(()=>{
          document.querySelector('#menubtn').addEventListener('click', ()=>{
               document.querySelector('#link').style.height = '25vh';
               document.querySelector('#menubtn').style.display = 'none';
               document.querySelector('#closemenu').style.display = 'block';document.getElementById("link").style.transition = "all 1s";
          })
          document.querySelector('#closemenu').addEventListener('click', ()=>{
               document.querySelector('#link').style.height = '0vh';
               document.getElementById("link").style.transition = "all ease/ 0.5s";
               document.querySelector('#menubtn').style.display = 'block';
               document.querySelector('#closemenu').style.display = 'none';
          })
          
     })
  return (
    <div className=' w-full min-h-40 pt-6 bg_nav flex flex-col items-center justify-center text-zinc-800'>
     <span className='flex flex-col w-full items-center sm:px-10 sm:flex sm:flex-row sm:justify-between'>
     <span>
     <h1 className='text-3xl font-semibold uppercase'>expertsalution</h1>
     <h2 className='font-medium text-xl mb-5'>LED REPAIRING EXPERT</h2>
     </span>
     <span>
     <a href="tel:+918421119417" className='flex flex-col'> <span className='flex items-center'><span className="material-symbols-outlined">call</span>+91-8421119417</span> <span>Call us for more details</span></a>
     </span>
     </span>
     <div className="navdiv">
     <button><i class="ri-menu-line menubtn" id='menubtn'></i><i class="ri-close-fill menubtn hidden" id='closemenu'></i></button>
     <div class="link" id='link'>
          <ul>
               <li><a href="/">Home</a></li>
               <li><a href="#aboutus">About Us</a></li>
               <li><a href="#whyus">Why Us</a></li>
               <li><a href="#services">Services</a></li>
               <li><a href="#contactus">Contact Us</a></li>
          </ul>
     </div>
    </div>
    </div>
  )
}

export default Nav