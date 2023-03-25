import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
