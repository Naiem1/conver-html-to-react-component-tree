import Banner from "../../components/Banner"
import ContactUs from "../../components/ContactUs"
import CreativeTitle from "../../components/CreativeTitle"
import Footer from "../../components/Footer"
import GetInTouch from "../../components/GetInTouch"
import Quote from "../../components/Quote"
import SectionTitle from "../../components/SectionTitle"
import ServiceSection from "../../components/ServiceSection"

const HomePage = () => {
  return (
    <div>
      <Banner />
      <div className="services_main">
        <div className="container">
          <CreativeTitle/>
          <SectionTitle title="Our Service" />
          <ServiceSection />
        </div>
      </div>
      <Quote />
      <GetInTouch />
      <ContactUs />
      <Footer/>
    </div>
  );
};

export default HomePage;