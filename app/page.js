import AboutPage from "./About/Page";
import Homepage from "./Home/page";

export default function Home() {
  return (
    <main className="w-full min-h-screen h-auto flex space-y-28 flex-col">
    <Homepage/>
    <AboutPage/>
    </main>
  );
}
