import Link from 'next/link';

const Navbar = () => (
  <nav className="navbar">
    <Link href="/">
      <a className="navbar-brand">KV</a>
    </Link>
    <Link href="/new">
      <a className="create">KV</a>
    </Link>
  </nav>
);

export default Navbar;
