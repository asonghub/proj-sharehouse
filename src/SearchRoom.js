import Search from "./Search";
import Map from "./Map";
import { houses } from "./data";
import HouseItem from "./HouseItem";
import { useEffect, useState } from "react";
import "./css/serchStyle.scss";
import { useSelector } from "react-redux";
import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";
import Map2 from "./Map2";

export default function SearchRoom() {
  const [filtered, setFiltered] = useState(houses);
  const [open, setOpen] = useState(false);
  const [selectHouse, setHouse] = useState();
  const { houseId } = useParams();
  console.log(houseId);

  const { region, gender, filteredhouse } = useSelector(
    (state) => state.search
  );
  console.log("페이지", region, gender, filteredhouse);

  useEffect(() => {
    region === "" || setFiltered(filteredhouse);
  }, [filteredhouse]);

  return (
    <>
      {houseId !== undefined ? (
        <div className="detail-body">
          <Outlet context={selectHouse} />
        </div>
      ) : (
        <div className="search-room-body">
          <div className={`search-container ${open ? "active" : ""}`}>
            <div className="swipe-btn" onClick={() => setOpen(!open)}>
              <img
                className="swipe-img"
                src="https://s3.ap-northeast-2.amazonaws.com/woozoo/layout_images/house/w-drag-img.png"
                alt="Swipe Button"
              />
            </div>

            <div className="search-div2">
              <Search />
            </div>
            {/* 방 리스트 영역 */}
            <div className="search-list">
              {filtered.length === 0 ? (
                <div
                  style={{
                    color: "grey",
                    fontFamily: "galmuri9",
                    fontSize: "30px",
                  }}
                >
                  EMPTY :(
                </div>
              ) : (
                filtered.map((v) => (
                  <Link
                    to={`/search/${v.houseID}`}
                    style={{
                      color: "black",
                      textDecorationLine: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => setHouse(v)}
                  >
                    <HouseItem key={v.houseID} id={v.houseID}></HouseItem>
                  </Link>
                ))
              )}
            </div>
          </div>
          {/* 지도영역 */}
          <div className="map-container">
            {/* <Map houses={filtered} /> */}
            <Map />
            {/* <Map2 /> */}
          </div>

          {/* 작은창일때 검색창 위로 노출 */}
          <div className="search-div1">
            <Search />
          </div>
        </div>
      )}
    </>
  );
}
