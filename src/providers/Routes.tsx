import React from "react";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useRecoilValue } from "recoil";
import { tabsState } from "../state/data";
import { Layout } from "../pages/Layout";
import { useParseData } from "../hooks/data";

export const Routes: React.FC = () => {
  useParseData();
  const tabs = useRecoilValue(tabsState);

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        ...tabs.map((tab) => ({
          path: tab.id,
          lazy: () => import(`../components/${tab.id}`),
        })),
        { path: "*", element: <Navigate to={tabs[0]?.id} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
