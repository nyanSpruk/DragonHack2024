import { Button } from '@/components/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from '@/components/ui/command';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { CommandList } from 'cmdk';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const fakultete = [
    {
        value: '1',
        label: 'Faculty of Mathematics and Physics',
    },
    {
        value: '2',
        label: 'Faculty of Computer and Information Science',
    },
    {
        value: '3',
        label: 'Faculty of Mechanical Engineering',
    },
    {
        value: '4',
        label: 'Faculty of Civil and Geodetic Engineering',
    },
    {
        value: '5',
        label: 'Faculty of Electrical Engineering',
    },
    {
        value: '6',
        label: 'Faculty of Chemistry and Chemical Technology',
    },
    {
        value: '7',
        label: 'Faculty of Natural Sciences',
    },
    {
        value: '8',
        label: 'Faculty of Biotechnology',
    },
    {
        value: '9',
        label: 'Faculty of Pharmacy',
    },
    {
        value: '10',
        label: 'Faculty of Medicine',
    },
    {
        value: '11',
        label: 'Faculty of Veterinary Medicine',
    },
    {
        value: '12',
        label: 'Faculty of Agriculture and Life Sciences',
    },
    {
        value: '13',
        label: 'Faculty of Environmental Protection',
    },
    {
        value: '14',
        label: 'Faculty of Geosciences',
    },
];
const tags = [
    { value: 1, label: 'Mechanical Engineering' },
    { value: 2, label: 'Electrical Engineering' },
    { value: 3, label: 'Computer Engineering' },
    { value: 4, label: 'Civil Engineering' },
    { value: 5, label: 'Aerospace Engineering' },
    { value: 6, label: 'Biomedical Engineering' },
    { value: 7, label: 'Chemical Engineering' },
    { value: 8, label: 'Materials Science' },
    { value: 9, label: 'Robotics' },
    { value: 10, label: 'Mechatronics' },
    { value: 11, label: 'Artificial Intelligence' },
    { value: 12, label: 'Machine Learning' },
    { value: 13, label: 'Data Science' },
    { value: 14, label: 'Software Engineering' },
    { value: 15, label: 'Computer Vision' },
    { value: 16, label: 'Natural Language Processing' },
    { value: 17, label: 'Human-Computer Interaction' },
    { value: 18, label: 'Cybersecurity' },
    { value: 19, label: 'Database Systems' },
    { value: 20, label: 'Networking' },
    { value: 21, label: 'Biology' },
    { value: 22, label: 'Chemistry' },
    { value: 23, label: 'Physics' },
    { value: 24, label: 'Mathematics' },
    { value: 25, label: 'Environmental Science' },
    { value: 26, label: 'Ecology' },
    { value: 27, label: 'Genetics' },
    { value: 28, label: 'Microbiology' },
    { value: 29, label: 'Neuroscience' },
    { value: 30, label: 'Statistics' },
    { value: 31, label: 'Pure Mathematics' },
    { value: 32, label: 'Applied Mathematics' },
    { value: 33, label: 'Actuarial Science' },
    { value: 34, label: 'Mathematical Physics' },
    { value: 35, label: 'Computational Mathematics' },
    { value: 36, label: 'Numerical Analysis' },
    { value: 37, label: 'Algebra' },
    { value: 38, label: 'Geometry' },
    { value: 39, label: 'Topology' },
    { value: 40, label: 'Anatomy' },
    { value: 41, label: 'Biochemistry' },
    { value: 42, label: 'Pharmacology' },
    { value: 43, label: 'Physiology' },
    { value: 44, label: 'Public Health' },
    { value: 45, label: 'Epidemiology' },
    { value: 46, label: 'Health Informatics' },
    { value: 47, label: 'Medical Imaging' },
    { value: 48, label: 'Pharmaceutics' },
    { value: 49, label: 'Pharmaceutical Chemistry' },
    { value: 50, label: 'Pharmacognosy' },
    { value: 51, label: 'Clinical Pharmacy' },
    { value: 52, label: 'Pharmacy Practice' },
    { value: 53, label: 'Medicinal Chemistry' },
    { value: 54, label: 'Drug Delivery' },
    { value: 55, label: 'Animal Science' },
    { value: 56, label: 'Veterinary Medicine' },
    { value: 57, label: 'Animal Health' },
    { value: 58, label: 'Zoonotic Diseases' },
    { value: 59, label: 'Veterinary Pharmacology' },
    { value: 60, label: 'Animal Behavior' },
    { value: 61, label: 'Wildlife Conservation' },
    { value: 62, label: 'Animal Welfare' },
];

const subject = [
    {
        value: '1',
        label: 'Programming Fundamentals',
    },
    {
        value: '2',
        label: 'Data Structures and Algorithms',
    },
    {
        value: '3',
        label: 'Computer Systems and Architecture',
    },
    {
        value: '4',
        label: 'Operating Systems',
    },
    {
        value: '5',
        label: 'Database Systems',
    },
    {
        value: '6',
        label: 'Computer Networks',
    },
    {
        value: '7',
        label: 'Software Engineering',
    },
];

const formSchema = z.object({
    name: z.string().min(1).max(100),
    fakulteta: z.string().min(1).max(100),
    subject: z.string().min(1).max(100),
    tags: z.array(z.number()),
    description: z.string().min(100),
    objective: z.string().min(100),
    email: z.string().min(1).max(100),
});
function SubmitProject() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            fakulteta: '',
            subject: '',
            tags: [],
            description: '',
            objective: '',
            email: '',
        },
    });
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);

        // send the data to http://127.0.0.1:8000/api/project_add/
        // this is the format that the api expects
        // {
        //     "title": "",
        //     "description": "",
        //     "podjetje": "",
        //     "tags": [],
        //     "faks": null,
        //     "created_by": null,
        //     "predmet": null
        // }

        let outputData = {
            title: values.name,
            description: values.description,
            podjetje: 'zeroDays',
            tags: values.tags,
            faks: values.fakulteta,
            created_by: 1,
            predmet: values.subject,
        };

        fetch('http://127.0.0.1:8000/api/project_add/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(outputData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div className="justify-items-center">
            <div className="p-20 justify-items-center">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Project name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter a descriptive project name that matches its' educational goal."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        The name of the project you are
                                        submitting.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="fakulteta"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Faculty</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    className={cn(
                                                        'w-fit min-w-52 justify-between',
                                                        !field.value &&
                                                            'text-muted-foreground'
                                                    )}>
                                                    {field.value
                                                        ? fakultete.find(
                                                              (fakulteta) =>
                                                                  fakulteta.value ===
                                                                  field.value
                                                          )?.label
                                                        : 'Select faculty'}
                                                    <ChevronsUpDown className="ml-2 h-4 w-fit shrink-0 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[200px] h-[300px] p-0">
                                            <Command>
                                                <CommandInput placeholder="Search faculties..." />
                                                <CommandList className="overflow-y-scroll">
                                                    <CommandEmpty>
                                                        No faculty found.
                                                    </CommandEmpty>
                                                    <CommandGroup>
                                                        {fakultete.map(
                                                            (fakulteta) => (
                                                                <CommandItem
                                                                    value={
                                                                        fakulteta.label
                                                                    }
                                                                    key={
                                                                        fakulteta.value
                                                                    }
                                                                    onSelect={() => {
                                                                        form.setValue(
                                                                            'fakulteta',
                                                                            fakulteta.value
                                                                        );
                                                                        console.log(
                                                                            fakulteta.value
                                                                        );
                                                                    }}>
                                                                    <Check
                                                                        className={cn(
                                                                            'mr-2 h-4 w-fit',
                                                                            fakulteta.value ===
                                                                                field.value
                                                                                ? 'opacity-100'
                                                                                : 'opacity-0'
                                                                        )}
                                                                    />
                                                                    {
                                                                        fakulteta.label
                                                                    }
                                                                </CommandItem>
                                                            )
                                                        )}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    <FormDescription>
                                        The faculty at which your class is held.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Subject</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    className={cn(
                                                        'w-fit min-w-52 justify-between',
                                                        !field.value &&
                                                            'text-muted-foreground'
                                                    )}>
                                                    {field.value
                                                        ? subject.find(
                                                              (subject) =>
                                                                  subject.value ===
                                                                  field.value
                                                          )?.label
                                                        : 'Select subject'}
                                                    <ChevronsUpDown className="ml-2 h-4 w-fit shrink-0 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[200px] h-[300px] p-0">
                                            <Command>
                                                <CommandList className="overflow-y-scroll">
                                                    <CommandEmpty>
                                                        No subject found.
                                                    </CommandEmpty>
                                                    <CommandGroup>
                                                        {subject.map(
                                                            (subject) => (
                                                                <CommandItem
                                                                    value={
                                                                        subject.label
                                                                    }
                                                                    key={
                                                                        subject.value
                                                                    }
                                                                    onSelect={() => {
                                                                        form.setValue(
                                                                            'subject',
                                                                            subject.value
                                                                        );
                                                                        console.log(
                                                                            subject.value
                                                                        );
                                                                    }}>
                                                                    <Check
                                                                        className={cn(
                                                                            'mr-2 h-4 w-fit',
                                                                            subject.value ===
                                                                                field.value
                                                                                ? 'opacity-100'
                                                                                : 'opacity-0'
                                                                        )}
                                                                    />
                                                                    {
                                                                        subject.label
                                                                    }
                                                                </CommandItem>
                                                            )
                                                        )}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    <FormDescription>
                                        The faculty at which your class is held.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="tags"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Tags</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    className={cn(
                                                        'w-fit min-w-52 justify-between',
                                                        !field.value.length &&
                                                            'text-muted-foreground'
                                                    )}>
                                                    {field.value.length
                                                        ? field.value
                                                              .map(
                                                                  (tag) =>
                                                                      tags.find(
                                                                          (t) =>
                                                                              t.value ===
                                                                              tag
                                                                      )?.label
                                                              )
                                                              .join(', ')
                                                        : 'Select tags'}
                                                    <ChevronsUpDown className="ml-2 h-4 w-fit shrink-0 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[200px] h-[300px]  p-0">
                                            <Command>
                                                <CommandInput />
                                                <CommandList className="overflow-y-scroll">
                                                    <CommandEmpty>
                                                        No tags found.
                                                    </CommandEmpty>
                                                    <CommandGroup>
                                                        {tags.map((tag) => (
                                                            <CommandItem
                                                                value={
                                                                    tag.label
                                                                }
                                                                key={tag.value}
                                                                onSelect={() => {
                                                                    const existingTags =
                                                                        field.value ||
                                                                        [];
                                                                    if (
                                                                        !existingTags.includes(
                                                                            tag.value
                                                                        )
                                                                    ) {
                                                                        form.setValue(
                                                                            'tags',
                                                                            [
                                                                                ...existingTags,
                                                                                tag.value,
                                                                            ]
                                                                        );
                                                                    } else {
                                                                        form.setValue(
                                                                            'tags',
                                                                            existingTags.filter(
                                                                                (
                                                                                    t
                                                                                ) =>
                                                                                    t !==
                                                                                    tag.value
                                                                            )
                                                                        );
                                                                    }
                                                                }}>
                                                                <Check
                                                                    className={cn(
                                                                        'mr-2 h-4 w-fit',
                                                                        field.value.includes(
                                                                            tag.value
                                                                        )
                                                                            ? 'opacity-100'
                                                                            : 'opacity-0'
                                                                    )}
                                                                />
                                                                {tag.label}
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>

                                    <FormDescription>
                                        Select relevant tags for your problem.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Company Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Briefly describe your company and what you do."
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="objective"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Objective</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Describe your project in detail to optimize student and class matching."
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="example@email.com"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}

export default SubmitProject;
