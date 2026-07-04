import { Link, useNavigate } from "react-router-dom";
import AppButton, {
  AppSubmitButton,
} from "../../../shared/components/app.button";
import {
  AppContentBody,
  AppContentContainer,
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
import { districts, regions, streets, wards } from "../../configs/data";
import {
  defaultMemberFilterValues,
  memberFilterSchema,
  type MemberFilterFormValues,
} from "../schema/member.filter.schema";
import { membersDummies } from "../types/member.type";
import { ROUTE_PATHS } from "../../router/route.paths";
import { LuEye, LuPlus, LuTrash } from "react-icons/lu";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AppTextField } from "../../../shared/components/form/fields/app.text.field";
import { AppFormProvider } from "../../../shared/components/form";
import { AppSelectField } from "../../../shared/components/form/fields/app.select.field";

export default function MembersMainPage() {
  const navigate = useNavigate();

  const form = useForm<MemberFilterFormValues>({
    resolver: zodResolver(memberFilterSchema),
    defaultValues: defaultMemberFilterValues,
  });

  async function onSubmit(data: MemberFilterFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("FORM DATA::", data);
  }

  setPageHeader("Members");
  return (
    <AppContentContainer>
      <AppContentBody>
        <AppFormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mb-5 w-full">
            <div className="flex flex-col">
              <div className="flex-1">
                <AppTextField
                  control={form.control}
                  name="name"
                  placeholder="Member Name"
                />
              </div>
              <div className="grid grid-cols-2 md:flex gap-5">
                <div className="flex-1">
                  <AppSelectField
                    control={form.control}
                    name="region"
                    placeholder="Region"
                    options={regions}
                  />
                </div>
                <div className="flex-1">
                  <AppSelectField
                    control={form.control}
                    name="district"
                    placeholder="District"
                    options={districts}
                  />
                </div>
                <div className="flex-1">
                  <AppSelectField
                    control={form.control}
                    name="ward"
                    placeholder="Ward"
                    options={wards}
                  />
                </div>
                <div className="flex-1">
                  <AppSelectField
                    control={form.control}
                    name="street"
                    placeholder="Street"
                    options={streets}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <AppSubmitButton label="Submit" className="w-96" />
              </div>
            </div>
          </form>
        </AppFormProvider>
        <TableWrapper
          className="flex flex-col"
          // error={{
          //   title: "No Member Found",
          //   message: "Click button below to add one",
          //   Action: <AppButton>Add New Member</AppButton>,
          // }}
        >
          <TableCaption className="flex justify-between mb-3">
            <div className="flex items-center">
              <span className="font-bold me-1">Members:</span>
              <span className="text-xs">{membersDummies.length}</span>
            </div>
            <AppButton
              size="xs"
              variant="secondary"
              onClick={() => {
                navigate(ROUTE_PATHS.membership.members.register);
              }}
            >
              <LuPlus />
            </AppButton>
          </TableCaption>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S/N</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Residence</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {membersDummies.map((member, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.residence.street.name}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.phone}</TableCell>

                  <TableCell>
                    <div className="flex gap-3">
                      <Link
                        to={ROUTE_PATHS.membership.members.preview(
                          member.memberId,
                        )}
                      >
                        <LuEye
                          size={20}
                          className="text-slate-400 cursor-pointer"
                        />
                      </Link>
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
