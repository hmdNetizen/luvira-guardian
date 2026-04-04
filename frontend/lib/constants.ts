import { ApprovedStep, Service } from "@/types";

export const INITIAL_SERVICES: Service[] = [
  {
    id: "gitlab",
    name: "GitLab",
    status: "disconnected",
    connection: "gitlab",
    scope: "read_api",
    scopes: ["read_api"],
    logo: "/gitlab-logo.svg",
    logoWidth: 36,
    logoHeight: 36,
    connectLabel: "Connect GitLab",
  },
  {
    id: "sign-in-with-slack",
    name: "Slack",
    status: "disconnected",
    connection: "sign-in-with-slack",
    scope: "chat:write",
    scopes: ["chat:write"],
    logo: "/slack-logo.svg",
    logoWidth: 44,
    logoHeight: 44,
    connectLabel: "Connect Slack",
  },
  {
    id: "google-calendar",
    name: "Google Calendar",
    status: "disconnected",
    connection: "google-oauth2",
    scope: "https://www.googleapis.com/auth/calendar.events, openid",
    scopes: ["https://www.googleapis.com/auth/calendar.events", "openid"],
    logo: "/google-calendar.svg",
    logoWidth: 36,
    logoHeight: 36,
    connectLabel: "Connect Google",
  },
];

export const INITIAL_STEPS: Array<ApprovedStep> = [
  {
    id: "retrieve_gitlab_issue",
    label: "retrieve_gitlab_issue",
    required: true,
    checked: true,
  },
  {
    id: "generate_incident_summary",
    label: "generate_incident_summary",
    required: true,
    checked: true,
  },
  {
    id: "send_slack_notification",
    label: "send_slack_notification",
    required: true,
    checked: true,
  },
  {
    id: "schedule_calendar_meeting",
    label: "schedule_calendar_meeting",
    required: false,
    checked: true,
  },
];
