import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
type Data = {
    title: string;
    overview: string;
    description: string;
    podjetje: string;
    email: string;
};
function Project() {
    const { id } = useParams();
    console.log(id);
    // /challenges/<int:pk>/
    const [data, setChallenge] = useState<Data>([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/challenges/' + id)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setChallenge(data);
            });
    }, []);
    const { toast } = useToast();
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        setIsDisabled(true);

        toast({
            variant: 'success',
            title: 'Application submitted',
            description:
                'Your application has been submitted. You will receive an email with further instructions.',
        });
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="p-8 sm:w-2/3 ">
                <Card className="w-full">
                    <CardHeader className="text-3xl">
                        {data.podjetje}: {data.title}
                    </CardHeader>
                    <Separator className="mb-4" />
                    <CardContent>
                        <h2 className="text-xl font-semibold">
                            Company Overview:
                        </h2>
                        <p className="text-wrap break-words">
                            {data.description}
                        </p>
                        <br></br>
                        <h2 className="text-xl font-semibold text-wrap">
                            Objective:
                        </h2>
                        <p className="text-wrap break-words">{data.overview}</p>
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
