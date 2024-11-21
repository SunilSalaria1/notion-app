import * as React from "react";
import { Metadata } from "next";
import AuditLogs from "@/components/admin/logs/AuditLogs";

export const metadata: Metadata = {
  title: "Audit Logs",
  description: "User logs",
};


export default function Page() {
  return (
    <div className="container mx-auto py-10">
    <AuditLogs/>
    </div>
  );
}
