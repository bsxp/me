import { createBrowserRouter, Outlet } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { BlogCategoryPage } from "./pages/blog/BlogCategoryPage";
import { BlogPage } from "./pages/blog/BlogPage";
import { BlogPostPage } from "./pages/blog/BlogPostPage";

// Root layout component
function RootLayout() {
  return (
    <div className="app w-svw h-svh">
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
        element: <BlogCategoryPage />,
      },
      {
        path: "blog/posts/:postId",
        element: <BlogPostPage />,
      },
    ],
  },
]);
