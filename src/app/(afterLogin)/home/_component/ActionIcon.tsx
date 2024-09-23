// 이 방식은 안됨 -> classnames 라이브러리 사용할 것

// import React, { ReactNode } from 'react'

// type Props = {
//     children: ReactNode,
//     fill: 'comment' | 'repost' | 'heart',
// }

// const ActionIcon = ({ children, fill }: Props) => {

//     const getColor = () => {
//         switch (fill) {
//             case 'comment':
//                 return 'pink';
//             case 'repost':
//                 return 'blue';
//             case 'heart':
//                 return 'green';
//         }
//     }

//     const color = getColor();

//   return (
//     <div className="flex items-center group transition">
//         <button className={`bg-transparent group-hover:bg-${color}-100 rounded-full flex items-center justify-center w-[38px] h-[38px] transition mr-1`}>
//           <svg width={24} viewBox="0 0 24 24" aria-hidden="true" className={`fill-slate-500 transition group-hover:fill-${color}-500`}>
//             {children}
//           </svg>
//         </button>
//         <div className={`text-base text-slate-500  group-hover:text-${color}-500`}>{1 || ''}</div>
//       </div>
//   )
// }

// export default ActionIcon