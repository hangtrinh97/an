// import App from 'next/app'
import 'semantic-ui-css/semantic.min.css';
import Layout from '../components/Layout';
import socketClient from '../utils/socketClient';
import '../css/style.css';

socketClient.init();
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}


export default MyApp;
