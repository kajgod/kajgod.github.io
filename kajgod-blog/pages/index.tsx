import Head from "next/head";
import Link from "next/link";
import Article from "../components/Article";
import blog from "../data/blog.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/">
          <h1>
            <span>Kajgod blog</span>
          </h1>
        </Link>
        {blog.posts.map((post) => (
          <Link href={`/${post.slug}`} key={post.slug}>
            <Article
              title={post.title}
              date={post.date}
              content={post.content}
            />
          </Link>
        ))}
      </main>

      <footer></footer>
    </>
  );
}
