export interface Practice {
  title: string;
  src: string;
  alt: string;
  linkGithub: string;
  linkProject: string;
  paragraph: any;
  date: string;
  iconsTec: Array<
    | {
        title: string;
        icon: JSX.Element;
      }
    | undefined
  >;
}


export interface workType {
    id: string;
    company: string;
    typeWork: string;
    dateStart: string;
    dateEnd: string;
    experience: string;
    achievements?: string[]
} 

type Work = {
  id: string;
  company: string;
  typeWork: string;
  dateStart: string;
  dateEnd: string;
  experience: string;
  achievements?: string[];
};

type WorkItem = {
  work: Work;
};

export type WorksConstantsType = WorkItem[];
