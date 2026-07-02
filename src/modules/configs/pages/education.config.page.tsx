import { Pen, Plus, Trash } from "lucide-react";
import AppButton from "../../../shared/components/app.button";
import {
  AppContentContainer,
  AppContentBody,
  AppContentHeader,
} from "../../../shared/components/app.content.container";
import { setPageHeader } from "../../../utils/general_hooks";
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
import { educationLevelsDummies } from "../types/education.type";
import { useMemo } from "react";
import { shuffle } from "../../../utils/globals";
import { useQuery } from "@tanstack/react-query";
import { apiQueryKeys } from "../../../api.service.config/query.config/query.keys";

export default function EducationConfigPage() {
  // const { data: educations, isLoading } = useQuery({
  //   queryKey: apiQueryKeys.educationLevels,
  //   queryFn: () => {},
  // });
  const educations = useMemo(() => shuffle(educationLevelsDummies), []);

  setPageHeader("Education");
  return (
    <AppContentContainer>
      <AppContentHeader
        title="Manage Education Levels"
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
                <TableHead>S/N</TableHead>
                <TableHead>Levels</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Proffessionalism</TableHead>
                <TableHead>Members</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {educations?.map((level, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{level.title}</TableCell>
                  <TableCell>
                    <span
                      className={`w-20 px-2 rounded-full ${level.category == "Sharia" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"}`}
                    >
                      {level.category}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`w-20 px-2 rounded-full font-bold ${level.isProffessional ? " text-cyan-500" : "text-mauve-500"}`}
                    >
                      {level.isProffessional
                        ? "Professional"
                        : "Non-Proffesional"}
                    </span>
                  </TableCell>
                  <TableCell>{level.members}</TableCell>
                  <TableCell>
                    <div className="flex gap-3">
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
