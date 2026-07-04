import { useQuery } from "@tanstack/react-query";
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
import { apiQueryKeys } from "../../../api.service.config/query.config/query.keys";
import RegionServices from "../services/region.services";

export default function RegionsSection() {
  // const queryClient = useQueryClient();

  // const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  // const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  const { data: apiResponse, isLoading } = useQuery({
    queryKey: apiQueryKeys.regions,
    queryFn: RegionServices.getRegions,
  });

  return (
    <TableWrapper
      className="flex flex-col"
      error={
        apiResponse?.message && (apiResponse.data?.length ?? 0) === 0
          ? {
              title: "No Education Levels",
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
            <TableHead>Districts</TableHead>
            <TableHead>Members</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <LoadingTableBody columns={4} />
          ) : (
            apiResponse?.data?.map((region, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{region.name}</TableCell>
                <TableCell>{region.wards}</TableCell>
                <TableCell>{region.members}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
