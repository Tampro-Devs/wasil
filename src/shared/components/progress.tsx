import { SpinnerDotted } from "spinners-react";

export function LoadingContent() {
  return (
    <div className="h-screen w-screen">
      <div className="h-full flex justify-center items-center">
        <SpinnerDotted />
      </div>
    </div>
  );
}
