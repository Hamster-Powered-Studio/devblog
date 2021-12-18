import Header from "./Header";
import Footer from "./Footer";
import SideBar, { sbArgs } from "../SideBar";
import { GiAbstract001, GiAbstract027 } from "react-icons/gi";

const sidebarItems: sbArgs[] = [
  {
    id: 1,
    icon: GiAbstract027,
    text: "Back To Home",
    link: "/",
  },
  {
    id: 2,
    icon: GiAbstract001,
    text: "Blog Posts",
    link: "/posts",
  },
];

const Layout = ({
  children,
  home,
  title,
}: {
  children: React.ReactNode;
  home?: boolean;
  title: string;
}) => {
  return (
    <>
      <Header home={home} title={title} />
      <SideBar arr={sidebarItems} />
      <main className="min-h-screen p-5 max-w-xl mt-3 mx-auto mb-6">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
