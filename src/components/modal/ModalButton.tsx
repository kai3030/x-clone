import React from 'react'

type Props = {
    children: string,
}

function ModalButton({ children}: Props) {
  return (
    <div className="py-6 px-20">
        <button className="w-full h-11 rounded-3xl text-white bg-gray-500 hover:bg-gray-700 cursor-pointer transition">
        {children}
        </button>
    </div>
  )
}

export default ModalButton