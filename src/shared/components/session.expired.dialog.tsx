import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import AppButton from "./app.button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../modules/auth/services/reducers/auth.session.slice";
import { ROUTE_PATHS } from "../../modules/router/route.paths";
import { PiFolderLock } from "react-icons/pi";

interface AppDialogProps {
  isOpened: boolean;
}
export default function SessionExpireDialog({ isOpened }: AppDialogProps) {
  var navigate = useNavigate();
  var dispatch = useDispatch();

  function handleOnClick() {
    dispatch(signOut());
    navigate(ROUTE_PATHS.auth.signIn);
  }

  return (
    <Dialog open={isOpened} onClose={(_value: boolean) => {}} className="z-50">
      <DialogBackdrop
        transition
        className="z-50 fixed inset-0 backdrop-blur-sm bg-opacity-25 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in"
      />
      <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative sm:w-fit sm:max-w-lg transform overflow-hidden rounded-xl text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in sm:my-8 data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-slate-50 p-2 w-60">
              <div className="flex flex-col gap-1 items-center justify-start mx-1 w-full">
                <div className="w-fit p-2 rounded-full bg-red-100 mb-3">
                  <PiFolderLock size={20} className="text-red-500" />
                </div>
                <div className="flex flex-col gap-1 items-center justify-start mb-3">
                  <span className="text-sm font-bold text-red-500">
                    Session Expired
                  </span>
                  <p className="text-xs text-center">
                    Your session is expired. You have to login again to continue
                  </p>
                </div>
                <AppButton
                  size="sm"
                  onClick={handleOnClick}
                  className="text-xs"
                >
                  Login again
                </AppButton>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
