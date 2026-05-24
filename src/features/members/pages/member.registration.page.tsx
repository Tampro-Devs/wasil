import {
  AppContentBody,
  AppContentContainer,
} from "../../../shared/components/app.content.container";
import { setPageHeader } from "../../../utils/general_hooks";
import MemberRegistrationForm from "../components/forms/member.registration.form";

export default function MemberRegistrationPage() {
  setPageHeader("Register Member", "Back To Members");

  return (
    <AppContentContainer>
      <AppContentBody>
        <MemberRegistrationForm />
      </AppContentBody>
    </AppContentContainer>
  );
}
