import { createBrowserRouter, Navigate, Outlet, useLocation } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { lazy, Suspense, useEffect, useLayoutEffect } from "react";

// Everything except the landing page is split into its own chunk so a visit
// to "/" doesn't download the blog, contact, and project pages up front.
const loadBlogPage = () => import("./pages/blog/BlogPage");
const loadBlogPostPage = () => import("./pages/blog/BlogPostPage");
const loadContactPage = () => import("./pages/contact/ContactPage");
const loadProjectPage = () => import("./pages/project/ProjectDetailsPage_1");

const BlogPage = lazy(() => loadBlogPage().then((m) => ({ default: m.BlogPage })));
const BlogPostPage = lazy(() => loadBlogPostPage().then((m) => ({ default: m.BlogPostPage })));
const ContactPage = lazy(() => loadContactPage().then((m) => ({ default: m.ContactPage })));
const ProjectDetailsPage_1 = lazy(() =>
  loadProjectPage().then((m) => ({ default: m.ProjectDetailsPage_1 }))
);

// Warm the route chunks once the browser is idle so navigation stays instant.
function prefetchRoutes() {
  [loadProjectPage, loadBlogPage, loadBlogPostPage, loadContactPage].forEach(
    (load) => load().catch(() => {})
  );
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function gtag(...args: any[]): void;
}

// Root layout component
function RootLayout() {
  const location = useLocation();

  // Any time the page changes, scroll to the top
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  // Send pageview to GA4 on route change
  useEffect(() => {
    gtag("event", "page_view", {
      page_path: location.pathname + location.search,
    });
  }, [location.pathname, location.search]);

  useEffect(() => {
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 2000));
    idle(prefetchRoutes);
  }, []);

  return (
    <div className="app w-full min-h-svh overflow-x-hidden">
      {/* Keyed so every route change remounts and gets a short fade-in */}
      <div key={location.pathname} className="page-enter">
        <Suspense fallback={<div className="min-h-svh" style={{ backgroundColor: "#fafafa" }} />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

// Create the router with routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // Styled fallback for render/loader errors instead of React Router's
    // developer error screen
    errorElement: <NotFoundPage />,
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
        path: "blog/posts/:postId",
        element: <BlogPostPage />,
      },
      {
        // The old standalone about page was retired; the about section on
        // the home page replaces it
        path: "about",
        element: <Navigate to="/#about" replace />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "projects/:projectId",
        element: <ProjectDetailsPage_1 />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
