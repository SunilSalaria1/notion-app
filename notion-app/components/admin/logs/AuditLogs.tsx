"use client";
import React from 'react';
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sample data for audit logs
const auditLogs = [
    {
      id: "1",
      timestamp: "2023-04-23 10:23:45",
      user: "john.doe@example.com",
      action: "User Login",
      details: "Successful login from IP 192.168.1.1",
    },
    {
      id: "2",
      timestamp: "2023-04-23 11:05:12",
      user: "jane.smith@example.com",
      action: "File Upload",
      details: "Uploaded file 'report.pdf' to /documents folder",
    },
    {
      id: "3",
      timestamp: "2023-04-23 13:45:30",
      user: "admin@example.com",
      action: "User Creation",
      details: "Created new user account for 'newuser@example.com'",
    },
    {
      id: "4",
      timestamp: "2023-04-23 15:12:08",
      user: "john.doe@example.com",
      action: "Settings Change",
      details: "Updated email notification preferences",
    },
    {
      id: "5",
      timestamp: "2023-04-23 16:30:22",
      user: "jane.smith@example.com",
      action: "User Logout",
      details: "User logged out",
    },
  ];
  

function AuditLogs() {
    const [sorting, setSorting] = React.useState<"asc" | "desc">("desc");
    const [searchTerm, setSearchTerm] = React.useState("");
  
    const sortedLogs = React.useMemo(() => {
      return [...auditLogs].sort((a, b) => {
        const comparison = a.timestamp.localeCompare(b.timestamp);
        return sorting === "asc" ? comparison : -comparison;
      });
    }, [sorting]);
  
    const filteredLogs = React.useMemo(() => {
      return sortedLogs.filter((log) =>
        Object.values(log).some((value) =>
          value.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, [sortedLogs, searchTerm]);
  
  return (
    <>
    <h1 className="text-2xl font-bold mb-4">Audit Logs</h1>
    <div className="flex justify-between items-center mb-4">
      <Input
        placeholder="Search logs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-sm"
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Columns <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked>
            Timestamp
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked>User</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked>Action</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked>Details</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">
              <Button
                variant="ghost"
                onClick={() => setSorting(sorting === "asc" ? "desc" : "asc")}
              >
                Timestamp
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>User</TableHead>
            <TableHead>Action</TableHead>
            <TableHead className="max-w-[500px]">Details</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredLogs.map((log) => (
            <TableRow key={log.id}>
              <TableCell className="font-medium">{log.timestamp}</TableCell>
              <TableCell>{log.user}</TableCell>
              <TableCell>{log.action}</TableCell>
              <TableCell className="max-w-[500px] truncate">
                {log.details}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                      onClick={() => navigator.clipboard.writeText(log.id)}
                    >
                      Copy log ID
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuItem>Download log</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    </>
  )
}

export default AuditLogs