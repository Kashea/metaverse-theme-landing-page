import { Footer, Navbar } from "@/components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "@/sections";

// eslint-disable-next-line react/function-component-definition
export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <div className="relative">
        <World />
        <div className="gradient-04 z-0" />
        <Insights />
      </div>

      <Feedback />
      <Footer />
    </div>
  );
}
