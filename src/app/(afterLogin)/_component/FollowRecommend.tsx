"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function FollowRecommend() {
  const { data } = useSession();
  const router = useRouter();

  const onFollow = () => {
    if(!data?.user) {
      router.replace("/i/flow/login");
    }
  };

  const user = {
    id: "elonmusk",
    nickname: "Elon Musk",
    image: "/yRsRRjGO.jpg",
  };

  return (
    <div className="p-[12px_0] h-[66px] flex">
      <div className="w-10 mr-3">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={user.image} alt={user.id} />
        </div>
      </div>
      <div className="flex-1">
        <div className="text-base font-bold leading-5">{user.nickname}</div>
        <div className="text-slate-500 text-sm leading-4">
          @{user.id}
        </div>
      </div>
      <div className="w-[76px]">
        <button
          onClick={onFollow}
          className="w-full text-sm bg-[#000] text-white h-8 rounded-2xl hover:bg-[rgb(39,44,48)]"
        >
          팔로우
        </button>
      </div>
    </div>
  );
}
