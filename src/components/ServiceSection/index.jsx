import data from "../../data";
import ServiceCard from "../ServiceCard";

const ServiceSection = () => {
  return (
      <div className="service_main">
        <div className="container">
          <div className="row">
            {
              data.services.serviceCard.map((service, i) => (
                <ServiceCard
                  service={service}
                  key={i}
                />
              ))
            }
          </div>
        </div>
      </div>
  );
};

export default ServiceSection;