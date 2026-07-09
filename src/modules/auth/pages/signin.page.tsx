import { FiUser } from "react-icons/fi";
import SignInForm from "../components/signin.form";

export default function SignInPage() {
  return (
    <>
      <div className="flex flex-col items-center text-center mb-10">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf0fb]">
          <FiUser className="h-7 w-7 text-[#16224f]" />
        </div>
        <h2 className="mt-5 text-3xl text-[#16224f]">Sign In</h2>
        <p className="mt-1 text-sm text-gray-500">
          Enter your credentials to continue
        </p>
      </div>
      <SignInForm />
    </>
  );
}
