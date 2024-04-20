import { Badge } from '@/components/ui/badge';
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
        value: 'Faculty of Mathematics and Physics',
        label: 'Faculty of Mathematics and Physics',
    },
    {
        value: 'Faculty of Computer and Information Science',
        label: 'Faculty of Computer and Information Science',
    },
    {
        value: 'Faculty of Mechanical Engineering',
        label: 'Faculty of Mechanical Engineering',
    },
    {
        value: 'Faculty of Civil and Geodetic Engineering',
        label: 'Faculty of Civil and Geodetic Engineering',
    },
    {
        value: 'Faculty of Electrical Engineering',
        label: 'Faculty of Electrical Engineering',
    },
    {
        value: 'Faculty of Chemistry and Chemical Technology',
        label: 'Faculty of Chemistry and Chemical Technology',
    },
    {
        value: 'Faculty of Natural Sciences',
        label: 'Faculty of Natural Sciences',
    },
    {
        value: 'Faculty of Biotechnology',
        label: 'Faculty of Biotechnology',
    },
    {
        value: 'Faculty of Pharmacy',
        label: 'Faculty of Pharmacy',
    },
    {
        value: 'Faculty of Medicine',
        label: 'Faculty of Medicine',
    },
    {
        value: 'Faculty of Veterinary Medicine',
        label: 'Faculty of Veterinary Medicine',
    },
    {
        value: 'Faculty of Agriculture and Life Sciences',
        label: 'Faculty of Agriculture and Life Sciences',
    },
    {
        value: 'Faculty of Environmental Protection',
        label: 'Faculty of Environmental Protection',
    },
    {
        value: 'Faculty of Geosciences',
        label: 'Faculty of Geosciences',
    },
];
const tags = [
    { value: 'mechanical-engineering', label: 'Mechanical Engineering' },
    { value: 'electrical-engineering', label: 'Electrical Engineering' },
    { value: 'computer-engineering', label: 'Computer Engineering' },
    { value: 'civil-engineering', label: 'Civil Engineering' },
    { value: 'aerospace-engineering', label: 'Aerospace Engineering' },
    { value: 'biomedical-engineering', label: 'Biomedical Engineering' },
    { value: 'chemical-engineering', label: 'Chemical Engineering' },
    { value: 'materials-science', label: 'Materials Science' },
    { value: 'robotics', label: 'Robotics' },
    { value: 'mechatronics', label: 'Mechatronics' },
    { value: 'artificial-intelligence', label: 'Artificial Intelligence' },
    { value: 'machine-learning', label: 'Machine Learning' },
    { value: 'data-science', label: 'Data Science' },
    { value: 'software-engineering', label: 'Software Engineering' },
    { value: 'computer-vision', label: 'Computer Vision' },
    {
        value: 'natural-language-processing',
        label: 'Natural Language Processing',
    },
    {
        value: 'human-computer-interaction',
        label: 'Human-Computer Interaction',
    },
    { value: 'cybersecurity', label: 'Cybersecurity' },
    { value: 'database-systems', label: 'Database Systems' },
    { value: 'networking', label: 'Networking' },
    { value: 'biology', label: 'Biology' },
    { value: 'chemistry', label: 'Chemistry' },
    { value: 'physics', label: 'Physics' },
    { value: 'mathematics', label: 'Mathematics' },
    { value: 'environmental-science', label: 'Environmental Science' },
    { value: 'ecology', label: 'Ecology' },
    { value: 'genetics', label: 'Genetics' },
    { value: 'microbiology', label: 'Microbiology' },
    { value: 'neuroscience', label: 'Neuroscience' },
    { value: 'statistics', label: 'Statistics' },
    { value: 'pure-mathematics', label: 'Pure Mathematics' },
    { value: 'applied-mathematics', label: 'Applied Mathematics' },
    { value: 'statistics', label: 'Statistics' },
    { value: 'actuarial-science', label: 'Actuarial Science' },
    { value: 'mathematical-physics', label: 'Mathematical Physics' },
    { value: 'computational-mathematics', label: 'Computational Mathematics' },
    { value: 'numerical-analysis', label: 'Numerical Analysis' },
    { value: 'algebra', label: 'Algebra' },
    { value: 'geometry', label: 'Geometry' },
    { value: 'topology', label: 'Topology' },
    { value: 'anatomy', label: 'Anatomy' },
    { value: 'biochemistry', label: 'Biochemistry' },
    { value: 'microbiology', label: 'Microbiology' },
    { value: 'pharmacology', label: 'Pharmacology' },
    { value: 'physiology', label: 'Physiology' },
    { value: 'public-health', label: 'Public Health' },
    { value: 'epidemiology', label: 'Epidemiology' },
    { value: 'health-informatics', label: 'Health Informatics' },
    { value: 'medical-imaging', label: 'Medical Imaging' },
    { value: 'pharmaceutics', label: 'Pharmaceutics' },
    { value: 'pharmacology', label: 'Pharmacology' },
    { value: 'pharmaceutical-chemistry', label: 'Pharmaceutical Chemistry' },
    { value: 'pharmacognosy', label: 'Pharmacognosy' },
    { value: 'clinical-pharmacy', label: 'Clinical Pharmacy' },
    { value: 'pharmacy-practice', label: 'Pharmacy Practice' },
    { value: 'medicinal-chemistry', label: 'Medicinal Chemistry' },
    { value: 'drug-delivery', label: 'Drug Delivery' },
    { value: 'animal-science', label: 'Animal Science' },
    { value: 'veterinary-medicine', label: 'Veterinary Medicine' },
    { value: 'animal-health', label: 'Animal Health' },
    { value: 'zoonotic-diseases', label: 'Zoonotic Diseases' },
    { value: 'veterinary-pharmacology', label: 'Veterinary Pharmacology' },
    { value: 'animal-behavior', label: 'Animal Behavior' },
    { value: 'wildlife-conservation', label: 'Wildlife Conservation' },
    { value: 'animal-welfare', label: 'Animal Welfare' },
];
const Tag = ({ tag, onClose }) => (
    <Badge variant="default" className="mr-2">
        {tag.label}
        <Button
            aria-label="Remove tag"
            className="ml-1"
            onClick={onClose}></Button>
    </Badge>
);
const formSchema = z.object({
    name: z.string().min(1).max(100),
    fakulteta: z.string().min(1).max(100),
    tags: z.array(z.string().min(1).max(100)),
    description: z.string().min(1),
});
function SubmitProblem() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            fakulteta: '',
            tags: [],
            opis: '',
        },
    });
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
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
                                    <FormLabel>Problem name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="concise and descriptive, for example: testing smart home solutions"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        The name of the problem you are
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
                                        <PopoverContent className="w-[200px] p-0">
                                            <Command>
                                                <CommandList>
                                                    <CommandInput placeholder="Search faculties..." />
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
                                        The faculty you are submitting your
                                        problem to.
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
                                    <FormLabel>Description</FormLabel>
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

                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}

export default SubmitProblem;
