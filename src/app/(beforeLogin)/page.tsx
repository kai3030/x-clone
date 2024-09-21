import Image from "next/image";
import Link from "next/link";
import zLogo from "../../../public/zlogo.png";
import Button from "@/components/home/Button";

export default function Home() {
  return (
    <div className=" w-dvw h-dvh">
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex-1 flex justify-center ">
          <Image src={zLogo} alt="logo" />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="mb-6">지금 일어나고 있는 일</h1>
          <h2 className="mb-6">지급 가입하세요.</h2>
          <Link href="/i/flow/signup">
            <Button fill="blue">계정 만들기</Button>
          </Link>
          <h3>이미 트위터에 가입하셨나요?</h3>
          <Link href="/login">
            <Button fill="none">로그인</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
