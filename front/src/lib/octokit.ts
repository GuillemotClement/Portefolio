import { Octokit } from "@octokit/core";

export const octokit = new Octokit({
  auth: import.meta.env.GITHUB_KEY,
});
