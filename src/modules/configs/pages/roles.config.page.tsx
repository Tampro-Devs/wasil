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
import { LuEye, LuPen, LuPlus, LuTrash } from "react-icons/lu";

export default function RolesConfigPage() {
  setPageHeader("System Roles");
  return (
    <AppContentContainer>
      <AppContentHeader
        title="Manage Roles"
        actions={
          <AppButton size="xs" variant="secondary" onClick={() => {}}>
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
                      <LuEye
                        size={20}
                        className="text-slate-400 cursor-pointer"
                      />
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
