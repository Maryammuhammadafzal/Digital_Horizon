import { Fira_Sans, Gemunu_Libre } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const firaSans = Fira_Sans({
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const gemunuLibre = Gemunu_Libre({
  variable: "--font-mono",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Digital Horizon",
  description: "Digital Agency - Transform your idea in live Websites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${firaSans.variable} ${gemunuLibre.variable}`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
