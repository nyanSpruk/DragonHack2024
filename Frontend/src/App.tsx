import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import SubmitProblem from './pages/submitProblem';
import Navbar from './components/navbar/navbar';
import NotFound from './components/notfound/notfound';
import Predmeti from './pages/Predmeti/predmeti';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/submitProblem" element={<SubmitProblem />} />
                <Route path="/predmeti" element={<Predmeti />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
