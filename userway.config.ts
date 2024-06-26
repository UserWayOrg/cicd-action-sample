import type { Config } from "@userway/cicd-core";

export default {
  organization: "alex-userway-org",
  project: "cicd-action-sample",
  token: process.env.USERWAY_TOKEN,
  reportPaths: ["./uw-a11y-reports"]
} satisfies Config;
