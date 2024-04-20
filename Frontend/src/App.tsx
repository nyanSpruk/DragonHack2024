import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './components/ui/card';
import { Button } from './components/ui/button';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </Button>
                    <p className="">
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </CardContent>
            </Card>
        </>
    );
}

export default App;
