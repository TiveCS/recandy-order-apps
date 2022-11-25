import { Plus_Jakarta_Sans } from "@next/font/google";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const jakarta = Plus_Jakarta_Sans({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={jakarta.className}>
      <Component {...pageProps} />
    </main>
  );
}
