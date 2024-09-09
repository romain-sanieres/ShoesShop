import { getUser } from "@/actions/user";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
} from "@/components/ui/table";
import { LogoutButton } from "@/components/LogoutButton";
import { ThemeButton } from "@/components/ThemeButton";

export default async function Dashboard() {
  const user = await getUser();
  return (
    <div className="flex w-full justify-center py-5">
      <div className="w-full container flex">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>name</TableCell>
              <TableCell className="text-end">{user?.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>email</TableCell>
              <TableCell className="text-end">{user?.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>role</TableCell>
              <TableCell className="text-end">{user?.role}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>provider</TableCell>
              <TableCell className="text-end capitalize">
                {user?.accounts[0]?.provider}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell className="text-end">{user?.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>created at</TableCell>
              <TableCell className="text-end">
                {user?.accounts[0]?.createdAt?.toLocaleString("en-EN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>theme</TableCell>
              <TableCell className="text-end">
                <ThemeButton />
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter className="bg-background">
            <TableRow className="hover:bg-transparent">
              <TableCell></TableCell>
              <TableCell className="text-right">
                <LogoutButton />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
