import NextAuth from "next-auth" //사용자 인증을 처리하는 함수를 불러옴
import CredentialsProvider from "next-auth/providers/credentials"; //사용자 이름, 비밀번호 같은 자격증명을 사용한 인증을 처리하는 공급자를 불러옴(인증 방식)
import {NextResponse} from "next/server"; //서버 층 응답을 미들웨어에서 처리하는 객체

// NextAuth 반환 값에서 { handlers, auth, singIn } 함수를 추출한 것
export const {
  handlers: { GET, POST }, //인증 관련 api 요청 핸들러
  auth, //인증과 관련된 다양한 기능을 제공한는 객체
  signIn, //클라이언트 측에서 사용자가 로그인할 때 사용되는 함수
} = NextAuth({ //NextAuth의 설정을 정의함
  pages: {
    signIn: '/i/flow/login', // 로그인 창
    newUser: '/i/flow/signup', // 회원가입 창
  },
  providers: [ //인증 제공자들을 설정한는 배열
    CredentialsProvider({
      //authorize: 실제로 자격 증명을 검증하는 핵심 콜백 함수
      //로그인시 사용자가 입력한 자격 증명(이름,비번)을 받아 인증 서버로 전달하여 유효한지 검증 
      async authorize(credentials/** 로그인 form에서 전달받은 자격 증명 */) {
        const authResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: credentials.username,
            password: credentials.password,
          }),
        })

        if (!authResponse.ok) {
          return null
        }

        const user = await authResponse.json()
        console.log('user', user);

        //return값이 세션 정보가 된다
        return {
          email: user.id,
          name: user.nickname,
          image: user.image,
          ...user,
        }
      },
    }),
  ]
});

// [전체 흐름 정리]
// 1. 사용자가 로그인 폼에 사용자 이름과 비밀번호를 입력하면, 이 값이 credentials로 전달됩니다.
// 2. authorize 함수가 실행되며, 입력된 자격 증명을 서버로 보내서 검증합니다.
// 3. 서버에서 인증이 성공하면, 서버는 사용자 정보를 반환합니다.
// 4. NextAuth.js는 이 사용자 정보를 사용해 세션을 생성하고, 클라이언트 측에서 인증 상태를 관리할 수 있게 됩니다.

// 세션은 사용자가 여러 요청을 보내더라도 로그인 상태가 유지되도록 하는 기술입니다.
// 세션을 유지하는 데는 주로 쿠키와 JWT를 사용합니다.
// JWT 공부하기