import Footer from '../Footer';
import Header from '../Header';

const Layout = ({ children }) => (
  <div className='bg-slate-50 dark:bg-slate-700 min-h-screen flex flex-col'>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
);

export default Layout;
