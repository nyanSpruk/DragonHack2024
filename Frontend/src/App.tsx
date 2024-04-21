import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import SubmitProblem from './pages/submitProblem';
import Navbar from './components/navbar/navbar';
import NotFound from './components/notfound/notfound';
import Predmeti from './pages/Predmeti/predmeti';
import Login from './pages/login/login';
import Predmet from './pages/Predmeti/[id]/page';
import SubmitProject from './pages/submitProject';
import Projects from './pages/projects/projects';
import Project from './pages/projects/[id]/page';
import { Toaster } from './components/ui/toaster';
import CompanyProjects from './pages/companyProjects/page';

function App() {
    return (
        <BrowserRouter>
            <div className="h-screen dark">
                <Navbar />
                <Toaster />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/submitProblem" element={<SubmitProblem />} />
                    <Route path="/submitProject" element={<SubmitProject />} />
                    <Route path="/predmeti" element={<Predmeti />} />
                    <Route path="/predmet/:id" element={<Predmet />} />
                    <Route path="/projects/:id" element={<Projects />} />
                    <Route path="/project/:id" element={<Project />} />
                    <Route path="/projects" element={<CompanyProjects />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
