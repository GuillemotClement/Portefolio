import { octokit } from "../lib/octokit";

export const getGithubData = async () => {
  try {
    const response = await octokit.request("GET /user");

    const data = await JSON.stringify(response);

    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
};
