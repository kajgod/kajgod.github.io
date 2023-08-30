interface IMeta {
  title: string;
  description: string;
  slug: string;
  timeString: string;
}

const Meta = ({ title, description, slug, timeString }: IMeta) => (
  <>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
    <link
      rel="preconnect"
      href="https://fonts.googleapis.com"
      crossOrigin="anonymous"
    />
    <link rel="canonical" href={`https://kajgod.github.io/${slug}`} />
    <meta name="description" content={description} />
    <meta property="og:type" content={slug !== "" ? "article" : "website"} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" content="Kajgod Blog" />
    <meta
      property="article:author"
      content="https://www.facebook.com/jurica.staresincic"
    />
    <meta property="article:section" content="Technology" />
    <meta property="article:published_time" content={timeString} />
    {/* <meta */}
    {/*   property="og:image" */}
    {/*   content="https://smashingmagazine.com/images/smashing-homepage.png" */}
    {/* /> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:title" content={title} />
    {/* <meta */}
    {/*   name="twitter:image" */}
    {/*   content="https://smashingmagazine.com/images/smashing-homepage.png" */}
    {/* /> */}
  </>
);

export default Meta;
