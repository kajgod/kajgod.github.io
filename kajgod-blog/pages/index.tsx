import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import Article from "../components/Article";
import { getHomepageData } from "../lib/data";

export default function Home() {
  const { title, description, timeString, posts } = getHomepageData();
  return (
    <>
      <Head>
        <Meta
          title={title}
          description={description}
          slug=""
          timeString={timeString}
        />
      </Head>

      <Header />

      <main className="index-main">
        {posts.map((post) => (
          <Link
            href={`/${post.slug}`}
            className="index-main__item"
            key={post.slug}
          >
            <Article title={post.title} date={post.date} content={post.hype} />
          </Link>
        ))}
      </main>

      <Footer />
    </>
  );
}
