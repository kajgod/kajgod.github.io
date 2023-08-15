import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/articles-archive">Archive</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
