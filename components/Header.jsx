import React from 'react'
import { MdEmail } from "react-icons/md";

export default function Header() {
  return (
    <div className="navbar bg-white fixed top-0 md:px-8 xl:px-16 h-[5rem]">
  <div className="flex-1">
    <img
        src='./logo.png'
        height={40}
        width={300}
    />
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
            <MdEmail size={23} color={'blue'} className="min-w-max"/>
        </div>
      </div>
    </div>
    <div className="flex font-semi-bold font-size-4">
        <h1 className="color-[#414042]">info@needlegaladvice.org</h1>
    </div>
  </div>
</div>
  )
}
