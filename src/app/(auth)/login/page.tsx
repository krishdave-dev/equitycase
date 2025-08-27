import LoginPage from "@/pages/auth/login-page";
import { Metadata } from "next";


const Page = () => {
  return (
    <LoginPage/>
   
  );
};

export default Page;


export const metadata: Metadata = {
  title: "Sign In | Equity Case",
  description: "Smarter Trading Starts With Execution",
};
