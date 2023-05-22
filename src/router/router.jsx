import { createBrowserRouter } from "react-router-dom";
import { publicRoute } from "./publicRoute";
import { privateRoute } from "./privateRoute";

export const router = createBrowserRouter([...publicRoute, ...privateRoute]);
