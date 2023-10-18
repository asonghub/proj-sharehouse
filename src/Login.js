import { useEffect, useState } from "react";
import "./css/login.scss";

export default function Login() {
  const [form, setForm] = useState({
    userid: "",
    useremail: "",
    password: "",
    userConfirm: false,
    makeUser: false,
  });
  const [valid, setValid] = useState({
    vid: false,
    vemail: false,
    vpw: false,
  });

  const { userid, useremail, password, userConfirm, makeUser } = form;

  console.log(userid);
  console.log(form);
  useEffect(() => {
    let alertText = "";
    if ((userid == "fakeID") & (useremail == "asong.com")) {
      setForm({ ...form, userConfirm: true });
    } else {
      alertText = "이메일을 확인해주세요";
    }
  }, []);

  return (
    <>
      <div className="inner">
        <div className="login-box">
          <div className="login-text">반가워요!</div>
          <div className="input-box">
            <div className="step1">
              {/* 이메일 */}
              <div className="email-inputs">
                <input
                  className="email id"
                  placeholder="fakeID"
                  required
                  value={userid}
                  onChange={(e) => setForm({ ...form, userid: e.target.value })}
                />
                <span style={{ color: "#b5b5b5" }}> @ </span>
                <input
                  className="email id"
                  placeholder="asong.com"
                  required
                  value={useremail}
                  onChange={(e) =>
                    setForm({ ...form, useremail: e.target.value })
                  }
                />
              </div>

              {/* <div className="alert-text">이메일을 확인해주세요</div> */}

              {/* 비밀번호 */}
              <div style={{ position: "relative" }}>
                <input
                  className="password"
                  placeholder="12341234"
                  required
                  value={password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
              </div>

              {/* 로그인,회원가입 버튼 */}
              <div className="btn-section">
                <div
                  className={`do-login ${userConfirm ? "active" : ""}  ${
                    makeUser ? "active2" : ""
                  }`}
                >
                  이 정보로 로그인
                </div>
                <div
                  className={`do-signin ${userConfirm ? "active" : ""} ${
                    makeUser ? "active2" : ""
                  }`}
                >
                  이 정보로 회원가입
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
