import React from 'react'

type Props = {
    children: string,
    id: React.ReactNode,
    password: React.ReactNode
}

function ModalButton({ children, id, password }: Props) {
  return (
    <div className="py-6 px-20">
        <button className="w-full h-11 rounded-3xl text-white bg-gray-500 hover:bg-gray-700 cursor-pointer transition" disabled={!id && !password}>
        {children}
        </button>
    </div>
  )
}

export default ModalButton