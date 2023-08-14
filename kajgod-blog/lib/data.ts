import { blog } from "../data/blog";
import { IPost } from "../data/types";

export interface IBlogPageData {
  title: string;
  description: string;
  slug: string;
  timeString: string;
  posts: IPost[];
}

export function getHomepageData(): IBlogPageData {
  let posts = [...blog.posts].filter((post) => post.published);
  posts = posts.reverse().slice(0, blog.homepagePageCount);
  const timeString = posts[0].timeString;
  return {
    title: blog.title,
    description: blog.description,
    slug: "",
    timeString,
    posts,
  };
}

export function getArchiveData(): IBlogPageData {
  let posts = [...blog.posts].filter((post) => post.published);
  posts = posts.reverse();
  const timeString = posts[0].timeString;
  return {
    title: blog.title,
    description: blog.description,
    slug: "",
    timeString,
    posts,
  };
}
