import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Navbar from './components/Navbar';

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </Router>
        </>
    )
}

export default App