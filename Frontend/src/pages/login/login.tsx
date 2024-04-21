import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { setIsLoggedIn } from '@/lib/auth';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

function Login() {
    const { toast } = useToast();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(name);
        if (name !== 'student@student.si' && name !== 'zerodays@zerodays.si') {
            toast({
                variant: 'destructive',
                title: 'Invalid Login',
                description: 'Please enter valid credentials.',
            });
            return;
        }
        setIsLoggedIn(name);
        if (name === 'student@student.si') navigate('/predmeti');
        else navigate('/projects');
        location.reload();
    }
    return (
        <div className="flex justify-center items-center h-full">
            <Tabs defaultValue="login" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">Sign up</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <form onSubmit={handleSubmit}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Login</CardTitle>
                                <CardDescription>
                                    Login into your account.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="email">Username</Label>
                                    <Input
                                        onChange={(e) => {
                                            console.log(e.target.value);
                                            setName(e.target.value);
                                        }}
                                        id="email"
                                        placeholder="Ducklas.Mallard"
                                        type="email"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" type="password" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Login</Button>
                            </CardFooter>
                        </Card>
                    </form>
                </TabsContent>
                <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>Email</CardTitle>
                            <CardDescription>
                                Create a new account.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select account type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="student">
                                            Student
                                        </SelectItem>
                                        <SelectItem value="professor">
                                            Professor
                                        </SelectItem>
                                        <SelectItem value="company">
                                            Company
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="name">Account name</Label>
                                <Input id="name" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="current">New password</Label>
                                <Input id="current" type="password" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">Confirm password</Label>
                                <Input id="new" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Create Account</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default Login;
