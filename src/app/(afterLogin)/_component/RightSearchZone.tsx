"use client";

import {usePathname} from "next/navigation";
import React from "react";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";

const radioSytle = "flex justify-between text-sm";

export default function RightSearchZone() {
  const pathname = usePathname()
  
  const onChangeFollow = () => {}
  const onChangeAll = () => {}

  if (pathname === '/explore') {
    return null;
  }
  if (pathname === '/search') {
    return (
      <div>
        <h5 className=" my-3 text-xl rounded-2xl p-[12px_16px] font-bold border border-gray-200">검색 필터</h5>
        <div className="my-3 rounded-2xl border border-gray-200 p-[12px_16px]">
          <div>
            <label className="font-bold text-base">사용자</label>
            <div className={`mt-2 ${radioSytle}`}>
              <div>모든 사용자</div>
              <input type="radio" name="pf" defaultChecked onChange={onChangeAll} />
            </div>
            <div className={radioSytle}>
              <div>내가 팔로우하는 사람들</div>
              <input type="radio" name="pf" value="on" onChange={onChangeFollow} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ marginBottom: 60, width: 'inherit' }}>
      <SearchForm fixed={true}/>
    </div>
  )
}