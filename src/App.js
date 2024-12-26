import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Homepage from "./Components/Home_Page/home-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Home_Page/Navbar/navbar";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import Resturant from "./Components/Resturant/Resturant";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import "react-toastify/dist/ReactToastify.css";
import ProductDetails from "./Components/Resturant/ProductDetails/ProductDetails";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: < Navbar />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "ProductDetails/:product_id",
          element: <ProductDetails />,
        },
        {
          path: "/Resturant",
          element: <Resturant />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
