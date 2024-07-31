import type { Config } from "@userway/cicd-core";

export default {
  organization: "support-userway-org",
  project: "cicd-action-sample",
  token: process.env.USERWAY_TOKEN,
  reportPaths: ["./uw-a11y-reports"],
  server: 'https://api.userway.org',
} satisfies Config;
