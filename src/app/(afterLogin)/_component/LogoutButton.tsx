"use client";

export default function LogoutButton() {
  const me = {
    // 임시로 내 정보 있는것처럼
    id: "kai3030",
    nickname: "카이",
    image: "/kai_profile.jpg",
  };

  const onLogout = () => {};

  return (
    <button
      className="w-[258px] h-[66px] p-[12px] flex my-[12px] cursor-pointer border-none items-center bg-white text-left hover:bg-[rgba(15,20,25,0.1)] hover:rounded-[33px]"
      onClick={onLogout}
    >
      <div className="flex items-center">
        <img src={me.image} alt={me.id} className="w-[40px] rounded-full" />
      </div>
      <div className="ml-[12px]">
        <div className="font-bold">{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
