import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { houses } from "./data";
import { mapFilter, resetList } from "./store/search";
const { kakao } = window;

export default function Map({ houses }) {
  // const history = useHistory();
  const navi = useNavigate();
  const [houseList, setHouseList] = useState([]);
  const { filteredhouse } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  let newList = [];

  useEffect(() => {
    var mapContainer = document.getElementById("map");
    var mapOption = {
      center: new kakao.maps.LatLng(37.547797, 126.945723),
      level: 3,
    };
    var map = new kakao.maps.Map(mapContainer, mapOption);

    let swLatlng, neLatlng;

    var imageSrc = "/img/home3.png", // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(25, 25), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    var geocoder = new kakao.maps.services.Geocoder();
    var bounds = new kakao.maps.LatLngBounds();

    async function addMarkersToMap() {
      for (const house of filteredhouse) {
        try {
          const result = await getAddressCoordinates(geocoder, house.place);
          if (result) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            var marker = new kakao.maps.Marker({
              position: coords,
              image: markerImage,
            });
            marker.setMap(map);
            bounds.extend(coords);
            const navifunc = (house) => {
              console.log("house", house);
              navi(`/search/${house.houseID}`, { state: house });
            };

            kakao.maps.event.addListener(marker, "click", () =>
              navifunc(house)
            );
          } else {
            console.error("주소를 좌표로 변환하는 데 실패했습니다.");
          }
        } catch (error) {
          console.error(error);
        }
      }

      // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
      map.setBounds(bounds);
    }

    async function IntheMap() {
      // filteredhouse.map(async (v) => {
      //   const result = getAddressCoordinates(geocoder, v.place);
      //   const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
      //   console.log(coords);
      // });

      for (const house of filteredhouse) {
        try {
          const result = await getAddressCoordinates(geocoder, house.place);
          if (result) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            // console.log(coords);
            // bounds.extend(coords);
          } else {
            console.error("주소를 좌표로 변환하는 데 실패했습니다.");
          }
        } catch (error) {
          console.error(error);
        }
      }
    }

    /*

    ////////맵 영역 변동시 이벤트
    kakao.maps.event.addListener(map, "bounds_changed", async function () {
      console.log("영역변동!");
      // 지도 영역정보를 얻어옵니다
      var bounds = await map.getBounds();
      // 영역정보의 남서쪽 정보를 얻어옵니다
      swLatlng = await bounds.getSouthWest();
      // 영역정보의 북동쪽 정보를 얻어옵니다
      neLatlng = await bounds.getNorthEast();
      // console.log(swLatlng.toString(), neLatlng.toString());

      for (const house of filteredhouse) {
        const result = await getAddressCoordinates(geocoder, house.place);
        if (result) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          var lb = new kakao.maps.LatLngBounds(swLatlng, neLatlng);

          if (lb.contain(coords)) {
            //newList.push(house);
            setHouseList([house, ...houseList]);
          }
        } else {
          console.error("주소를 좌표로 변환하는 데 실패했습니다.");
        }
      }
      console.log("새로운 집리스트", houseList);
      if (filteredhouse !== houseList) {
        // dispatch(mapFilter(houseList));
        // setHouseList([]);
      }
    });
    */

    if (filteredhouse.length > 0) {
      addMarkersToMap();
    }
  }, [filteredhouse]);

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
