
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import ModalInput from "@/components/modal/ModalInput";
import { redirect } from "next/navigation";


const Signup = () => {
  const submit = async (FormData: FormData) => {
    "use server"

    // form 유효성 검사
    if(!FormData.get('id')) return { message: 'no_id' };
    if(!FormData.get('name')) return { message: 'no_name' };
    if(!FormData.get('password')) return { message: 'no_password' };
    if(!FormData.get('image')) return { message: 'no_image' };

    let shouldRedirect = false;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
        method: 'POST',
        body: FormData,
        credentials: 'include' // 로그인한 유저가 또 회원가입 하는 것을 방지하기 위함
      });

      console.log(response.status);

      // usr가 이미 존재하는 지 확인
      if(response.status === 403) return { message: 'user_exists' };

      console.log(await response.json());

      shouldRedirect = true;
    } catch (err) {
      console.error(err);
      return
    }

    if(shouldRedirect) redirect('/home');
  }

  const inputClassName = "w-full h-full mt-3 text-base p-3 outline-none"
  return (
    <div className="w-dvw h-full flex justify-center absolute bg-black bg-opacity-40 top-0 left-0 right-0 bottom-0">
      <div className=" bg-white p-4 relative top-[5%] max-w-[80vw] min-w-[600px] rounded-2xl flex flex-col h-[550px]">
        
        <div className=" text-2xl font-bold">
          <BackButton/>
        </div>

        <form action={submit} className="h-full flex flex-col justify-around" >
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
            <ModalInput title="닉네임" id="nickname">
              <input
                  id="nickname"
                  name="nickname"
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
            <button type="submit" className="w-full h-11 rounded-3xl text-white bg-gray-500 hover:bg-gray-700 cursor-pointer transition">
            가입하기
            </button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;