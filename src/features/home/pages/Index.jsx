import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Hero from '../components/Hero/Hero'
import About from "../components/About/About";

const Index = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-cubic"
        });

        window.addEventListener("load", () => {
            AOS.refreshHard();
        });
    }, []);
  return (
    <>
       <Hero />
       <About />
    </>
  )
}

export default Index
