import { Eye, Pen, Plus, Trash } from "lucide-react";
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
            <Plus />
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
                  <TableCell>{branch.leader.member.name}</TableCell>
                  <TableCell>{branch.members}</TableCell>
                  <TableCell>
                    <div className="flex gap-3">
                      <Link
                        to={ROUTE_PATHS.organisation.branches.preview(
                          branch.branchId,
                        )}
                      >
                        <Eye
                          size={20}
                          className="text-slate-400 cursor-pointer"
                        />
                      </Link>
                      <Pen
                        size={20}
                        className="text-green-400 cursor-pointer"
                      />
                      <Trash
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
