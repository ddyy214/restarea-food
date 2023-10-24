import React from 'react';
import KakaoMap from './KakaoMap';

export default function AboutSection() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title">
              <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <img src="images/marker.png" alt="#" style={{ margin: '0 auto' }} />
                "Click on the map to navigate to the menu page of the corresponding rest area."
                <br />지도를 클릭하시면 해당 휴게소 메뉴페이지로 이동합니다.
                <KakaoMap />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}