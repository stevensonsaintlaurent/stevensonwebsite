import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Contact,
  ErrorElement,
  HomeLayout,
  Landing,
  Portfolio,
  Services,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorElement />,
    children: [
      { index: true, element: <Landing /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "porfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
