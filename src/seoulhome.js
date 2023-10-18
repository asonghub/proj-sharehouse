import axios from "axios";

const URL = "http://apis.data.go.kr/B551182/";

const response = axios.get(URL, {
  params: {
    serviceKey: process.env.REACT_APP_SERVICE_KEY,
    numOfRows: 1,
    pageNo: 10,
  },
});
