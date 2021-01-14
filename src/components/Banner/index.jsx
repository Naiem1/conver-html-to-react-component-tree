import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
};


const Banner = () => {
  return (
    <div className="banner-main">
        <div className="container">
            <div id="main_slider" className="carousel slide" data-ride="carousel">
                {/* <!-- The slideshow --> */}
                <Slider {...settings} className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="titlepage-h1">
                            <h1 className="bnner_title">Welcome To<br/>
                                <span style={{color: "#10b5fa"}}>Content Writing Services</span></h1>
                            <p className="long_text">It is a long established fact that a reader will be distracted by the
                                readable content of a page when looking </p>
                        </div>
                        <div className="btn_main">
                            <button type="button" className="btn btn-dark btn-lg"><a
                                    href="contact.html">Contact</a></button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="titlepage-h1">
                            <h1 className="bnner_title">Welcome To<br/>
                                <span style={{color: "#10b5fa"}}>Content Writing Services</span></h1>
                              <p className="long_text">
                                  It is a long established fact that a reader will be distracted by the
                                  readable content of a page when looking
                            </p>
                        </div>
                        <div className="btn_main">
                            <button type="button" className="btn btn-dark btn-lg">Contact</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="titlepage-h1">
                            <h1 className="bnner_title">Welcome To<br/>
                                <span style={{color: "#10b5fa"}}>Content Writing Services</span></h1>
                            <p className="long_text">It is a long established fact that a reader will be distracted by the
                                readable content of a page when looking </p>
                        </div>
                        <div className="btn_main">
                            <button type="button" className="btn btn-dark btn-lg">Contact</button>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    </div>
      
  );
};

export default Banner;