import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Project() {
    const { id } = useParams();
    const { toast } = useToast();
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        // Disable the button
        setIsDisabled(true);

        // Simulate the toast and other actions
        toast({
            variant: 'success',
            title: 'Application submitted',
            description:
                'Your application has been submitted. You will receive an email with further instructions.',
        });

        // Optionally re-enable the button after some actions or time
        // setTimeout(() => setIsDisabled(false), 5000); // Re-enable after 5 seconds
    };
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
        <div className="flex flex-col items-center justify-center">
            <div className="p-8 sm:w-2/3 ">
                <Card>
                    <CardHeader className="text-3xl">{data.title}</CardHeader>
                    <Separator className="mb-4" />
                    <CardContent>
                        <h2 className="text-xl font-semibold">
                            Company Overview:
                        </h2>
                        <p>{data.overview}</p>
                        <br></br>
                        <h2 className="text-xl font-semibold">Objective:</h2>
                        <p>{data.objective}</p>
                        <br></br>
                        <p>Email: {data.email}</p>
                        <br></br>
                        <Button onClick={handleClick} disabled={isDisabled}>
                            Apply for project
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Project;
