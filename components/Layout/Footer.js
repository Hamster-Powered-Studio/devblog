import Link from "next/link";

//TODO: styling
const Footer = () => {
  return (
    <footer className="flex">
      <div className="m-auto font-medium">© 2021 Hamster Powered Studios</div>

      <Link href="/" className="">
        <a className="font-bold text-xl text-white">
          <div className="fixed bottom-1 left-10 bg-gray-600 p-2 rounded-l-full z-50 hover:bg-gray-900">
            ← Back to home
          </div>
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
