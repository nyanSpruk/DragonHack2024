import { getLogStatus, getUser } from '@/lib/auth';
import Predmeti from '../Predmeti/predmeti';
import Login from '../login/login';
import Projects from '../projects/projects';

function Home() {
    return (
        <div className="flex justify-center items-center h-screen">
            {/* if not logged in, show loginpage, if logged in and student@student.si show predmeti, else show projects */}
            {getLogStatus() ? (
                <div>
                    {getUser() === 'student@student.si' ? (
                        <Predmeti />
                    ) : (
                        <Projects />
                    )}
                </div>
            ) : (
                <Login />
            )}
        </div>
    );
}

export default Home;
