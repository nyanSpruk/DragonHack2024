import { Button } from '@/components/ui/button';
import { Subject } from 'node_modules/react-hook-form/dist/utils/createSubject';
import { useState, useEffect } from 'react';

function CompanyProjects() {
    const [projects, setProjects] = useState<Subject>([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/predlogs/')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProjects(data);
            });
    }, []);

    return (
        <div className="flex h-full flex-col items-center p-8 gap-8">
            <h1 className="text-lg">Projects</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {projects.map((project) => (
                    <a>
                        <Button
                            key={project.id}
                            className="w-64 h-24 text-wrap"
                            variant={'outline'}>
                            {project.title}
                        </Button>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default CompanyProjects;
