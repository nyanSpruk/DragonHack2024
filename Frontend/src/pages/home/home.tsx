import { getLogStatus, getUser } from '@/lib/auth';
import Predmeti from '../Predmeti/predmeti';
import Login from '../login/login';
import Projects from '../projects/projects';

function Home() {
    return (
        <div className="flex h-screen">
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
                <div className="justify-center items-center">
                    <Login />
                </div>
            )}
        </div>
    );
}

export default Home;
