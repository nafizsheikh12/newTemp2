import Hero from "./hero/Hero";
import Bootcamps from "./bootcamps/Bootcamps";
import Hired from "./hired/Hired";
import Highlights from "./highlights/Highlights";
import Service from "./service/Service";
import Companies from "./copmanies/index";
import PathSection from "./path/PathSection";
import About from "./about/About";
import LoveAcademy from "./loveAcademy/Academy"
import Aos from "aos";
import react,{useEffect} from "react"
import "aos/dist/aos.css";

export default function Home() {
  
  useEffect(() => {
    Aos.init();
  }, [])
  
  return (
    <>
      <Hero />
      <Companies />
      <About />
      <Bootcamps />
      <PathSection />
      <Service />
      <Highlights />
      <LoveAcademy />

    </>
  );
}
