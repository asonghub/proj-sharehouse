import { useState } from "react";
import Form from "react-bootstrap/Form";
import { seoul } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "./store/search";
import { SearchContainter, btnstyle } from "./css/search.js";

export default function Search() {
  const [region, setRegion] = useState("");
  const [gender, setGender] = useState("");

  // const region = useSelector((state) => state.search.region);
  // const gender = useSelector((state) => state.search.gender);
  // console.log('' region, gender);

  const filter = useSelector((state) => state.search);
  const filter2 = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const regionSelect = (e) => {
    // dispatch(setRegion(e.target.value));
    // console.log(searchAction);
    setRegion(e.target.value);
  };

  const genderSelect = (e) => {
    // dispatch(setGender(e.target.value));
    setGender(e.target.value);
  };

  const searchBtn = () => {
    dispatch(setFilter({ region, gender }));
  };

  return (
    <SearchContainter>
      {/* 구 선택  */}
      <div>
        {/* <FloatingLabel controlId="place" label="구 선택"> */}
        <Form.Select
          aria-label="Floating label select"
          value={region}
          onChange={regionSelect}
          style={{ cursor: "pointer" }}
        >
          <option>지역을 선택하세요</option>
          <option>전체</option>
          {/* <option value={true}>전체</option> */}
          {seoul.map((v) => (
            <option value={v.name} key={v.id}>
              {v.name}
            </option>
          ))}
        </Form.Select>
      </div>
      {/* </FloatingLabel> */}

      {/* 성별 선택 */}
      {/* <FloatingLabel
        controlId="gender"
        label="성별 선택"
        style={{ fontSize: "0.8rem" }}
      > */}
      <div>
        <Form.Select
          aria-label="Floating label select"
          value={gender}
          onChange={genderSelect}
          style={{ cursor: "pointer", fontSize: "1rem" }}
        >
          <option>성별타입</option>
          <option>전체</option>
          {/* <option value={true}>전체</option> */}
          <option>남성전용</option>
          <option>여성전용</option>
        </Form.Select>
        {/* </FloatingLabel> */}
      </div>
      <div style={btnstyle} onClick={searchBtn}>
        {/* <FaSearchLocation /> */}
        <img
          style={{ width: "25px", margin: "5px 5px 0 5px" }}
          src="/img/lense.png"
        ></img>
      </div>
    </SearchContainter>
  );
}
