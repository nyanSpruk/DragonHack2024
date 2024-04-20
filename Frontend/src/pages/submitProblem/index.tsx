import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
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
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
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
const formSchema = z.object({
    name: z.string().min(1).max(100),
    fakulteta: z.string().min(1).max(100),
    tags: z.array(z.string().min(1).max(100)),
    opis: z.string().min(1),
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
        <div className='justify-items-center'>
        <div className='p-20 justify-items-center'>
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
                                    <Input placeholder="concise and descriptive, for example: testing smart home solutions" {...field} />
                                </FormControl>
                                <FormDescription>
                                    The name of the problem you are submitting.
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
                                                    'w-fit justify-between',
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
                                                {fakultete.map((fakulteta) => (
                                                    <CommandItem
                                                        value={fakulteta.label}
                                                        key={fakulteta.value}
                                                        onSelect={() => {
                                                            form.setValue(
                                                                'fakulteta',
                                                                fakulteta.value
                                                            );
                                                            console.log(fakulteta.value);
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
                                                        {fakulteta.label}
                                                    </CommandItem>
                                                ))}
                                                </CommandGroup>
                                                </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <FormDescription>
                                    The faculty you are submitting your problem to.
                                </FormDescription>
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
