import { GiAbstract027 } from "react-icons/gi";

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0 
      flex flex-col shadow-lg
      bg-discord_primary text-discord_secondary"
    >
      <ul>
        <li>
          <SideBarIcon icon={<GiAbstract027 />} />
        </li>
        <li>
          <SideBarIcon icon={<GiAbstract027 />} />
        </li>
      </ul>
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip ★" }) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default SideBar;
