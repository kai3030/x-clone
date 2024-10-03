"use client";

import Trend from "@/app/(afterLogin)/_component/Trend";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function TrendSection() {
  const pathname = usePathname();
  const { data } = useSession();

  if (pathname === "/explore") return null;

  if (data?.user) {
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
    );
  }

  return (
    <div className=" bg-[rgb(247, 249, 249)] rounded-2xl mt-3">
      <div className=" text-base p-[12px_0]">
        트렌드를 가져올 수 없습니다.
      </div>
    </div>
  );
}
