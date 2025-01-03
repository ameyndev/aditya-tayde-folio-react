// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Designs from "./pages/Designs";
import Videos from "./pages/Videos";
import Photography from "./pages/Photography";
import Footer from "./components/Footer";


function App() {

  return (
    <>
      <BrowserRouter>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/designs" element={<Designs />} />
            <Route path="/video-videography" element={<Videos />} />
            <Route path="/photography" element={<Photography />} />
          </Routes>
          <Footer />
        </Router>
      </BrowserRouter>
    </>
  )
}

export default App
