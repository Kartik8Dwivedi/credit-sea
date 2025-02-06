import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/UploadPage.jsx";
import ReportsPage from "./pages/ReportsPage.jsx";
import HomePage from "./pages/HomePage";
import ReportDetail from "./pages/ReportDetail.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4 flex justify-center items-center min-h-[85vh]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/reports/:id" element={<ReportDetail />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
