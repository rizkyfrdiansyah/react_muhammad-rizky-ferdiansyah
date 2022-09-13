import AboutScreen from "./About/about";
import "./App.css";
import HomeScreen from "./Home/home";
import FormContacts from "./form/form";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeScreen />} path="/" />
        <Route element={<AboutScreen />} path="/about" />
        <Route element={<FormContacts />} path="/form" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
