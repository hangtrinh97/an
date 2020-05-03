import Link from 'next/link';

const Navbar = () => (
  <nav className="navbar">
    <Link href="/">
      <a className="navbar-brand">Hệ thống nhận dạng biển số xe</a>
    </Link>
    <Link href="/new">
      <a className="create">Nguyễn Tấn An</a>
    </Link>
  </nav>
);

export default Navbar;
