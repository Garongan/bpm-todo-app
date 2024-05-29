import {useState} from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Check, ChevronsUpDown} from "lucide-react";
import {Command, CommandEmpty, CommandInput, CommandItem, CommandList} from "@/components/ui/command.jsx";
import {cn} from "@/lib/utils.js";
import {categories} from "@/components/ui/categories.js";

const CategoryFilter = () => {
    const [ open, setOpen ] = useState(false);
    const [ value, setValue ] = useState("");

    return (
        <Popover open={ open } onOpenChange={ setOpen }>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={ open }
                    className="justify-between p-4 md:p-7 shadow-custom border-2 rounded-xl text-[120%]"
                >
                    { value
                        ? categories.find((item) => item === value)
                        : "Select Category..." }
                    <ChevronsUpDown className="ml-2 h-4 md:h-8 w-4 md:w-8 shrink-0 opacity-50"/>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="mt-4 p-4" align="end">
                <Command label={ "Command Menu" }>
                    <CommandInput placeholder="Search framework..."/>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandList>
                        { categories.map((item) => (
                            <CommandItem
                                key={ item }
                                value={ item }
                                onSelect={ (currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue);
                                    setOpen(false);
                                } }
                            >
                                <Check
                                    className={ cn(
                                        "mr-2 h-4 w-4",
                                        value === item.value ? "opacity-100" : "opacity-0"
                                    ) }
                                />
                                { item }
                            </CommandItem>
                        )) }
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default CategoryFilter;
