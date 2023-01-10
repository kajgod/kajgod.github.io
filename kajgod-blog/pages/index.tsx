import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Article from "../components/Article";
import blog from "../data/blog.json";

export default function Home() {
  let posts = [...blog.posts];
  posts = posts.reverse().slice(0, 5);
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
        <link rel="icon" href="/favicon.ico" />
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
