import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

type Subject = {
    title: string;
    id: number;
};
export default function Projects() {
    const { id } = useParams();

    const [subjects, setSubjects] = useState<Subject>([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/challenges-by-subject/' + id)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setSubjects(data);
            });
    }, []);

    return (
        <div className="flex h-full flex-col items-center p-8 gap-8">
            <h1 className="text-lg">Challenges</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {subjects.map((subject) => (
                    <a key={subject.id} href={`/project/${subject.id}`}>
                        <Button
                            key={subject.id}
                            className="w-64 h-24 text-wrap"
                            variant={'secondary'}>
                            {subject.title}
                        </Button>
                    </a>
                ))}
            </div>
        </div>
    );
}
