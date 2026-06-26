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

export type Status = {
  collectionId: string;
  collectionName: string;
  created: ISODateString;
  id: string;
  title: string;
  updated: ISODateString;
};

export type Techno = {
  collectionId: string;
  collectionName: string;
  created: ISODateString;
  id: string;
  image: string;
  type: string;
  title: string;
  updated: ISODateString;
  isVisible: boolean;
};

type ExpandProject = {
  status_id: Status[];
  techno_id: Techno[];
};

export type Project = {
  collectionId: string;
  collectionName: string;
  created: ISODateString;
  description: string;
  expand: ExpandProject;
  features: string[];
  github: string;
  image: string;
  reason: string;
  title: string;
  url: string;
  order: number;
  isWebsite: boolean;
};

export type School = {
  city: string;
  collectionId: string;
  collectionName: string;
  created: ISODateString;
  end_periode: ISODateString;
  id: string;
  image: string;
  start_periode: ISODateString;
  subtitle: string;
  title: string;
  updated: ISODateString;
};
