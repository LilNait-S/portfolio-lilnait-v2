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
