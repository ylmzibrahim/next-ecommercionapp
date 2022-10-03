import Layout from '../components/Layout';
import '../styles/css/globals.css';
import stores from '../stores';
import { Provider, observer } from 'mobx-react';

function MyApp({ Component, pageProps }) {
  return (
    // <Provider user={stores.user}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    // </Provider>
  );
}

export default MyApp;
