import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";
import Layout from "./layout/FirstPage";
import NotFound from "./pages/404Error/NotFound";
import Product from "./pages/Product";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" errorElement={<NotFound />} element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />{" "}
          <Route path="/about/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
