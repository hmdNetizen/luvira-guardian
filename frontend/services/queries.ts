import { useQuery } from "@tanstack/react-query";
import { auditLogs } from "./api";

export const useAuditLogsQuery = (workflow_id?: string) => {
  return useQuery({
    queryKey: ["audit-log", workflow_id],
    queryFn: () => auditLogs(workflow_id),
  });
};
