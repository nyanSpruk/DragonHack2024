import { Button } from '@/components/ui/button';

function Description() {
    const data = {
        id: '1',
        title: 'Astra AI: Optimizing Prompts for Mathematical Problem Solving',
        overview:
            "Astra AI is an innovative educational tool designed to enhance students' mathematical problem-solving skills through optimized prompts. With a focus on personalized learning and cognitive optimization, Astra AI aims to revolutionize the way students engage with mathematical concepts, fostering deeper understanding and confidence in tackling complex problems.",
        objective:
            'The student’s primary objective is to optimize the mathematical algorithms to achieve higher compute speed. We shall provide a mentor and some advance algorithms. The student shall implement and test the efficiency and reliability of these methods and try to find the best way of computing some mathematical problems.',
        email: 'example@example.com',
    };

    return (
        <div>
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <br></br>
            <h2 className="text-xl font-semibold">Overview</h2>
            <p>{data.overview}</p>
            <br></br>
            <h2 className="text-xl font-semibold">Objective:</h2>
            <p>{data.objective}</p>
            <br></br>
            <p>Email: {data.email}</p>
            <br></br>
            <Button>Apply for project</Button>
        </div>
    );
}

export default Description;
