import { Routes, Route } from "react-router-dom";
import { HomePage, AboutPage, ServicePage } from "pages";
import { Nav } from "commons/components";
import "./reset.css";

export function App() {
  return (
    <body>
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>
    </body>
  );
}
