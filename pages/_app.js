import "@/styles/globals.css";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKR = Noto_Sans_KR({
    variable: "--fonts--noto-sans-kr",
    subsets: ["latin"],
})


export default function RootLayout({ Component, pageProps }) {
  return (
    <html lang="en" className={notoSansKR.className}>
      <body className="min-h-screen min-w-screen bg-gray-50">
        <Component {...pageProps} />
      </body>
    </html>
  );
}
