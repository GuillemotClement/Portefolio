import PocketBase from "pocketbase";

export const pb = new PocketBase(import.meta.env.API_URL);

// export const pbUser = import.meta.env.POCKETBASE_USER;
// export const pbPwd = import.meta.env.POCKETBASE_PWD;
