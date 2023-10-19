import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <>
      <div
        style={{
          width: "80vw",
          textAlign: "center",
          margin: "10vw",
          fontFamily: "galmuri9",
        }}
      >
        <h1>앗! 올바른 경로가 아닙니다</h1>
        <Link style={{ color: "#ea5e76", textDecorationLine: "none" }} to="/">
          <h3 style={{ color: "rgb(234, 94, 118)", cursor: "pointer" }}>
            클릭! 👉 룸메이트 구하러 가기
          </h3>
        </Link>
      </div>
    </>
  );
}
