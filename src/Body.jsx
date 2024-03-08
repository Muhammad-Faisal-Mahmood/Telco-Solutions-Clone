import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import ContactUsPage from "./components/contactUs/index";
import BlogPage from "./components/Blog/index";
import PartnerProgram from "./components/PartnerProgram/index";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/contact",
      element: <ContactUsPage />,
    },
    {
      path: "/blog",
      element: <BlogPage />,
    },
    {
      path: "/partner-program",
      element: <PartnerProgram />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
