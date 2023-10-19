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
import Favorite from "./Favorite";
import NotFound from "./404";
import MyNavbar from "./yk";
import Contact from "./Contact";
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
            children: [
              {
                path: "contact",
                element: <Contact />,
              },
            ],
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
      {
        path: "/favorite",
        element: <Favorite />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Router;
