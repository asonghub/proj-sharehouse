import { useEffect, useState } from "react";
import { houses } from "./data";
import "./css/houseItem.scss";

export default function HouseItem({ id }) {
  const [houseData, setHouseData] = useState({});

  useEffect(() => {
    const { title, placeID, placeName, place, gender } = houses[id - 1];
    console.log(houses[id - 1]);
    setHouseData({ title, placeID, placeName, place, gender });
  }, [id]);

  return (
    <>
      <div className="item-container">
        <img
          className="house-img"
          src="https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/24/ggumigi/20210524155924885hgfk.jpg"
        ></img>
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
