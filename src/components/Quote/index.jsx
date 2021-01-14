import React from 'react';

const Quote = () => {
  return (
    <div className="quote_section">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="quote_text">Quote for Today</h1>
                    <p className="loan_text">
                      It is a long established fact that a reader will be distracted by the readable
                      content of a page
                    </p>
                </div>
                <div className="col-md-6">
                    <div className="quote_btn">
                        <button type="button" className="btn btn-dark btn-lg">Get A Quote</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Quote;