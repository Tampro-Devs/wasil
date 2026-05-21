import { Ban, MoveLeft, type LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type React from "react";
import { cn } from "../../utils/cn";
import AppButton from "./app.button";

interface NotFoundContentProps extends React.HTMLAttributes<HTMLDivElement> {
  isContent: boolean;
  title?: string;
  message?: string;
  Icon?: LucideIcon;
  Action?: React.ReactNode;
}

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  message?: string;
  Action?: React.ReactNode;
  Icon: LucideIcon;
}

export default function NotFound({
  isContent,
  title = "Not Found",
  message = "Content could not be found kindly retry again later",
  Icon,
  className,
  Action,
  ...props
}: NotFoundContentProps) {
  return isContent ? (
    <ContentNotFound
      title={title}
      message={message}
      Icon={Icon ?? Ban}
      className={className}
      Action={Action}
      {...props}
    />
  ) : (
    <PageNotFound title={title} message={message} />
  );
}

function PageNotFound({ title, message }: { title: string; message: string }) {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="relative h-full">
        <div className="absolute left-10 top-40 md:top-40 md:left-20 w-full opacity-5">
          <h1 className="md:text-[20rem] text-[12rem] font-stretch-150%">
            404
          </h1>
        </div>
        <div className="absolute right-0 top-40 md:top-40 md:right-0 opacity-30">
          <div className="size-20 md:size-50 bg-slate-500 rounded-full"></div>
        </div>
        <div className="absolute left-10 bottom-30 md:top-40 md:right-0 opacity-30">
          <div className="size-20 md:size-50 bg-slate-500 rounded-full"></div>
        </div>
        <div className="absolute bottom-70 md:bottom-80 left-9">
          <div className="flex flex-col font-stretch-150% text-slate-500">
            <h1 className="text-5xl md:text-9xl font-bold font-stretch-150%">
              Ooops
            </h1>
            <h1 className="text-xl md:text-3xl mt-5">{title}</h1>
            <h1 className="text-xs">{message}</h1>
            <AppButton
              leftIcon={<MoveLeft />}
              className="mt-3"
              variant="primary"
              onClick={() => navigate(-1) || navigate("/")}
            >
              Go Back
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentNotFound({
  title,
  message,
  Icon,
  className,
  Action,
  ...props
}: ContentProps) {
  return (
    <div
      className={cn(
        "bg-white/80 rounded-xl p-3 flex flex-col justify-center items-center",
        className,
      )}
      {...props}
    >
      <Icon className="text-slate-400 my-5" size={40} />
      <span className="text-slate-400 font-bold">{title}</span>
      <span className="text-slate-400 text-sm">{message}</span>
      {Action && Action}
    </div>
  );
}
