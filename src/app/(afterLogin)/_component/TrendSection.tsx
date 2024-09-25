"use client";

import Trend from "@/app/(afterLogin)/_component/Trend";
import { usePathname } from "next/navigation";
export default function TrendSection() {
  const pathname = usePathname();

  if(pathname === "/explore") return null;

  return (
    <div className=" bg-[rgb(247, 249, 249)] rounded-2xl mt-3">
      <div className=" text-xl font-bold p-[12px_0]">
        <h3 className="mb-3 p-[0_16px]">나를 위한 트렌드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  )
}