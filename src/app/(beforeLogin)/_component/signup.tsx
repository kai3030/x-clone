"use client";

import ModalButton from "@/components/modal/ModalButton";
import ModalInput from "@/components/modal/ModalInput";
import {useRouter} from "next/navigation";
import {ChangeEventHandler, FormEventHandler, useState} from "react";

const Signup = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [image, setImage] = useState('');
  const [imageFile, setImageFile] = useState<File>();

  const router = useRouter();
  const onClickClose = () => {
    router.back();
    // TODO: 뒤로가기가 /home이 아니면 /home으로 보내기
  }

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => { setId(e.target.value) };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => { setPassword(e.target.value) };
  const onChangeNickname: ChangeEventHandler<HTMLInputElement> = (e) => { setNickname(e.target.value) };
  const onChangeImageFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.target.files && setImageFile(e.target.files[0])
  };

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    fetch('http://localhost:9090/api/users', {
      method: 'post',
      body: JSON.stringify({
        id,
        nickname,
        image,
        password,
      }),
      credentials: 'include',
    }).then((response: Response) => {
      console.log(response.status);
      if (response.status === 200) {
        router.replace('/home');
      }
    }).catch((err) => {
      console.error(err);
    });
  }

  const inputClassName = "w-full h-full mt-3 text-base p-3 outline-none"
  return (
    <div className="w-dvw h-full flex justify-center absolute bg-black bg-opacity-40 top-0 left-0 right-0 bottom-0">
      <div className=" bg-white p-4 relative top-[5%] max-w-[80vw] min-w-[600px] rounded-2xl flex flex-col h-[550px]">
        
        <div className=" text-2xl font-bold">
          <button className="w-[34px] h-[34px] rounded-2xl left-[16px] top-[16px] flex items-center justify-center" onClick={onClickClose}>
            <svg
              width={24}
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
            >
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </button>
        </div>

        <form className="h-full flex flex-col justify-around" onSubmit={onSubmit} >
          <div className="flex-1 py-0 px-[80px]">
            <div className="text-2xl font-bold mb-8">계정을 생성하세요.</div>

            <ModalInput title="아이디" id="id">
              <input
                  id="id"
                  className={inputClassName}
                  value={id}
                  onChange={onChangeId}
                  type="text"
                  placeholder=""
                />
            </ModalInput>
            <ModalInput title="닉네임" id="nickname">
              <input
                  id="nickname"
                  className={inputClassName}
                  value={nickname}
                  onChange={onChangeNickname}
                  type="text"
                  placeholder=""
                />
            </ModalInput>
            <ModalInput title="비밀번호" id="password">
              <input
                  id="password"
                  className={inputClassName}
                  value={password}
                  onChange={onChangePassword}
                  type="password"
                  placeholder=""
                />
            </ModalInput>
            <ModalInput title="프로필" id="image">
              <input
                  id="image"
                  className={inputClassName}
                  onChange={onChangeImageFile}
                  type="file"
                  accept="image/*"
                />
            </ModalInput>
          </div>

          <ModalButton id={id} password={password}>가입하기</ModalButton>
        </form>
      </div>
    </div>
  );
}

export default Signup;