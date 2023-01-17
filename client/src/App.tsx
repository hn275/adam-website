import { Routes, Route } from "react-router-dom";
import { HomePage, AboutPage, ServicePage } from "pages";
import "./reset.css";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>
    </div>
  );
}
