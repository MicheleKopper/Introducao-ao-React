import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListaMercadoPage from "../../pages/ListaMercadoPage";
import PrecoFarinha from "../../pages/PrecoFarinha";
import PrecoAcucar from "../../pages/PrecoAcucar";
import PrecoOvos from "../../pages/PrecoOvos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListaMercadoPage />,
  },
  {
    path: "/precofarinha",
    element: <PrecoFarinha />,
  },
  {
    path: "/precoacucar",
    element: <PrecoAcucar />,
  },
  {
    path: "/precoovos",
    element: <PrecoOvos />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
