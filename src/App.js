import { BrowserRouter } from "react-router-dom";
import Layout from "./pages/layOut/layOut";

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
