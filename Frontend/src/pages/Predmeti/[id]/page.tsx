import { useParams } from 'react-router-dom';

function Predmet() {
    const { id } = useParams();

    const projects = [
        {
            id: 1,
            title: 'title 1',
            description: 'description 1',
            tags: ['tag1', 'tag2'],
            company: 'ZeroDays',
        },
        {
            id: 2,
            title: 'title 2',
            description: 'description 2',
            tags: ['tag1', 'tag2'],
            company: 'Mesi',
        },
        {
            id: 3,
            title: 'title 3',
            description: 'description 3',
            tags: ['tag1', 'tag2'],
            company: 'LeanIX',
        },
        {
            id: 4,
            title: 'title 4',
            description: 'description 4',
            tags: ['tag1', 'tag2'],
            company: 'HYCU',
        },
        {
            id: 5,
            title: 'title 5',
            description: 'description 5',
            tags: ['tag1', 'tag2'],
            company: 'Celtra',
        },
    ];

    return (
        <div>
            {projects.map((project) => {
                if (project.id === Number(id)) {
                    return (
                        <div key={project.id}>
                            <h1>{project.title}</h1>
                            <p>{project.description}</p>
                            <p>{project.tags.join(', ')}</p>
                            <p>{project.company}</p>
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default Predmet;
