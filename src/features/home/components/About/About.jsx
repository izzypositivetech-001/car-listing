import Button from "../../../../shared/components/Button";
import Image from "../../../../shared/ui/Image";
import about from "./assets/about-image.jpg"

import icon1 from "./assets/icon-01.svg"
import icon2 from "./assets/icon-02.svg"

const About = () => {
  return (
    <>
        <section className="bg-[#0d0d0e]">
            <div className="about section section-container py-[8%] gap-10
            lg:gap-14 relative">
                <Image  
                    src={about}
                    alt="about-image"
                    wrapperClass="about-image w-full lg:w-1/2 rounded-sm relative"
                    className="section-image"
                    data-aos="fade-right" data-aos-delay="100"
                />
                <div className="content-col text-white w-full lg:w-1/2 relative gap-8">
                    <div className="main-title flex flex-col gap-3" 
                    data-aos="fade-left" data-aos-delay="100"
                    >
                        <span className="sub-title">About Us</span>
                        <h2 className="heading-1 max-w-120">
                            Your trusted partner in reliable car rental
                        </h2>
                    </div>

                    <div className="content-desc flex flex-col gap-10">
                        <p className="text-desc text-gray-light"
                         data-aos="fade-left"
                          data-aos-delay="200">
                            We provide premium car rental services with a diverse fleet of well-maintained vehicles. From economy cars to luxury SUVs, we have the perfect vehicle for every occasion. 
                          </p>

                          <ul className="space-y-3 sm:space-y-5 w-full">
                            <li className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full"  data-aos="fade-left"
                          data-aos-delay="300">
                            <div className="icon w-20 h-20">
                                <img src={icon1} alt="car-image" className="section-image p-3" />
                            </div>

                            <div className="content">
                                <span className="font-semibold text-xl tracking-wide pb-2 block">
                                    Brake Check & Services
                                </span>
                                <p className="max-w-full sm:max-w-80 text-gray-light text-sm">
                                    Complete brake system inspection and maintenance to ensure your vehicle safety.
                                </p>
                                
                            </div>
                          </li>

                          <li className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full"  data-aos="fade-left"
                          data-aos-delay="300">
                            <div className="icon w-20 h-20">
                                <img src={icon2} alt="car-image" className="section-image p-3" />
                            </div>

                            <div className="content">
                                <span className="font-semibold text-xl tracking-wide pb-2 block">
                                    Online Appointment
                                </span>
                                <p className="max-w-full sm:max-w-80 text-gray-light text-sm">
                                    Book your vehicle rental reservation easily online with instant confirmation and flexible scheduling.
                                </p>
                                
                            </div>
                          </li>
                          </ul>

                          <Button 
                            type="link"
                            to="/service"
                            text={"Contact-Us"}
                            className="btn-yellow" data-aos="fade-left"
                            data-aos-delay="500"
                          />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About
