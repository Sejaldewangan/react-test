import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Friut from "./components/Friut";
import Toggle from "./components/Toggle";
import Input from "./components/Input";
import { Clock } from "./components/Clock";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Crud from "./components/Crud";
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Toggle /> },
      { path: "Friut", element: <Friut /> },
      { path: "input", element: <Input /> },
      {
        path: "clock",
        element: <Clock />,
      },
    {
      path: "Crud",
      element:<Crud/>
    },
      ,
      { path: "*", element: <NotFound /> },
    ],
  },
];
const router = createBrowserRouter(routes);
const App = () => {
  return (
    <div className="bg-slate-300 w-[100%] h-[100%]">
      {/* <h1 className='text-8xl'>hello</h1>
      <h1 className='text-8xl'>i am sejal</h1>
      <h1 className='text-8xl'>dewangan</h1> */}
      {/* <Friut />
       <Toggle/> */}
      {/* <Input />
<Clock /> */}
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
