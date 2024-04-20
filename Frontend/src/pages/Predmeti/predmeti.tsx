import { Button } from '@/components/ui/button';

export default function Predmeti() {
    // create json data array of objects with name subject
    const subjects = [
        {
            name: 'Matematika',
            id: 1,
        },
        {
            name: 'Fizika',
            id: 2,
        },
        {
            name: 'Hemija',
            id: 3,
        },
        {
            name: 'Biologija',
            id: 4,
        },
        {
            name: 'Geografija',
            id: 5,
        },
        {
            name: 'Istorija',
            id: 6,
        },
        {
            name: 'Engleski jezik',
            id: 7,
        },
        {
            name: 'Nemacki jezik',
            id: 8,
        },
        {
            name: 'Francuski jezik',
            id: 9,
        },
    ];

    return (
        <div className="flex h-full flex-col items-center p-8 gap-8">
            <h1 className="text-lg">Predmeti</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
                {subjects.map((subject) => (
                    <a href={`/predmet/${subject.id}`}>
                        <Button
                            key={subject.id}
                            className="w-64 h-24"
                            variant={'outline'}>
                            {subject.name}
                        </Button>
                    </a>
                ))}
            </div>
        </div>
    );
}
