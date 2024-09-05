import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import appStore from "./Utils/Redux/appStore.js";
import UserContext from "./Utils/UserContext.js";
import Body from "./components/Body.jsx";
import Cart from "./components/Cart.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import Footer from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Ordered from "./components/Ordered.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  const data = useContext(UserContext);

  useEffect(() => {
    //  make an api call send username and password
    const data = {
      name: "suraj rajput",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <>
          <Header />
          <Outlet />
          <Toaster position="bottom-right" reverseOrder={false} />
          <Footer />
        </>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
        errorElement: <Error />,
      },
      {
        path: "/restaurants",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/ordered",
        element: <Ordered />,
      },
      {
        path: "/restaurants/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
root.render(<RouterProvider router={appRouter} />);
// pollyfil it genartes the new code to old code that broweser may understand for: eg : array.map() to myMap() this is done by bable
// browser list conatains  list of broweser and is responsovle for telling bable for what it has to convert
// babel plugin transform remove console to remove console logs
