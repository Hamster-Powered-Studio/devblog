import Link from "next/link";

//TODO: styling, linking
const Footer = () => {
  return (
    <footer className="flex items-center justify-around bg-gray-400 p-8">
      <div className="font-medium text-left">
        <text>
          Hamster Powered Studios is a hobby-oriented indie game development
          group.
        </text>

        <div>
          maintained by{" "}
          <Link href="https://github.com/RulerOfCakes">
            <a className="font-bold hover:text-blue-900">@RulerOfCakes</a>
          </Link>
        </div>
        <div>Copyright © 2021 Hamster Powered Studios</div>
      </div>
      <div className="text-right">
        <div>FAQ</div>
        <div>Contact Us</div>
      </div>
    </footer>
  );
};

export default Footer;
