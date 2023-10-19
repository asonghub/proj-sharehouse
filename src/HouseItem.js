import { useEffect, useState } from "react";
import { houses } from "./data";
import "./css/houseItem.scss";

export default function HouseItem({ houseid }) {
  const [houseData, setHouseData] = useState({});

  useEffect(() => {
    const { title, placeID, placeName, place, gender, imgPath } =
      houses[houseid - 1];
    // console.log(houses[id - 1]);
    setHouseData({ title, placeID, placeName, place, gender, imgPath });
    // console.log(houseData.imgPath);
  }, [houseid]);

  return (
    <>
      <div className="item-container">
        <img className="house-img" src={houseData.imgPath}></img>
        <div className="house-info">
          <div className="house-title">{houseData.title}</div>
          <div className="house-gender">
            <span>{houseData.gender}</span>
            <span>{houseData.placeName}</span>
          </div>
        </div>
      </div>
    </>
  );
}
