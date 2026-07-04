import AppButton from "../../../../shared/components/app.button";
import {
  AppContentContainer,
  AppContentBody,
  AppContentHeader,
} from "../../../../shared/components/app.content.container";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableWrapper,
} from "../../../../shared/components/table";
import { branchDummies } from "../../types/branch.type";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../router/route.paths";
import { setPageHeader } from "../../../../utils/general_hooks";
import { LuEye, LuPen, LuPlus, LuTrash } from "react-icons/lu";

export default function BranchMainPage() {
  const navigate = useNavigate();

  setPageHeader("Branches");

  return (
    <AppContentContainer>
      <AppContentHeader
        title="Manage Branches"
        actions={
          <AppButton
            size="xs"
            variant="secondary"
            onClick={() => {
              navigate(ROUTE_PATHS.organisation.branches.onboard);
            }}
          >
            <LuPlus />
          </AppButton>
        }
      />
      <AppContentBody>
        <TableWrapper>
          <TableCaption>
            <span className="font-bold me-1">Total:</span>
            <span className="text-xs">3</span>
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
              {branchDummies.map((branch, index) => (
                <TableRow key={index}>
                  <TableCell>{branch.name}</TableCell>
                  <TableCell>{branch.location.name}</TableCell>
                  <TableCell>{branch.leader?.member.name}</TableCell>
                  <TableCell>{branch.members}</TableCell>
                  <TableCell>
                    <div className="flex gap-3">
                      <Link
                        to={ROUTE_PATHS.organisation.branches.preview(
                          branch.branchId,
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
                      <LuTrash
                        size={20}
                        className="text-red-400 cursor-pointer"
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableWrapper>
      </AppContentBody>
    </AppContentContainer>
  );
}
