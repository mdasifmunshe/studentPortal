import { Routes, Route } from "react-router-dom";

import { Dashboard, Signin, Signup } from "./pages";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
