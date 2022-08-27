import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Certificate from "./Certificate/Certificate";
import CertificateA from "./CertificateA/CertificateA";
import CertificateB from "./CertificateB/CertificateB";
import Homepage from "./Homepage/Homepage";
import Login from "./Login/Login";
import Parish from "./Parish/Parish";
import View from "./View/View";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Homepage />} />
          <Route path="/view" element={<View />} />
          <Route path="/add" element={<Certificate />} />
          <Route path="/parish" element={<Parish />} />
          <Route path="/A" element={<CertificateA />} />
          <Route path="/B" element={<CertificateB />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
