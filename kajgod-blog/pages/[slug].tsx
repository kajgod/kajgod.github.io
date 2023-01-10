import Head from "next/head";
import Header from "../components/Header";
import Date from "../components/Date";
import blog from "../data/blog.json";

// Generates a page for each blog post
// Called on build time 1st
export async function getStaticPaths() {
  const paths = blog.posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

// `getStaticPaths` requires using `getStaticProps`
// Called on build time 2nd
export async function getStaticProps({ params }: { params: { slug: string } }) {
  return {
    // Passed to the page component as props
    props: { slug: params.slug },
  };
}

// Exports a React component
// Generates runtime HTML
export default function Blog({ slug }: { slug: string }) {
  const post = Object.values(blog.posts).find((post) => post.slug === slug);
  if (!post) return <h1>404</h1>;
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Date dateString={post.date} />
        <h2>{post.title}</h2>
        <div className="article-container" dangerouslySetInnerHTML={{ __html: post.content }} />
      </main>

      <footer></footer>
    </>
  );
}
