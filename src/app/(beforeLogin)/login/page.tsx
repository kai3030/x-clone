"use client";

import {useRouter} from "next/navigation";
import Home from "../page";

const Login = () => {
  const router = useRouter();
  router.replace('/i/flow/login');
  
  return <Home/>
};


export default Login;
