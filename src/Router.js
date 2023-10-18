import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import SearchRoom from "./SearchRoom";
import About from "./About";
import Enroll from "./Enroll";
import { Provider } from "react-redux";
import store from "./store";
import HouseDetail from "./HouseDetail";
import Login from "./Login";
const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "search",
        element: <SearchRoom />,
        children: [
          {
            path: ":houseId",
            element: <HouseDetail />,
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/enroll",
        element: <Enroll />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default Router;
