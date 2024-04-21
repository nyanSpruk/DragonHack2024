import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

type Subject = {
    title: string;
    id: number;
};

export default function Predmeti() {
    const [subjects, setSubjects] = useState<Subject>([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/students/2/subjects/')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setSubjects(data);
            });
    }, []);

    return (
        <div className="flex h-full flex-col items-center p-8 gap-8">
            <h1 className="text-lg">Courses</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {subjects.map((subject) => (
                    <a href={`/projects/${subject.id}`}>
                        <Button
                            key={subject.id}
                            className="w-64 h-24 text-wrap"
                            variant={'outline'}>
                            {subject.title}
                        </Button>
                    </a>
                ))}
            </div>
        </div>
    );
}
