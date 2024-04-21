import { Button } from '@/components/ui/button';

export default function Projects() {
    // create json data array of objects with name subject
    const projects = [
        {
            id: '1',
            name: 'Astra AI: Optimizing Prompts for Mathematical Problem Solving',
        },
        {
            id: '2',
            name: 'Astra AI: Optimizing Prompts for Mathematical Problem Solving',
        },
        {
            id: '3',
            name: 'Astra AI: Optimizing Prompts for Mathematical Problem Solving',
        },
        {
            id: '4',
            name: 'Astra AI: Optimizing Prompts for Mathematical Problem Solving',
        },
    ];

    return (
        <div className="flex h-full flex-col items-center p-8 gap-8">
            <h1 className="text-lg">Projects</h1>
            <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-8 ">
                {projects.map((project) => (
                    <a href={`/project/${project.id}`}>
                        <Button
                            key={project.id}
                            className="w-full h-24 text-wrap"
                            variant={'outline'}>
                            {project.name}
                        </Button>
                    </a>
                ))}
            </div>
        </div>
    );
}
