import "./css/ani.css";
import Lottie from "react-lottie";
import LottieData from "./running.json";
export default function Ani() {
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
      <div className="running-container">
        <img className="home" src="/img/home_pixel.png" />
        <div className="man-container">
          <div className="man-wrapper">
            <Lottie
              className="man"
              options={defaultOptions}
              isClickToPauseDisabled={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}
