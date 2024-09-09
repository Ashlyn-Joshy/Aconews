import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//components and pages
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./page.js/Home";
import ErrorPage from "./page.js/ErrorPage";

const AppComponent = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
