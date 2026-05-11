import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/button";

interface NotFoundContentProps {
  isContent: boolean;
  title?: string;
  message?: string;
}
export default function NotFound({
  isContent,
  title = "Not Found",
  message = "Content could not be found kindly retry again later",
}: NotFoundContentProps) {
  return isContent ? (
    <ContentNotFound title={title} message={message} />
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
            <Button
              leftIcon={<MoveLeft />}
              className="mt-3"
              variant="primary"
              onClick={() => navigate(-1) || navigate("/")}
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentNotFound({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <div>
      {title}
      {message}
    </div>
  );
}
