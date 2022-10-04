import { Provider, observer } from 'mobx-react';
import Layout from '../components/Layout';
import '../styles/css/globals.css';
import stores from '../stores';

const MyApp = ({ Component, pageProps }) => (
  <Provider user={stores.user}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
);

export default observer(MyApp);
