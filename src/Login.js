import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./css/login.scss";
import Favorite from "./Favorite";
import { loginAction } from "./store/login";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const isLogin = useSelector((state) => state.login.isLogin);
  const navi = useNavigate();
  const dispatch = useDispatch();
  // 리액트 훅 폼으로 바꾸기...
  const [form, setForm] = useState({
    userid: "",
    useremail: "",
    password: "",
    userConfirm: false,
    makeUser: false,
    validtext: "",
    validpw: "",
  });
  const [valid, setValid] = useState({
    vid: false,
    vemail: false,
    vpw: false,
  });

  let {
    userid,
    useremail,
    password,
    userConfirm,
    makeUser,
    validtext,
    validpw,
  } = form;

  useEffect(() => {
    const idRegExp = /^[A-Za-z0-9]/;
    const emailRegExp = /^[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    const pwRegExp = /^(?=.*[a-zA-Z0-9!@#$%^*+=-]).{8,}$/;
    let newForm = { ...form }; // 복사본을 만듭니다.

    if (userid === "fakeID" && useremail === "asong.com") {
      newForm = {
        ...newForm,
        userConfirm: true,
        makeUser: false,
        validtext: "나혼자산다 회원입니다. 비밀번호 입력 후 로그인하세요.",
      };
    } else if (idRegExp.test(userid) && emailRegExp.test(useremail)) {
      newForm = {
        ...newForm,
        makeUser: true,
        userConfirm: false,
        validtext: "비회원입니다. 비밀번호 입력 후 가입버튼을 눌러주세요.",
      };
    } else {
      newForm = { ...newForm, validtext: "이메일 형식이 올바르지 않습니다" };
    }

    if (pwRegExp.test(password)) {
      newForm = { ...newForm, validpw: "" };
    } else {
      newForm = { ...newForm, validpw: "비밀번호를 8자 이상 입력해주세요" };
      // console.log("??");
    }

    setForm(newForm);
  }, [userid, useremail, password]);

  const loginFunc = () => {
    if (password === "12341234") {
      dispatch(loginAction.login());
      navi(`/favorite`);
    } else {
      alert("비밀번호가 틀렸습니다 :(");
    }
  };

  return (
    <>
      {isLogin ? (
        <Favorite />
      ) : (
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
                    onChange={(e) =>
                      setForm({ ...form, userid: e.target.value })
                    }
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
                {userid !== "" && <div className="alert-text">{validtext}</div>}

                {/* 비밀번호 */}
                <div style={{ position: "relative" }}>
                  <input
                    className="password"
                    placeholder="12341234"
                    required
                    type="password"
                    value={password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                  />
                </div>
                {password !== "" && <div className="alert-text">{validpw}</div>}

                {/* 로그인,회원가입 버튼 */}
                <div className="btn-section">
                  <div
                    className={`do-login ${userConfirm ? "active" : ""}  ${
                      makeUser ? "active2" : ""
                    }`}
                    onClick={loginFunc}
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
      )}
    </>
  );
}
