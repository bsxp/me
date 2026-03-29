import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
// import { BlogCategoryPage } from "./pages/blog/BlogCategoryPage";

import { BlogPage } from "./pages/blog/BlogPage";
import { BlogPostPage } from "./pages/blog/BlogPostPage";
import { BlogCategoryPageRevamp } from "./pages/blog/BlogCategoryPageRevamp";
import { AboutPage } from "./pages/about/AboutPage";
import { ProjectDetailsPage_1 } from "./pages/project/ProjectDetailsPage_1";
import { TestPage } from "./pages/test/TestPage";
import { useLayoutEffect } from "react";
// Root layout component
function RootLayout() {
  const location = useLocation();

  // Any time the page changes, scroll to the top
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app w-full min-h-svh overflow-x-hidden">
      <Outlet />
    </div>
  );
}

// Create the router with routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "blog/categories/:category",
        element: <BlogCategoryPageRevamp />,
      },
      {
        path: "blog/posts/:postId",
        element: <BlogPostPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "projects/:projectId",
        element: <ProjectDetailsPage_1 />,
      },
      {
        path: "test",
        element: <TestPage />,
      },
    ],
  },
]);
