import { useState } from 'react';
import './App.css';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from './components/ui/card';
import { Button } from './components/ui/button';
import Predmeti from './pages/Predmeti/predmeti';

function App() {
    const [count, setCount] = useState(0);
    const HelloWorld = () => {
        console.log('Hello World');
    }

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <div>Card content is here</div>
                    <Button onClick={   HelloWorld}>
                        count is {count}
                    </Button>
                    <p className="">
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </CardContent>
            </Card>
            <Predmeti />
        </>
    );
}

export default App;
