import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import SectionTitle from "../../components/SectionTitle";

const { default: ServiceSection } = require("../../components/ServiceSection")

const ServicesPage = () => {
  return (
    <div>
      <div className="section_service_main">
        <SectionTitle title="Our Service"/>
        <div className="section_main">
          <ServiceSection />
          <ContactUs/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ServicesPage;