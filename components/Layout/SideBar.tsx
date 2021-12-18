import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";

export type sbArgs = {
  id: number;
  icon: IconType;
  text?: string;
  link: string;
};

const SideBar = ({ arr }: { arr: sbArgs[] }) => {
  return (
    <div
      className="fixed left-0 h-auto w-20 m-0 py-5 rounded-r-3xl
      flex flex-col shadow-lg
      bg-discord_primary text-discord_secondary"
    >
      <ul className="flex flex-col gap-3">
        {arr.map((args) => {
          return (
            <li key={args.id}>
              <SideBarIcon
                icon={<args.icon />}
                text={args.text}
                link={args.link}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const SideBarIcon = ({
  icon,
  text = "tooltip ★",
  link,
}: {
  icon: React.ReactNode;
  text?: string;
  link: string;
}) => {
  return (
    <Link href={link}>
      <a className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
      </a>
    </Link>
  );
};

export default SideBar;