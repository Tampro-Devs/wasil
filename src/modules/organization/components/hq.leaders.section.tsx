import { Link } from "react-router-dom";
import {
  LoadingTableBody,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableWrapper,
} from "../../../shared/components/table";
import { ROUTE_PATHS } from "../../router/route.paths";
import { LuEye, LuPen, LuTrash } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import { apiQueryKeys } from "../../../api.service.config/query.config/query.keys";
import { LeaderServices } from "../services/leader.services";
import { LEADERSHIP_CATEGORY } from "../types/leadership.type";
import { getFullName } from "../../../utils/globals";

export default function HQLeadersSection() {
  const { data: apiResponse, isLoading } = useQuery({
    queryKey: apiQueryKeys.leaders,
    queryFn: () => LeaderServices.getLeaders("list", LEADERSHIP_CATEGORY.HQ),
    staleTime: 0,
    refetchOnMount: "always",
  });

  return (
    <TableWrapper
      className="flex flex-col"
      error={
        apiResponse?.message && (apiResponse.data?.length ?? 0) === 0
          ? {
              title: "No Leaders",
              message: apiResponse.message,
            }
          : undefined
      }
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>S/N</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Contacts</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <LoadingTableBody columns={5} />
          ) : (
            apiResponse?.data?.map((leader, index) => {
              const fullName = getFullName({
                first_name: leader.member.first_name,
                middle_name: leader.member.middle_name,
                last_name: leader.member.last_name,
              });
              return (
                <TableRow key={index} className="text-xs">
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{fullName}</TableCell>
                  <TableCell>{leader.leadership.title}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{leader.member.email}</span>
                      <span>{leader.member.phone}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-3">
                      <Link
                        to={ROUTE_PATHS.membership.members.preview(
                          leader.member.member_id,
                        )}
                      >
                        <LuEye
                          size={15}
                          className="text-slate-400 cursor-pointer"
                        />
                      </Link>
                      <LuPen
                        size={15}
                        className="text-green-400 cursor-pointer"
                      />
                      <LuTrash
                        size={15}
                        className="text-red-400 cursor-pointer"
                      />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
