import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableWrapper,
} from "../../../shared/components/table";
import { useFindBy } from "../../../shared/hooks/global.hooks";
import { leadersDummies, leadershipDummies } from "../types/leadership.type";
import { ROUTE_PATHS } from "../../router/route.paths";
import { LuEye, LuPen, LuTrash } from "react-icons/lu";

export default function HQLeadersSection() {
  const leaders = useFindBy(leadersDummies, "title", leadershipDummies[2]);
  const asistants = useFindBy(leadersDummies, "title", leadershipDummies[3]);

  const hqLeaders = [...leaders, ...asistants];
  return (
    <TableWrapper
      className="flex flex-col"
      //   error={{
      //     title: "No HQ Leaders Found",
      //     message: "Click Plus button to add them",
      //   }}
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
          {hqLeaders.map((leader, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{leader.full_name}</TableCell>
              <TableCell>{leader.title.name}</TableCell>
              <TableCell>
                <div className="flex flex-col text-sm">
                  <span>{leader.email}</span>
                  <span>{leader.phone}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-3">
                  <Link
                    to={ROUTE_PATHS.membership.members.preview(
                      leader.member_id,
                    )}
                  >
                    <LuEye
                      size={20}
                      className="text-slate-400 cursor-pointer"
                    />
                  </Link>
                  <LuPen size={20} className="text-green-400 cursor-pointer" />
                  <LuTrash size={20} className="text-red-400 cursor-pointer" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
