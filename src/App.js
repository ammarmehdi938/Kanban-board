import { BrowserRouter } from "react-router-dom";
import Layout from "./pages/layOut/layOut";
import AppRoutes from "./routes";
export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
