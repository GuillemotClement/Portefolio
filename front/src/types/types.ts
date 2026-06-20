type ISODateString = string;

export type Experience = {
  city: string;
  collectionId: string;
  collectionName: string;
  created: ISODateString;
  endPeriode: ISODateString;
  enterprise: string;
  id: string;
  image: string;
  order: number;
  startPeriode: ISODateString;
  tasks: string[];
  title: string;
  updated: ISODateString;
};
