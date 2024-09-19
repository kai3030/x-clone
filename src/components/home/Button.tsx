import { ReactNode } from "react"

type Props = {
    children: ReactNode,
    fill: "blue" | "white" | "none"
}

const Button = ({ children, fill }: Props) => {
  return (
    <div 
        className={`transition flex justify-center items-center w-[300px] h-[40px] rounded-2xl px-4 font-bold
        ${fill === "white"
            ? "text-black bg-white hover:bg-slate-100"
            : fill === "blue"
            ? "text-white bg-blue-400  hover:bg-blue-500"
            : "text-blue-400 bg-blue-400 bg-opacity-0 border-blue-200 border-[0.1px] hover:bg-opacity-15"
        }`}
        >
        {children}
    </div>
  )
}

export default Button;