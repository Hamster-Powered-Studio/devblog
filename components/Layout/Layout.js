import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, home, title }) => {
  return (
    <>
      <Header home={home} title={title}/>
      <main className="min-h-screen p-5 max-w-xl mt-3 mx-auto mb-6">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
