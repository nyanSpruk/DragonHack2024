import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Navbar from './components/navbar/navbar';
import NotFound from './components/notfound/notfound';
import Predmeti from './pages/Predmeti/predmeti';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/predmeti" element={<Predmeti />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;