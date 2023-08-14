import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import Date from "../components/Date";
import { blog } from "../data/blog";

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
        <Meta
          title={post.title}
          description={post.description}
          slug={post.slug}
          timeString={post.timeString}
        />
      </Head>

      <Header />

      <main className="main-single-article">
        <Date dateString={post.date} />
        <h2>{post.title}</h2>
        <div className="article-container">{post.content}</div>
      </main>

      <Footer />
    </>
  );
}
