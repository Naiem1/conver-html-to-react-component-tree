
const ServiceCard = ({service}) => {
  const { img, title, description } = service;
  return (
    <div className="col-md-6">
      <div className="written_text">
        <div className="like_icon">
          <img src={img} alt="images" />
        </div>
        <h1 className="written_text">{title}</h1>
        <p>{description }</p>
      </div>
    </div>
  );
};

export default ServiceCard;