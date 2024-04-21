import { getLogStatus, getUser } from '@/lib/auth';
import Predmeti from '../Predmeti/predmeti';
import Login from '../login/login';
import Projects from '../projects/projects';
import CompanyProjects from '../companyProjects/page';

function Home() {
    return (
        <div className="flex h-screen justify-center">
            {/* if not logged in, show loginpage, if logged in and student@student.si show predmeti, else show projects */}
            {getLogStatus() ? (
                <div>
                    {getUser() === 'student@student.si' ? (
                        <Predmeti />
                    ) : (
                        <>
                            {getUser() === 'zerodays@zerodays.si' ? (
                                <CompanyProjects />
                            ) : (
                                <Predmeti />
                            )}
                        </>
                    )}
                </div>
            ) : (
                <div className=" items-center">
                    <Login />
                </div>
            )}
        </div>
    );
}

export default Home;
