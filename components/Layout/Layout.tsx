import Header from "./Header";
import Footer from "./Footer";
import SideBar, { sbArgs } from "./SideBar";
import { GiAbstract027 } from "react-icons/gi";
import { BiBox } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";

const sidebarItems: sbArgs[] = [
  {
    id: 1,
    icon: GiAbstract027,
    text: "Back To Home",
    link: "/",
  },
  {
    id: 2,
    icon: BiBox,
    text: "Blog Posts",
    link: "/posts",
  },
  {
    id: 3,
    icon: FcAbout,
    text: "About Us",
    link: "/about",
  },
  {
    id: 4,
    icon: FaGamepad,
    text: "Our Games",
    link: "/games",
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
