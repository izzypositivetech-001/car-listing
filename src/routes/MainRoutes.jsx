import { Route, Routes, useLocation } from "react-router-dom"
import Index from "../features/home/pages/Index"
import ServiceDetails from "../features/home/pages/ServiceDetails"
import { useEffect } from "react";
import AOS from "aos";


const MainRoutes = () => {

    const location = useLocation();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out-cubic"
        });

        setTimeout(() => {
            AOS.refreshHard();
        },300);
    }, [location.pathname]);

    
  return (
    <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/services/:id" element={<ServiceDetails />}></Route>
    </Routes>
  )
}

export default MainRoutes
