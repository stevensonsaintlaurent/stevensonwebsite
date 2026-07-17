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
import { Education, Experiences, Skills } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorElement />,
    children: [
      { index: true, element: <Landing /> },
      {
        path: "about",
        element: <About />,
      },
      { path: "services", element: <Services /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "experience",
        element: <Experiences />,
      },
      {
        path: "education",
        element: <Education />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
