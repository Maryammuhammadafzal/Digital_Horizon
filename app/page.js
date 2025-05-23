import AboutPage from "./About/Page";
import Homepage from "./Home/page";
import ServicePage from "./Services/Page";
import SliderPage from "./Slider/Page";
import StoriesPage from "./Stories/Page";

export default function Home() {
  return (
    <main className="w-full min-h-screen h-auto flex gap-28 flex-col">
    <Homepage/>
    <AboutPage/>
    <ServicePage/>
    <StoriesPage/>
    <SliderPage/>
    </main>
  );
}
