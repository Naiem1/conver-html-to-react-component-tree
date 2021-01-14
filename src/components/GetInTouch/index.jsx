import { useState } from "react";

const GetInTouch = () => {
  const [input, setInput] = useState({})

  const handleChange = e => {
    input[e.target.name] = e.target.value
    setInput(input)
  }
  const handleClick = () => {
    console.log(input)
  }



  return (
    <>
      <div className="touch_section">
        <div className="container">
            <h1 className="touch_text">Let's Get In Touch!</h1>
        </div>
      </div>
      {/* Form Field*/}
      <div className="lets_touch_main">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="input_main">
                <div className="container">
                  <form>
                    <div className="form-group">
                      <input
                        className="email-bt"
                        type="text"
                        placeholder="Name"
                        name="Name"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="email-bt"
                        type="text"
                        placeholder="Email"
                        name="Email"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <div className="form-group">
                        <textarea
                          className="massage-bt"
                          placeholder="Massage"
                          rows="5"
                          id="comment"
                          name="text"
                          onChange={handleChange}
                        >
                        </textarea>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="send_btn">
                  <button type="button" className="main_bt">
                    <a onClick={handleClick} href="#send">Send</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-12">
                  <p className="lorem_text">
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal distribution of letters, as opposed to using 'Content
                    here, content here', making it look like readable English. Many desktop publishing
                    packages and web
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;