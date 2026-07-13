import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorElement, HomeLayout } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
