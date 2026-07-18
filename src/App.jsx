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
import {
  BandLeader,
  DancePerformances,
  Education,
  Experiences,
  Projects,
  Skills,
} from "./components";

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

      {
        path: "bandleader",
        element: <BandLeader />,
      },

      {
        path: "dance",
        element: <DancePerformances />,
      },

      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
