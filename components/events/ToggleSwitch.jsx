import React, { useState, useEffect } from 'react'

const ToggleSwitch = ({ ageRestrictions, setAgeRestrictions, readOnly }) => {
  return (
    <div className='flex items-center border-blue-800 w-[72px] h-[24px] rounded-full bg-black text-gray-200 text-right select-none'
      onClick={() => (!readOnly && setAgeRestrictions) && setAgeRestrictions(!ageRestrictions)}>
      <div className='flex items-center'>
        <div className={'border-gray-200 rounded-full w-4 h-4 ml-1 transition duration-500'
          + (ageRestrictions ? " translate-x-[47px] bg-[#1EA313]" : " bg-[#D9D9D9]")} />
        <div className='flex justify-center items-center mb-[2px] pl-[2px]'>18+</div>
      </div>
    </div>
  )
}

export default ToggleSwitch