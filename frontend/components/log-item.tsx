import React from "react";
import type { TLogItem } from "@/services/types";

function StatusBadge({ status }: { status: "success" | "failed" }) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium ${
        status === "success"
          ? "bg-green-50 text-green-600 border border-green-200"
          : "bg-red-50 text-red-500 border border-red-200"
      }`}
    >
      <span className={`w-1 h-1 rounded-full ${status === "success" ? "bg-green-500" : "bg-red-400"}`} />
      {status === "success" ? "Success" : "Failed"}
    </span>
  );
}

export default function LogItem({
  action,
  timestamp,
  status,
  service,
  agent_id,
}: TLogItem) {
  return (
    <li className="grid grid-cols-[2fr_1fr_1fr_1.5fr_1fr] gap-4 px-5 py-3.5 hover:bg-gray-50 transition-colors">
      <span className="text-[13px] text-gray-800 font-medium">{action}</span>
      <span className="text-[13px] text-gray-500">{service}</span>
      <span className="text-[13px] text-gray-500">{agent_id}</span>
      <span className="text-[12px] text-gray-400 font-mono">{timestamp}</span>
      <StatusBadge status={status} />
    </li>
  );
}
