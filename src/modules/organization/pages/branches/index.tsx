import { AppIconButton } from "../../../../shared/components/app.button";
import {
  AppContentContainer,
  AppContentBody,
  AppContentHeader,
} from "../../../../shared/components/app.content.container";
import {
  LoadingTableBody,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableWrapper,
} from "../../../../shared/components/table";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../router/route.paths";
import { setPageHeader } from "../../../../utils/general_hooks";
import { LuEye, LuPen, LuPlus } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import { apiQueryKeys } from "../../../../api.service.config/query.config/query.keys";
import BranchServices from "../../services/branch.services";

export default function BranchMainPage() {
  const navigate = useNavigate();
  setPageHeader("Branches");

  const { data: apiResponse, isLoading } = useQuery({
    queryKey: apiQueryKeys.branches,
    queryFn: BranchServices.getBranches,
  });

  return (
    <AppContentContainer>
      <AppContentHeader
        title="Manage Branches"
        actions={
          <AppIconButton
            Icon={LuPlus}
            onClick={() => {
              navigate(ROUTE_PATHS.organisation.branches.onboard);
            }}
          />
        }
      />
      <AppContentBody>
        <TableWrapper
          error={
            apiResponse?.message && (apiResponse.data?.length ?? 0) === 0
              ? {
                  title: "No Branches",
                  message: apiResponse.message,
                }
              : undefined
          }
        >
          <TableCaption>
            <span className="font-bold me-1">Total:</span>
            <span className="text-xs">{apiResponse?.data?.length}</span>
          </TableCaption>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Branch Name</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>Amir</TableHead>
                <TableHead>Members</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <LoadingTableBody columns={5} />
              ) : (
                apiResponse?.data?.map((branch, index) => (
                  <TableRow key={index}>
                    <TableCell>{branch.name}</TableCell>
                    <TableCell>{branch.location.name}</TableCell>
                    <TableCell>{branch.leader?.full_name}</TableCell>
                    <TableCell>{branch.total_members}</TableCell>
                    <TableCell>
                      <div className="flex gap-3">
                        <Link
                          to={ROUTE_PATHS.organisation.branches.preview(
                            branch.branch_id,
                          )}
                        >
                          <LuEye
                            size={20}
                            className="text-slate-400 cursor-pointer"
                          />
                        </Link>
                        <LuPen
                          size={20}
                          className="text-green-400 cursor-pointer"
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableWrapper>
      </AppContentBody>
    </AppContentContainer>
  );
}
