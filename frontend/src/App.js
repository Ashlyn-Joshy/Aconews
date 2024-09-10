import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//components and pages
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./page.js/Home";
import ErrorPage from "./page.js/ErrorPage";
import Aboutus from "./page.js/Aboutus";
import GeneralNews from "./page.js/GeneralNews";
import SportsNews from "./page.js/SportsNews";
import BusinessNews from "./page.js/BusinessNews";
import WorldNews from "./page.js/WorldNews";
import NationNews from "./page.js/NationNews";
import TechnologyNews from "./page.js/TechnologyNews";
import ScienceNews from "./page.js/ScienceNews";
import HealthNews from "./page.js/HealthNews";
import EntertainmentNews from "./page.js/EntertainmentNews";

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
      {
        path: "/aboutus",
        element: <Aboutus />,
      },
      {
        path: "/general",
        element: <GeneralNews />,
      },
      {
        path: "/sports",
        element: <SportsNews />,
      },
      {
        path: "/business",
        element: <BusinessNews />,
      },
      {
        path: "/world",
        element: <WorldNews />,
      },
      {
        path: "/nation",
        element: <NationNews />,
      },
      {
        path: "/technology",
        element: <TechnologyNews />,
      },
      {
        path: "/science",
        element: <ScienceNews />,
      },
      {
        path: "/health",
        element: <HealthNews />,
      },
      {
        path: "/entertainment",
        element: <EntertainmentNews />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
