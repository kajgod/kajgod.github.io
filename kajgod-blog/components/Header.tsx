import Link from "next/link";
import { HeaderImage } from "../components/HeaderImage";

const Header = () => (
  <Link href="/">
    <h1>
      <HeaderImage />
    </h1>
  </Link>
);

export default Header;
