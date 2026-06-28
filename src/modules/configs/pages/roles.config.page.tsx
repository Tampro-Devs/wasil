import { Eye, Pen, Plus, Trash } from "lucide-react";
import {
  AppContentContainer,
  AppContentBody,
  AppContentHeader,
} from "../../../shared/components/app.content.container";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableWrapper,
} from "../../../shared/components/table";
import { setPageHeader } from "../../../utils/general_hooks";
import AppButton from "../../../shared/components/app.button";

export default function RolesConfigPage() {
  setPageHeader("System Roles");
  return (
    <AppContentContainer>
      <AppContentHeader
        title="Manage Roles"
        actions={
          <AppButton size="xs" variant="secondary" onClick={() => {}}>
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
                <TableHead>Name</TableHead>
                <TableHead>Users</TableHead>
                <TableHead>Permissions</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>Super Admin</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>100</TableCell>
                  <TableCell>
                    <div className="flex gap-3">
                      <Eye
                        size={20}
                        className="text-slate-400 cursor-pointer"
                      />
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
