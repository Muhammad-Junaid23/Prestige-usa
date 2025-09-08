import Contact from '@/components/shared/Contact';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      <div>{children}</div>
      <Contact />
      <Footer />
    </main>
  );
};

export default Layout;
