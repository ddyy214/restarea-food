import React from 'react';

export default function Section() {
  return (
    <div className="slider_section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="full">
              <div id="main_slider" className="carousel vert slide" data-ride="carousel" data-interval="5000">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="slider_cont">
                          <h3>휴게소맛집 찾으러 gogo</h3>
                          <p>Click the button below to find the rest area on the map</p>
                          <a className="main_bt_border" href="">Click</a>
                        </div>
                        <div className="slider_image">
                          <iframe
                            width="610"
                            height="380"
                            src="https://www.youtube.com/embed/jp_Q11V-274"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
