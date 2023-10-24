import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Request A<strong className="white"> Call Back</strong></h2>
          </div>
          <div className="col-md-6">
            <form className="main_form">
              <div className="row">
                <div className="col-md-12">
                  <input className="form-control" placeholder="Name" type="text" name="Name" />
                </div>
                <div className="col-md-12">
                  <input className="form-control" placeholder="Email" type="text" name="Email" />
                </div>
                <div className="col-md-12">
                  <input className="form-control" placeholder="Phone" type="text" name="Phone" />
                </div>
                <div className="col-md-12">
                  <textarea className="textarea" placeholder="Message" type="text" name="Message"></textarea>
                </div>
                <div className="col-md-12">
                  <button className="send">Send</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              {/* Image content */}
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>Copyright © ddyy_214, 2023</p>
        </div>
      </div>
    </div>
  );
}