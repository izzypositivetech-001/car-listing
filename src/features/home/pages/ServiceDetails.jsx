import { useParams } from "react-router-dom";
import { services } from "../data/services";

import { Check, Mail, MapPin, Phone } from "lucide-react";
import Button from "../../../shared/components/Button";
import PageBanner from "../../../shared/ui/PageBanner";

const ServiceDetails = () => {
  const { id } = useParams();
  const service = services.find((item) => item.id === Number(id));

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <PageBanner
        title="Service Details"
        currentPage="Service Details"
        productName={service.title}
      />

      <div
        className="container mx-auto px-4 py-[8%] section-container 
        gap-10 lg:gap-14 items-start!"
      >
        <div className="w-full lg:w-[70%] content">
          <div
            className="service-main-image mb-8 h-auto lg:h-180"
            data-aos="fade-center"
            data-aos-delay="300"
          >
            <img
              className="main-image section-image object-cover rounded"
              src={service.image}
              alt={service.title}
            />
          </div>

          <div className="service-content space-y-8">
            <h3
              className="heading-2 text-2xl lg:text-3xl font-semibold text-gray-900"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              {service.title}
            </h3>
            <p className="text-desc text-gray-600">
              We offer a wide range of car rental services designed to meet all
              your transportation needs. Whether you’re traveling for business,
              planning a family vacation, or need a reliable vehicle for a
              special event, we have the perfect solution for you.
            </p>

            <h3
              className="heading-2 text-2xl lg:text-3xl font-semibold text-gray-900"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              Discover premium rental services
            </h3>

            <p
              className="text-desc text-gray-600"
              data-aos="fade-right"
              data-aos-delay="700"
            >
              We offer a comprehensive range of car rental services designed to
              meet the diverse needs of our clients. Whether you’re traveling
              for business, planning a family vacation, or need a reliable
              vehicle for a special event, our fleet and services are tailored
              to provide you with the perfect solution. Discover the various
              services we offer and why we are the preferred choice for car
              rentals.
            </p>

            <p
              className="text-desc text-gray-600"
              data-aos="fade-right"
              data-aos-delay="700"
            >
              Whether it’s daily wear or long-term neglect, our team brings back
              the original beauty of your car. From deep cleaning to advanced
              polishing, every step is handled with expertise and attention to
              detail.
            </p>

            <ul className="grid-col lg:grid-cols-2 gap-5">
              <li
                className="centered-row flex-wrap gap-2"
                data-aos="fade-center"
                data-aos-delay="800"
              >
                <Check
                  size={22}
                  className="bg-black text-white rounded-full p-1"
                />
                <span className="text-lg font-medium">
                  24/7 roadside assistance
                </span>
              </li>

              <li
                className="centered-row flex-wrap gap-2"
                data-aos="fade-center"
                data-aos-delay="800"
              >
                <Check
                  size={22}
                  className="bg-black text-white rounded-full p-1"
                />
                <span className="text-lg font-medium">
                  Free Cancellation & Return
                </span>
              </li>

              <li
                className="centered-row flex-wrap gap-2"
                data-aos="fade-center"
                data-aos-delay="800"
              >
                <Check
                  size={22}
                  className="bg-black text-white rounded-full p-1"
                />
                <span className="text-lg font-medium">
                  Long-term & Short-term Rentals
                </span>
              </li>

              <li
                className="centered-row flex-wrap gap-2"
                data-aos="fade-center"
                data-aos-delay="800"
              >
                <Check
                  size={22}
                  className="bg-black text-white rounded-full p-1"
                />
                <span className="text-lg font-medium">Low price guarantee</span>
              </li>
            </ul>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
              <div
                className="group overflow-hidden rounded-2xl"
                data-aos="fade-center"
                data-aos-delay="800"
              >
                <img
                  className="section-image object-cover transition-duration-500 group-hover:scale-110"
                  src={service.post1}
                  alt={service.title}
                />
              </div>

              <div
                className="group overflow-hidden rounded-2xl"
                data-aos="fade-center"
                data-aos-delay="800"
              >
                <img
                  className="section-image object-cover transition-duration-500 group-hover:scale-110"
                  src={service.post2}
                  alt={service.title}
                />
              </div>

              <div
                className="group overflow-hidden rounded-2xl"
                data-aos="fade-center"
                data-aos-delay="800"
              >
                <img
                  className="section-image object-cover transition-duration-500 group-hover:scale-110"
                  src={service.post3}
                  alt={service.title}
                />
              </div>

              <div
                className="group overflow-hidden rounded-2xl"
                data-aos="fade-center"
                data-aos-delay="800"
              >
                <img
                  className="section-image object-cover transition-duration-500 group-hover:scale-110"
                  src={service.post4}
                  alt={service.title}
                />
              </div>

            </div>
              <p className="text-desc text-gray-600" 
              data-aos="fade-center" data-aos-delay="800">
                Our detailing service not only improves the visual appeal but also increases the lifespan of your vehicle’s paint and exterior components.
                 We use eco-friendly products that are safe for both your car and the environment.
              </p>

              <p className="text-desc text-gray-600" 
              data-aos="fade-center" data-aos-delay="800">
                Customer satisfaction is our top priority.
                 We tailor our services based on your vehicle’s condition, ensuring the best possible results every time you visit us.

              </p>

              <div className="overflow-hidden rounded-sm" 
               data-aos="fade-center" data-aos-delay="800"
              >
                <img src={service.post3} className="w-full h-75 lg:h-125 object-cover" alt="service" />
              </div>

              <p className="text-desc text-gray-600" 
              data-aos="fade-center" data-aos-delay="800">
                Experience the difference of professional car rental services.
                 Book your next vehicle with us and enjoy a seamless, comfortable, and reliable travel experience.
              </p>
          </div>
        </div>

        <div className="w-full lg:w-[30%] bg-white shadow p-5 lg:p-8 rounded-sm lg:sticky h-full lg:top-0 lg:right-0">
            <h4 className="text-2xl font-medium tracking-wide">Get in Touch</h4>

            <form className="space-y-8 mt-10 contact-form">
                <div className="input-wrapper pb-2 relative" 
                 data-aos="fade-center"
                 data-aos-delay="600"
                >
                    <label className="flex-grow w-full block mb-2 font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        className="input-box w-full outline-none"
                        required
                            
                    />
                </div>

                <div className="input-wrapper pb-2 relative" 
                 data-aos="fade-center"
                 data-aos-delay="700"
                >
                    <label className="flex-grow w-full block mb-2 font-medium">Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter Email"
                        className="input-box w-full outline-none"
                        required
                            
                    />
                </div>

                <div className="input-wrapper pb-2 relative" 
                 data-aos="fade-center"
                 data-aos-delay="800"
                >
                    <label className="flex-grow w-full block mb-2 font-medium">Message</label>
                    <textarea
                        type="text"
                        name="message"
                        placeholder="Enter Message"
                        className="input-box w-full outline-none"
                        required
                        rows={4}
                            
                    />
                </div>

                <Button
                  type="submit"
                  text={"Send Message"}
                  className="w-full! btn-black mt-0"
                  aos="fade-center"
                  aosDelay="900"
                />
            </form>

            <div className="contact-info">
                <h3 className="text-2xl font-medium tracking-wide pt-8 pb-8">
                    <ul className="space-y-6 max-w-md">
                        <li className="flex items-start gap-4 group contact-item"
                           data-aos="fade-center"
                           data-aos-delay="700"
                        >
                            <div className="p-3 rounded-full bg-linear-to-r from-purple-500 
                            to-pink-500 text-white transition-transform duration-300 group-hover">
                                <MapPin size={20} />
                            </div>

                            <p className="text-gray-700">
                                <span className="font-semibold block">United Kingdom  -</span> 221B Baker Street,<br />London, NW1 6XE  
                            </p>
                        </li>
                    </ul>
                </h3>
            </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
