import { ReactNode } from "react";

type Props = { children: ReactNode; modal: ReactNode };

export default function Layout({ children, modal }: Props) {
  return (
    <div className="">
      {children}
      {modal}
    </div>
  );
}

// 주소가 '/'일 때는 children->page.tsx, modal->@modal/default.tsx
// 주소가 '/i/flow/login' 때는 chldren->i/flow/login/page.tsx, modal->@modal/i/flow/login/page.tsx
