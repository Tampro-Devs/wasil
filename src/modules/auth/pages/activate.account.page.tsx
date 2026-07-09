import { LiaUserLockSolid } from "react-icons/lia";
import AppSpinner from "../../../shared/components/loading.indicators";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import AuthServices from "../services/api.services";
import { triggerToast } from "../../../utils/globals";
import { ROUTE_PATHS } from "../../router/route.paths";
import { setToken } from "../services/reducers/auth.session.slice";
import { useDispatch } from "react-redux";

export default function ActivateAccountPage() {
  const { token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const activationMutation = useMutation({
    mutationFn: AuthServices.activateAccount,
    onSuccess: (response) => {
      const responseData = response.data;

      const responseCode = responseData.responseCode;
      const message = responseData.message;
      if (responseCode === 0) {
        dispatch(setToken(token));
        triggerToast(message, "success");
        navigate(ROUTE_PATHS.auth.passwordReset, { replace: true });
      } else {
        triggerToast(message, "error");
      }
    },
    onError: (error) => {
      triggerToast(error.message, "error");
    },
  });

  useEffect(() => {
    if (token != null) {
      void (async () => {
        await activationMutation.mutateAsync(token);
      })();
    }
  }, [token]);

  return (
    <>
      <div className="h-full flex flex-col items-center text-center mb-20">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf0fb]">
          <LiaUserLockSolid className="h-7 w-7 text-[#16224f]" />
        </div>
        <h2 className="mt-5 text-3xl text-[#16224f]">Activate Account</h2>
        <p className="mt-1 text-sm text-gray-500">
          Activating your account using the token provided
        </p>
        <div className="h-full flex flex-col justify-center items-center">
          <AppSpinner />
          <span className="text-xs">Activating....</span>
        </div>
      </div>
    </>
  );
}
