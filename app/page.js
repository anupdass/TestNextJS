import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import Content from "./component/Content";
import PackageList from "./component/PackageList";
import ContactUs from "./component/ContactUs";
import About from "./component/About";
import SluganSection from "./component/SluganSection";
export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Content />
      <About />
      <PackageList />
      <SluganSection />
      <ContactUs />
    </div>
  );
}
