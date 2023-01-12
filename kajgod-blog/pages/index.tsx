import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Meta from "../components/Meta";
import Article from "../components/Article";
import blog from "../data/blog.json";

export default function Home() {
  let posts = [...blog.posts].filter((post) => post.published);
  posts = posts.reverse().slice(0, 5);
  const timeString = posts[0].timeString;
  return (
    <>
      <Head>
        <Meta
          title={blog.title}
          description={blog.description}
          slug=""
          timeString={timeString}
        />
      </Head>

      <Header />

      <main>
        {posts.map((post) => (
          <Link href={`/${post.slug}`} key={post.slug}>
            <Article title={post.title} date={post.date} content={post.hype} />
          </Link>
        ))}
      </main>

      <footer></footer>
    </>
  );
}
