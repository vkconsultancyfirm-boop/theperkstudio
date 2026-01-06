import React from 'react'

const Blog = () => {
  return (
    <div>
      <div className="mt-[100px] text-[32px] md:text-[48px] font-bold">
        Coming Soon with an <br className="hidden md:block"/> Extra 
        <span className="inline-flex flex-col overflow-hidden h-[45px] md:h-[60px] ml-3">
          <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
            <li className="text-[#F1C40F]">Perk-fection</li>
            <li className="text-[#1ABC9C]">Perk-sonality</li>
            <li className="text-[#3498DB]">Perk-spective</li>
            <li aria-hidden="true" className="text-[#F1C40F]">
              Perk-fection
            </li>
          </ul>
        </span>
      </div>
    </div>
  )
}

export default Blog