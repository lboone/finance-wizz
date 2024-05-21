'use client'
import { Button } from "../../../components/ui/button";
import { useNewAccount } from "../../../features/accounts/hooks/use-new-account";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Plus } from "lucide-react";

import { columns, Payment } from "./columns";
import { DataTable } from "@/components/data-table";

const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52g",
    amount: 101,
    status: "success",
    email: "z@example.com",
  },
  {
    id: "728ed52h",
    amount: 102,
    status: "pending",
    email: "o@example.com",
  },
  // ...
]
const AccountsPage = () => {
  const { onOpen } = useNewAccount();
  return (
    <div className="w-full pb-10 -mt-24">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">Accounts Page</CardTitle>
          <Button size="sm" onClick={onOpen}><Plus className="size-4 mr-2"/> Add New</Button>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} filterKey="email" onDelete={() => {}} disabled={false} />
        </CardContent>
      </Card>
    </div>
  )
}

export default AccountsPage