import {Button} from "@/components/ui/button.jsx";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.jsx";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input.jsx";
import PropTypes from "prop-types";

const CustomSearch = ({ title, handleSearch, setSearchChange, searchChange }) => {
    return (
        <Dialog>
            <Button variant='outline' size="icon" className="bg-zinc-200/75 border-0 shadow-custom" asChild>
                <DialogTrigger>
                    <Search className="h-4 md:h-10 w-4 md:w-10"/>
                </DialogTrigger>
            </Button>
            <DialogContent className="max-w-sm sm:max-w-md rounded-xl">
                <form onSubmit={ event => {
                    event.preventDefault();
                    handleSearch();
                } }>
                    <DialogHeader>
                        <DialogTitle className="text-[110%] md:text-[150%]">{ title }</DialogTitle>
                    </DialogHeader>
                    <div className="flex items-center space-x-2">
                        <div className="grid flex-1 gap-2">
                            <Input type="text" placeholder={`${title.split(" ").pop()}...`}
                                   className="border-2 shadow-custom text-[100%] md:text-[120%] p-6 my-4"
                                   onChange={ (e) => setSearchChange(e.target.value) } value={ searchChange }/>
                        </div>
                    </div>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button type="submit"
                                    className="w-full border-2 text-[100%] md:text-[120%] p-6 shadow-custom">
                                Search
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

CustomSearch.propTypes = {
    title: PropTypes.string,
    handleSearch: PropTypes.func,
    setSearchChange: PropTypes.func,
    searchChange: PropTypes.string
};

export default CustomSearch;