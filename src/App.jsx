import Navbar from "./components/navbar/Navbar";
import "./App.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import JobPosts from "./pages/job-posts/JobPosts";
import JobPost from "./pages/job-post/JobPost";
import UserPost from "./pages/user-post/UserPost";
import Add from "./pages/add/Add";
import Messages from "./pages/messages/Messages";
import { Message } from "./pages/message/Message";
import Orders from "./pages/orders/Orders";

const App = () => {
  const Layout = () => {
    return (
      <div className="App">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/job-posts",
          element: <JobPosts />,
        },
        {
          path: "/job-post/:id",
          element: <JobPost />,
        },
        {
          path: "/userPost",
          element: <UserPost />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
