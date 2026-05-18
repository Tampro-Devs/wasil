import { useParams } from "react-router-dom";
import { useFindBy } from "../../../shared/hooks/global.hooks";
import { membersDummies } from "../types/member.type";
import NotFound from "../../../shared/components/not-found";
import { setPageHeader } from "../../../utils/general_hooks";

export default function MemberPreviewPage() {
  const { memberId } = useParams();
  const member = useFindBy(membersDummies, "memberId", `${memberId}`);

  setPageHeader("Member Preview", "Back To Members");
  if (member != null) {
    return (
      <NotFound
        isContent={true}
        title="Member Not Found"
        message="Member you are trying to preview is not found, kindly confirm availability"
      />
    );
  }
  return <div>MemberPreviewPage</div>;
}
