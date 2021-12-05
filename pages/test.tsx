import SideBar from "../components/SideBar";
import { GiAbstract027 } from "react-icons/gi";

const test = () => {
  return (
    <div>
      <SideBar
        arr={[
          {
            id: 1,
            icon: GiAbstract027,
            text: "Hello!",
            link: "/"
          },
          {
            id: 2,
            icon: GiAbstract027,
            link: "/404"
          },
        ]}
      />
    </div>
  );
};

export default test;
