import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const Layout = ({ children, categories, isOpen, toggleSidebar }) => {
  return (
    <>
      <Header
        categories={categories}
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
      />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
