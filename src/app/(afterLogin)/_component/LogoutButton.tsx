"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const { data: me } = useSession();

  const onLogout = () => {
    signOut({ redirect: false })
      .then(() => {
        router.replace("/");
      });
  };

  if (!me?.user) null;

  return (
    <button
      className="w-[258px] h-[66px] p-[12px] flex my-[12px] cursor-pointer border-none items-center bg-white text-left hover:bg-[rgba(15,20,25,0.1)] hover:rounded-[33px]"
      onClick={onLogout}
    >
      <div className="flex items-center">
        <img src={me?.user?.image!} alt={me?.user?.id} className="w-[40px] rounded-full" />
      </div>
      <div className="ml-[12px]">
        <div className="font-bold">{me?.user?.name}</div>
        <div>@{me?.user?.email}</div>
      </div>
    </button>
  );
}
