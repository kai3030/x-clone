"use client";

import BackButton from "@/app/(afterLogin)/_component/BackButton";
import ModalInput from "@/components/modal/ModalInput";
import onSubmit from '../_lib/signup';
import { useFormState, useFormStatus } from 'react-dom';


const showMessage = (messasge: string | null | undefined) => {
  if (messasge === 'no_id') {
    return '아이디를 입력하세요.';
  }
  if (messasge === 'no_name') {
    return '닉네임을 입력하세요.';
  }
  if (messasge === 'no_password') {
    return '비밀번호를 입력하세요.';
  }
  if (messasge === 'no_image') {
    return '이미지를 업로드하세요.';
  }
  if (messasge === 'user_exists') {
    return '이미 사용 중인 아이디입니다.';
  }
  return '';
};

const Signup = () => {
  const [state, formAction] = useFormState(onSubmit, { message: null });
  const { pending } = useFormStatus();

  // style
  const inputClassName = "w-full h-full mt-3 text-base p-3 outline-none";

  return (
    <div className="w-dvw h-full flex justify-center absolute bg-black bg-opacity-40 top-0 left-0 right-0 bottom-0">
      <div className=" bg-white p-4 relative top-[5%] max-w-[80vw] min-w-[600px] rounded-2xl flex flex-col h-[550px]">
        
        <div className=" text-2xl font-bold">
          <BackButton/>
        </div>

        <form action={formAction} className="h-full flex flex-col justify-around" >
          <div className="flex-1 py-0 px-[80px]">
            <div className="text-2xl font-bold mb-8">계정을 생성하세요.</div>

            <ModalInput title="아이디" id="id">
              <input
                  id="id"
                  name="id"
                  className={inputClassName}
                  type="text"
                  placeholder=""
                  required
                />
            </ModalInput>
            <ModalInput title="네임" id="name">
              <input
                  id="name"
                  name="name"
                  className={inputClassName}
                  type="text"
                  placeholder=""
                  required
                />
            </ModalInput>
            <ModalInput title="비밀번호" id="password">
              <input
                  id="password"
                  name="password"
                  className={inputClassName}
                  type="password"
                  placeholder=""
                  required
                />
            </ModalInput>
            <ModalInput title="프로필" id="image">
              <input
                  id="image"
                  name="image"
                  className={inputClassName}
                  type="file"
                  accept="image/*"
                  required
                />
            </ModalInput>
          </div>
          <div className="py-6 px-20">
            <button disabled={pending} type="submit" className="w-full h-11 rounded-3xl text-white bg-gray-500 hover:bg-gray-700 cursor-pointer transition">
            가입하기
            </button>
            <div className="text-red-500 font-bold mt-2 text-sm text-center">{showMessage(state?.message)}</div>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;