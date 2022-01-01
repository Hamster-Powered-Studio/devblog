import Header from "./Header";
import Footer from "./Footer";
import SideBar, { sbArgs } from "./SideBar";
import { GiAbstract027 } from "react-icons/gi";
import { BiBox } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import styles from "./Layout.module.scss";

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
    <div className="transition-colors duration-300">
      <Header home={home} title={title} />
      <SideBar arr={sidebarItems} />
      <main
        className={
          "min-h-screen p-5 max-w-lg md:max-w-xl lg:max-w-2xl mt-3 mx-auto mb-6 rounded-xl bg-slate-50 dark:bg-slate-700 border-transparent transition-colors duration-300 " +
          styles["poly-background"] +
          " border-4 border-orange-300 dark:border-discord_primary"
        }
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
