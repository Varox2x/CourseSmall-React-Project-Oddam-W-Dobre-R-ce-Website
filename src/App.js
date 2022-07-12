import './settings/reset.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home_Page from "./components/home_page/Home_Page";


function App() {
  return (
      <Router>
              <Routes>
                  <Route path="/" element={<Home_Page/>}/>
              </Routes>
      </Router>
  );
}

export default App;
