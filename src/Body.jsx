import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import ContactUsPage from "./components/contactUs/index";
import BlogPage from "./components/Blog/index";
import PartnerProgram from "./components/PartnerProgram/index";
import About from "./components/About/index";
import CurrentCustoemrs from "./components/About/CurrentCustomers/index";
import Carriers from "./components/About/Carriers/index";
import Testimonials from "./components/About/Testimonials/index";
import VOIPHostedPBX from "./components/Products/VOIPHostedPBX/index";
import BusinessFiber from "./components/Products/BusinessFiber/index";
import T1Services from "./components/Products/T1Services/index";

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
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/current-customers",
      element: <CurrentCustoemrs />,
    },
    {
      path: "/carriers",
      element: <Carriers />,
    },
    {
      path: "/testimonials",
      element: <Testimonials />,
    },
    {
      path: "/products/voip-hosted-pbx",
      element: <VOIPHostedPBX />,
    },
    {
      path: "/products/business-fiber",
      element: <BusinessFiber />,
    },
    {
      path: "/products/t1-services",
      element: <T1Services />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
