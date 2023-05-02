import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Service from "./components/Service.jsx";
import Footer from './components/Footer';

import "./styles/App.scss"
import "./styles/Header.scss"
import "./styles/Home.scss"
import "./styles/Footer.scss"
import "./styles/Contact.scss"
import "./styles/mediaquery.scss"


function App() {
  return (
   <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />
    </Routes>
    <Footer / >
   </Router>
  );
}

export default App;
