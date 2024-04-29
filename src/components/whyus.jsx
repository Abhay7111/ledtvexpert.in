import React from "react";

function Whyus() {
  return (
    <div id="whyus" className=" whyus w-full min-h-10 bg-white mt-10 px-5">
        <h1 className="text-3xl font-semibold w-full py-4 px-3 bg-white text-zinc-800">Why <span className="text-red-600">Choose Us?</span></h1>
      <div className="w-full h-auto bg-white py-20 flex flex-col gap-6 items-center text-zinc-100 sm:flex sm:flex-row sm:flex-wrap">
        <div className="w-96 min-h-10 mt-10 flex flex-col items-center ">
          <div className="icon size-12 border-zinc-400 rounded-full cursor-pointer transition-all flex items-center justify-center bg-[#2E375F]">
            <i class="ri-cash-line text-2xl font-light "></i>
          </div>
          <div className="title text-sm text-zinc-800 font-medium mt-7 uppercase">Low cost</div>
          <div className="des text-zinc-500 font-normal flex-wrap text-center px-8">We deliver our services on the most affordable pricing.</div>
        </div>
        <div className="w-96 min-h-10 mt-10 flex flex-col items-center ">
          <div className="icon size-12 border-zinc-400 rounded-full cursor-pointer transition-all flex items-center justify-center bg-[#2E375F]">
            <i class="ri-group-line text-2xl font-light "></i>
          </div>
          <div className="title text-sm text-zinc-800 font-medium mt-7 uppercase">BEST PROFESSIONAL</div>
          <div className="des text-zinc-500 font-normal flex-wrap text-center px-8">we mostly focus on customer satisfaction and high-quality services.</div>
        </div>
        <div className="w-96 min-h-10 mt-10 flex flex-col items-center ">
          <div className="icon size-12 border-zinc-400 rounded-full cursor-pointer transition-all flex items-center justify-center bg-[#2E375F]">
            <i class="ri-tools-line text-2xl font-light "></i>
          </div>
          <div className="title text-sm text-zinc-800 font-medium mt-7 uppercase">BEST MATERIAL</div>
          <div className="des text-zinc-500 font-normal flex-wrap text-center px-8">We used in our repairing purpose are 100% genuine parts.</div>
        </div>
        <div className="w-96 min-h-10 mt-10 flex flex-col items-center ">
          <div className="icon size-12 border-zinc-400 rounded-full cursor-pointer transition-all flex items-center justify-center bg-[#2E375F]">
            <i class="ri-computer-line text-2xl font-light "></i>
          </div>
          <div className="title text-sm text-zinc-800 font-medium mt-7 uppercase">BEST DIAGONOSTIC</div>
          <div className="des text-zinc-500 font-normal flex-wrap text-center px-8">We provide the best repairing services.</div>
        </div>
        <div className="w-96 min-h-10 mt-10 flex flex-col items-center ">
          <div className="icon size-12 border-zinc-400 rounded-full cursor-pointer transition-all flex items-center justify-center bg-[#2E375F]">
            <i class="ri-24-hours-line text-2xl font-light "></i>
          </div>
          <div className="title text-sm text-zinc-800 font-medium mt-7 uppercase">24/7 SERVICES</div>
          <div className="des text-zinc-500 font-normal flex-wrap text-center px-8">We can repair or replace your LED TV Panel in no time .</div>
        </div>
        <div className="w-96 min-h-10 mt-10 flex flex-col items-center ">
          <div className="icon size-12 border-zinc-400 rounded-full cursor-pointer transition-all flex items-center justify-center bg-[#2E375F]">
            <i class="ri-customer-service-line text-2xl font-light "></i>
          </div>
          <div className="title text-sm text-zinc-800 font-medium mt-7 uppercase">ONLINE SUPPORT</div>
          <div className="des text-zinc-500 font-normal flex-wrap text-center px-8">You can book your repairing services on call.</div>
        </div>
      </div>
    </div>
  );
}

export default Whyus;
