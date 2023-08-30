import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import Date from "../components/Date";
import { getArchiveData } from "../lib/data";
import { IPost } from "../data/types";

const Content = ({ posts }: { posts: IPost[] }) => (
  <main className="archive-main">
    <h2>Archive</h2>
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/${post.slug}`}
            className="archive-main__item"
            key={post.slug}
          >
            <Date dateString={post.date} />
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  </main>
);

const Archive = () => {
  const { title, description, slug, timeString, posts } = getArchiveData();
  return (
    <>
      <Head>
        <title>{title}</title>
        <Meta
          title={title}
          description={description}
          slug={slug}
          timeString={timeString}
        />
      </Head>

      <Header />
      <Content posts={posts} />
      <Footer />
    </>
  );
};

export default Archive;
