import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import blog from "../data/blog.json";

export default function Blog() {
  const router = useRouter();
  const { slug } = router.query;
  const post = Object.values(blog.posts).find((post) => post.slug === slug);
  if (!post) return <h1>404</h1>;
  console.log(post);
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2>
          <Link href="/">{`<< `}</Link>
          {post.title}
        </h2>
        <p className="small">{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </main>

      <footer></footer>
    </>
  );
}
