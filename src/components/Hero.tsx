import Link from 'next/link';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


function Hero() {
  return (
    <div className=' px-5 py-5 flex justify-center items-center  '>
      <div className=" min-h-[50vh] w-[60%] flex flex-col justify-center items-center gap-5 ">
        <h1 className='text-5xl font-semibold text-center'>Discover, Compare, and Trust AI Agents With Eval.ai</h1>
        <p className='text-center text-md '>Streamline AI model selection through data-driven evaluations  <br /> and actionable br insights tailored to your niche.</p>
        <div className=" w-fit flex justify-center gap-5">
          <Link href='/categories'>
          <button className="bg-black text-white flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-gray-800 transition">
            Try Eval.ai
            <GoArrowUpRight />
          </button>
          </Link>
          <Link href='https://github.com/HamzaMemon-G/evala'>
          <button className="bg-white text-black  flex items-center gap-2 rounded-lg px-4 py-2">
            Start on Github
            <GoArrowUpRight />
          </button>
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Hero