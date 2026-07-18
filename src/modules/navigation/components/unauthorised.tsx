import { LiaUserShieldSolid } from "react-icons/lia";
import { SlLock } from "react-icons/sl";
import AppButton from "../../../shared/components/app.button";
import { LuArrowLeft } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { ROUTE_PATHS } from "../../router/route.paths";
import { setPageHeader } from "../../../utils/general_hooks";

export default function Unauthorised() {
  const navigate = useNavigate();
  setPageHeader("");
  return (
    <div className="flex">
      <div className="flex-1">
        <img src="/images/403.png" className="h-full w-full" />
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-5">
          <div className="w-fit px-2 py-1 rounded-full border border-red-400 bg-red-50">
            <div className="flex gap-2 items-center text-red-500">
              <SlLock />
              <span className="text-xs font-bold">Access Denied</span>
            </div>
          </div>

          <span className="text-5xl font-bold">403</span>
          <span className="text-3xl font-bold">Unauthorised</span>
          <p className="text-xs">
            You don't have permission to access this page or perform this action
          </p>

          <div className="h-fit w-96 border border-gray-300 rounded-lg px-3 py-1 mb-10">
            <div className="flex gap-2 items-center">
              <div className="w-fit rounded-full bg-blue-600/20 p-1">
                <LiaUserShieldSolid size={30} className="text-blue-600" />
              </div>
              <span className="text-xs">
                If you believe this is a mistake, please contact your
                administrator for assistance.
              </span>
            </div>
          </div>

          <div className="flex gap-10">
            <AppButton
              variant="primary"
              size="xs"
              className="text-white font-bold px-3 rounded-sm mb-3"
              leftIcon={<LuArrowLeft size={15} />}
              onClick={() => navigate(-1) || navigate("/")}
            >
              Go Back
            </AppButton>
            <AppButton
              variant="outline"
              size="xs"
              className="text-blue-950 font-bold px-3 rounded-sm mb-3"
              leftIcon={<FiHome size={15} />}
              onClick={() => navigate(ROUTE_PATHS.dashboard.root)}
            >
              Go To Dashboard
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  );
}
