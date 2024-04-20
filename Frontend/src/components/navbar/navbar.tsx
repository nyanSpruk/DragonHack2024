const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">
                    <a href="/" className="hover:text-gray-300">
                        Logo
                    </a>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="hover:text-gray-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-gray-300">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/predmeti" className="hover:text-gray-300">
                            Predmeti
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:text-gray-300">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="/login" className="hover:text-gray-300">
                            Login
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
