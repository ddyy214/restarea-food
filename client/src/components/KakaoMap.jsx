/*global kakao */
import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { markerdata } from "../data/markerData";

const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  width: 100%;
`;

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
      level: 12,
    };

    //map
    const map = new kakao.maps.Map(container, options);

    markerdata.forEach((el) => {
      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(el.lat, el.lng),
        title: el.title,
      });

      // 마커 클릭 이벤트 리스너 등록
      kakao.maps.event.addListener(marker, "click", function () {
        handleMarkerClick(el.title);
      });
    });
  };

  const pages = {
    가평휴게소_서울방향: "/page1",
    가평휴게소_춘천방향: "/page2",
    강릉대관령휴게소_강릉방향: "/page3",
    강릉대관령휴게소_인천방향: "/page4",
    // 다른 마커들에 대한 처리도 추가할 수 있습니다.
  };

  const handleMarkerClick = (title) => {
    // 페이지 이동을 처리합니다.
    const pageUrl = pages[title];
    if (pageUrl) {
      window.location.href = pageUrl;
    }
  };

    return (
      <MapContainer id="map">
        {}
        {Object.keys(pages).map((title) => (
          <Link key={title} to={pages[title]} className="hidden-link"></Link>
        ))}
      </MapContainer>
    );
  }