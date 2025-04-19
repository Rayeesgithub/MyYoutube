import { Provider } from "react-redux";
import store from "./utlis/store.js";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Maincontainer from "./components/Maincontainer.js";
import Watchpage from "./components/Watchpage.js";
import Results from "./components/Results.js";

// 👇 Header inside Router
const AppLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />, // Body handles sidebar + content
        children: [
          {
            path: "/",
            element: <Maincontainer />,
          },
          {
            path: "watch",
            element: <Watchpage />,
          },
          {
            path: "results",
            element: <Results />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
