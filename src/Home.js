import Search from "./Search";
import Lottie from "react-lottie"; //예제1
// import { Player, Controls } from "@lottiefiles/react-lottie-player"; //예제2
import LottieData from "./running.json";
import Ani from "./Ani.js";
import "./css/home.scss";

export default function Home() {
  const defaultOptions = {
    //예제1
    loop: true,
    autoplay: true,
    animationData: LottieData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="home-body">
        <div className="wrapper">
          <div className="start-div">
            <div className="text">
              <span>어느 지역에 </span>
              <span>살고싶으세요?</span>
            </div>
            <Search />
          </div>
          <Ani className="ani" />
        </div>
      </div>
    </>
  );
}
