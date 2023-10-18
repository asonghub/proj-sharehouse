import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import $ from "jquery";
const { kakao } = window;

export default function Map({ houses }) {
  const [houseList, setHouseList] = useState(houses);
  const { filteredhouse } = useSelector((state) => state.search);

  useEffect(() => {
    var mapContainer = document.getElementById("map");
    var mapOption = {
      center: new kakao.maps.LatLng(37.547797, 126.945723),
      level: 3,
    };
    var map = new kakao.maps.Map(mapContainer, mapOption);

    var imageSrc = "/img/home3.png", // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(25, 25), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );
    const coordsArr = [];
    async function addMarkersToMap() {
      var geocoder = new kakao.maps.services.Geocoder();
      var bounds = new kakao.maps.LatLngBounds();

      for (const house of filteredhouse) {
        try {
          const result = await getAddressCoordinates(geocoder, house.place);
          if (result) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            // console.log("coords", result[0].y, result[0].x);
            coordsArr.push({ lat: result[0].y, lng: result[0].x });
            var marker = new kakao.maps.Marker({
              position: coords,
              image: markerImage,
            });
            marker.setMap(map);
            bounds.extend(coords);
          } else {
            console.error("주소를 좌표로 변환하는 데 실패했습니다.");
          }
        } catch (error) {
          console.error(error);
        }
      }
      var clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel: 2, // 클러스터 할 최소 지도 레벨
        disableClickZoom: true, // 클러스터 마커를 클릭했을 때 지도가 확대되지 않도록 설정한다
      });

      // 데이터를 가져오기 위해 jQuery를 사용합니다
      // 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
      $.get(coordsArr, function (data) {
        // 데이터에서 좌표 값을 가지고 마커를 표시합니다
        // 마커 클러스터러로 관리할 마커 객체는 생성할 때 지도 객체를 설정하지 않습니다
        var markers = $(data.positions).map(function (i, position) {
          return new kakao.maps.Marker({
            position: new kakao.maps.LatLng(position.lat, position.lng),
          });
        });

        // 클러스터러에 마커들을 추가합니다
        clusterer.addMarkers(markers);
      });
      kakao.maps.event.addListener(
        clusterer,
        "clusterclick",
        function (cluster) {
          // 현재 지도 레벨에서 1레벨 확대한 레벨
          var level = map.getLevel() - 1;

          // 지도를 클릭된 클러스터의 마커의 위치를 기준으로 확대합니다
          map.setLevel(level, { anchor: cluster.getCenter() });
        }
      );

      // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
      map.setBounds(bounds);
    }

    if (filteredhouse.length > 0) {
      addMarkersToMap();
      console.log(coordsArr);
    }
  }, [filteredhouse]);
  // 마커 클러스터러에 클릭이벤트를 등록합니다
  // 마커 클러스터러를 생성할 때 disableClickZoom을 true로 설정하지 않은 경우
  // 이벤트 헨들러로 cluster 객체가 넘어오지 않을 수도 있습니다

  async function getAddressCoordinates(geocoder, address) {
    return new Promise((resolve, reject) => {
      geocoder.addressSearch(address, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          resolve(result);
        } else {
          reject(new Error("주소를 좌표로 변환하는 데 실패했습니다."));
        }
      });
    });
  }

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
}
