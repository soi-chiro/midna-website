import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Test from "./Test";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
