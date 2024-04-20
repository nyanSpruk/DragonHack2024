import { Button } from '../ui/button';

function NotFound() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="text-xl text-gray-700 mt-4">Page not found</p>
                <p className="text-md text-gray-600 my-2">
                    Sorry, we couldn't find the page you're looking for.
                </p>
                <a href="/" className="">
                    <Button>Go back home</Button>
                </a>
            </div>
        </div>
    );
}

export default NotFound;
