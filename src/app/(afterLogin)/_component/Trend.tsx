"use client";

import Link from "next/link";

export default function Trend() {
  return (
    <Link href={`/search?q=트렌드`} >
      <div className="p-[12px_16px] h-[82px] hover:bg-[rgba(0,0,0,0.03)]">
        <div className="text-[rgb(83,100,113)] text-[13px] leading-[16px] font-light">
          실시간트렌드
        </div>
        <div className="text-[15px] font-bold leading-[20px] mt-[2px] mb-[4px]">
          자바
        </div>
        <div className="text-[rgb(83,100,113)] text-[13px] leading-[16px] font-light">
          1,234 posts
        </div>
      </div>
    </Link>
  );
}
