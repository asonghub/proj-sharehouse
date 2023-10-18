import { useEffect, useState } from "react";
import "./css/houseDetail.scss";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Infomation from "./Infomation";
const { kakao } = window;

export default function HouseDetail() {
  const [heart, setHeart] = useState(false);
  const location = useLocation();
  const ctx = useOutletContext();
  let house = {};
  let myaddress = "";
  console.log(location);
  if (location.state !== null) {
    house = location.state;
    console.log(location.state);
    myaddress = house.place;
    console.log(myaddress);
  }
  if (ctx) {
    console.log(ctx);
    house = ctx;
    myaddress = house.place;
    console.log(myaddress);
  }

  useEffect(() => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.547797, 126.945723), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    // 지도를 생성합니다
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

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(myaddress, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
          image: markerImage,
        });

        map.setCenter(coords);
      }
    });
  }, []);

  return (
    <>
      <div className="house-show">
        <div className="container">
          <div className="house-title2">
            <strong>{house.title}</strong>
          </div>

          {/* 집 사진 */}
          <div className="img-div">
            <img
              style={{ width: "100%" }}
              src="
              https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/24/ggumigi/20210524155924885hgfk.jpg"
            />
            {/* 관심목록 토글 */}
            <div className="house-favorite">
              {heart === true ? (
                <img
                  className="heart"
                  src="/img/heart.png"
                  onClick={() => setHeart(!heart)}
                />
              ) : (
                <img
                  className="heart"
                  src="/img/empty-heart.png"
                  onClick={() => setHeart(!heart)}
                />
              )}
            </div>
          </div>
          <div className="container2">
            {/* 집 정보 영역 */}
            <div className="info">
              <div className="price-section">
                <div className="section-title">방 정보</div>
                <img
                  className="flat-house"
                  src="https://t4.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/3xR/image/y1HfWntzavc3imjnlK8ArSWtQE0.jpg"
                />
                <div className="house-table">
                  <div className="table-col1">
                    <div className="table-item">주소</div>
                    <div className="table-item">주택유형</div>
                    <div className="table-item">최대거주</div>
                  </div>
                  <div className="table-col2">
                    <div className="table-item">{house.placeName}</div>
                    <div className="table-item">빌라</div>
                    <div className="table-item">{house.houseID}명</div>
                  </div>
                  <div className="table-col1">
                    <div className="table-item">보증금</div>
                    <div className="table-item">월세</div>
                    <div className="table-item">최소계약기간</div>
                  </div>
                  <div className="table-col2">
                    <div className="table-item">{house.deposit} 만원</div>
                    <div className="table-item">{house.rent} 만원</div>
                    <div className="table-item">3 개월</div>
                  </div>
                </div>
              </div>
              <div className="info-section">
                <div className="section-title">하우스 상세 소개</div>
                <Infomation />
              </div>
              <div className="map-section">
                <div className="section-title">위치정보</div>
                <div
                  id="map"
                  style={{ width: "100%", height: "400px", zIndex: "-1" }}
                ></div>
              </div>
            </div>
          </div>
          {/* <div className="contact">
            <div className="navigation">
              <div className="contact">입주신청</div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="floating-container">
        <div className="floating-btn">입주신청</div>
      </div>
    </>
  );
}
