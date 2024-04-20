import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Predmeti() {
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
    <div>
      <h1>Predmeti</h1>
      <div className="flex gap-8">
        {subjects.map((subject) => (
          <Link key={subject.id} to={`/predmeti/${subject.id}`} className="w-1/2">
            <Card>
              <CardHeader>
                <h3>{subject.id}</h3>
              </CardHeader>
              <CardContent>
                <h2>{subject.name}</h2>
                <p>Opis predmeta</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
