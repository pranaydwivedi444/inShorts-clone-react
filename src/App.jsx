import { createBrowserRouter, Outlet  } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar.component";
import NewsPage from "./pages/NewsPage";
import SideBar from "./components/SideBar.component";
import { useState } from "react";
import ArticlePage from "./pages/ArticlePage";



function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <NavBar toggleSidebar={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="mt-20">
        <Outlet />
      </main>
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/category/:name",
        element: <NewsPage />,
      },
      {
        path: "/news/:name",
        element: <ArticlePage />,
      },
    ],
  },
]);

export default AppLayout
