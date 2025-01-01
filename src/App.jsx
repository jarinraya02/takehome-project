import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import BlogDetails from './pages/BlogDetails';

import './App.css'

function App() {
 
  return (
    <Router>
      <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
            path="/blog/:slug"
            element={<BlogDetails />} 
          />
      </Routes>
      </>
    </Router>
  )
}

export default App
