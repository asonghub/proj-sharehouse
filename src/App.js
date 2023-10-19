import Header from "./Header";
import Home from "./Home";
import { Outlet } from "react-router-dom";
import MyNavbar from "./yk";

function App() {
  return (
    <>
      {/* <MyNavbar /> */}
      <Header />
      <Outlet />
    </>
  );
}

export default App;
