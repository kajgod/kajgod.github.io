export interface IPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  timeString: string;
  description: string;
  hype: JSX.Element;
  content: JSX.Element;
  keywords: string[];
  published: boolean;
}

export interface IBlog {
  title: string;
  description: string;
  homepagePageCount: number;
  posts: IPost[];
}
