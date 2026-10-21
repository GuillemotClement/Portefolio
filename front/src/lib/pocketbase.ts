import PocketBase from "pocketbase";
// import { API_URL } from "astro:env/server";

// use in prod
// export const pb = new PocketBase(import.meta.env.API_URL);
// use in dev
export const pb = new PocketBase("http://pocketbase:8080");

// export const pbUser = import.meta.env.POCKETBASE_USER;
// export const pbPwd = import.meta.env.POCKETBASE_PWD;
