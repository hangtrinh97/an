import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>NODEJS</title>
    </Head>
    <Navbar />
    {children}
  </>
);

export default Layout;
