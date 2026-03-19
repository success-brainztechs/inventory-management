import { useRoutes } from "react-router";
import AuthenticationRoutes from "./authentication-routes";
import PrivateRoutes from "./private-routes";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    ...AuthenticationRoutes,
    ...PrivateRoutes,
  ]);
}

