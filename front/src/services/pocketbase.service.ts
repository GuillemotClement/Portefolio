import { pb } from "../lib/pocketbase";

export const getCollectionRecords = async <T>(
  collection: string,
): Promise<T[]> => {
  return (await pb.collection(collection).getFullList()) as T[];
};

export const getExpandCollectionRecords = async <T>(
  collection: string,
  expandCollection: string,
): Promise<T[]> => {
  return (await pb.collection(collection).getFullList({
    expand: expandCollection,
  })) as T[];
};
