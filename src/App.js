import React from "react";
import StartPage from './views/StartPage';
import Home from "./pages/Home";
import './index.css'
import { BrowserRouter as Router, Routes,Route,} from 'react-router-dom'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
    </Router>
  );
}
export default App;
