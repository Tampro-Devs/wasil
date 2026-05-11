import SignInForm from "../components/signin.form";

export default function SignInPage() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="border border-gray-300/30 p-5 rounded-md w-[20rem] md:w-100 bg-gray-200">
          <div className="flex items-center gap-1">
            <div className="bg-white p-1 rounded-full">
              <img src="/images/logo.png" className="size-5" alt="" />
            </div>
            <span className="font-bold text-lg text-blue-950">Wasil</span>
          </div>
          <div className="my-5">
            <span className="text-2xl font-bold">Sign In</span>
          </div>

          <SignInForm />
        </div>
      </div>
    </div>
  );
}
