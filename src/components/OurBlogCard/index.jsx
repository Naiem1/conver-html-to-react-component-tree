
const OurBlogCard = ({blog}) => {
  const { img, date, description } = blog;

  return (
    <div className="col-sm-4 mb-5">
      <div className="section_1">
        <div>
          <img
            src={img}
            alt="img"
            style={{ maxWidth: "100%" }}
          />
        </div>
          <button type="button" className="date-bt">{date}</button>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default OurBlogCard;