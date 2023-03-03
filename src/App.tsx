import { Routes, Route } from "react-router-dom";
import { HomePage, AboutPage, ServicePage, CheckoutPage } from "pages";
import { Nav } from "modules/components";
import "./reset.css";
import "./globals.css";

export function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </>
  );
}
