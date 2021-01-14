import ContactUs from "../../components/ContactUs";
import CreativeTitle from "../../components/CreativeTitle";
import Footer from "../../components/Footer";
import SectionTitle from "../../components/SectionTitle";
import ServiceSection from "../../components/ServiceSection";

const AboutPage = () => {
  return (
    <div className="about_page">
      <div className="about_main">
        <div className="services_main">
          <div className="container">
            <CreativeTitle />
          </div>
          <ContactUs />
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;