import { IBlog } from "./types";
import {
  Hype as Hype001,
  Post as Post001,
  description as description001,
} from "./posts/001";
import {
  Hype as Hype002,
  Post as Post002,
  description as description002,
} from "./posts/002";
import {
  Hype as Hype003,
  Post as Post003,
  description as description003,
} from "./posts/003";

export const blog: IBlog = {
  title: "Kajgod blog",
  description: "A blog about technology and philosophy",
  homepagePageCount: 5,
  posts: [
    {
      id: 1,
      title: "Next.js app on GitHub Pages",
      date: "20230111",
      timeString: "2023-01-11 08:00:00 +0000 UTC",
      description: description001,
      hype: <Hype001 />,
      content: <Post001 />,
      slug: "nextjs-app-on-github-pages",
      keywords: ["nextjs", "github", "pages"],
      published: true,
    },
    {
      id: 2,
      title: "Artists vs. AI",
      date: "20230118",
      timeString: "2023-01-18 08:00:00 +0000 UTC",
      description: description002,
      hype: <Hype002 />,
      content: <Post002 />,
      slug: "artists-vs-ai",
      keywords: ["AI", "art", "craft"],
      published: true,
    },
    {
      id: 3,
      title: "Val Town is pretty cool",
      date: "20230814",
      timeString: "2023-08-14 20:00:00 +0000 UTC",
      description: description003,
      hype: <Hype003 />,
      content: <Post003 />,
      slug: "val-town-is-pretty-cool",
      keywords: ["val town", "deno", "javascript"],
      published: false,
    },
  ],
};
