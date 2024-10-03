"use client";

import style from './profile.module.css';
import Post from "@/app/(afterLogin)/_component/Post";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Profile() {
  const { data } = useSession();
  const router = useRouter();

  const user = {
    id: 'zerohch0',
    nickname: "Kai",
    image: '/5Udwvqim.jpg'
  };

  const onFollow = () => {
    if(!data?.user) {
      router.replace("/i/flow/login");
    }
  };

  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <img src={user.image} alt={user.id}/>
        </div>
        <div className={style.userName}>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        <button onClick={onFollow} className={style.followButton}>팔로우</button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  )
}