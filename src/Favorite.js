import { Link } from "react-router-dom";
import HouseItem from "./HouseItem";
import { favorite } from "./data";
import "./css/favorite.scss";
export default function Favorite() {
  return (
    <>
      <div className="favorite-body">
        <div className="favorite-list">
          <div className="favorite-title">찜한 방 목록</div>
          <div className="house-list">
            {favorite.map((v) => (
              <Link
                key={v.houseID}
                to={`/search/${v.houseID}`}
                style={{
                  color: "black",
                  textDecorationLine: "none",
                  cursor: "pointer",
                }}
              >
                <HouseItem key={v.houseID} houseid={v.houseID}></HouseItem>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
