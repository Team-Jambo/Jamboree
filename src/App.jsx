import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import About from "./pages/AboutUs";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import Sign from "./pages/Sign";
import RootLayout from "./layouts/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Landing /> },
        // { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/signIn", element: <Sign /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
