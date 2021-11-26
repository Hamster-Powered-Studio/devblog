import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, home, title }) => {
  return (
    <>
      <Header home={home} title={title}/>
      <main className="min-h-screen bg-gray-400">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
