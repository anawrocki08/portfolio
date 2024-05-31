import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
// import Resume from "./pages/Resume";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";

function App() {
  return (
    // <Router>
    <Router basename="/portfolio">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/cv" element={<Resume />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
