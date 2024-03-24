//import 'tailwindcss/tailwind.css'
import "../styles/globals.css";
import "easymde/dist/easymde.min.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
