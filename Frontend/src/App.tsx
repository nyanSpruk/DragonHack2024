import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import SubmitProblem from './pages/submitProblem';
import Navbar from './components/navbar/navbar';
import NotFound from './components/notfound/notfound';
import Predmeti from './pages/Predmeti/predmeti';
import Login from './pages/login/login';
import Predmet from './pages/Predmeti/[id]/page';

function App() {
    return (
        <BrowserRouter>
            <div className="h-screen">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/submitProblem" element={<SubmitProblem />} />
                    <Route path="/predmeti" element={<Predmeti />} />
                    <Route path="/predmet/:id" element={<Predmet />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
