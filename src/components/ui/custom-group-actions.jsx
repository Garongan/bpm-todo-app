import {Button} from "@/components/ui/button.jsx";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog.jsx";
import {FilePenLine, Trash2} from "lucide-react";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Loader from "@/components/ui/loader.jsx";
import {updateGroupTaskRequest} from "@/actions/actions.js";

const CustomGroupActions = ({ id }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { groupTasks, loading } = useSelector((state) => state.groupTask);

    const handleUpdate = () => {
        navigate(`group/update/${ id }`);
    };

    const handleDelete = () => {
        const filteredGroupTasks = groupTasks.filter(item => item.id !== id);
        dispatch(updateGroupTaskRequest(filteredGroupTasks));
    };

    return (
        <div className="space-x-4">
            <Button variant="outline" size="icon" className="bg-zinc-200/75 border-0 shadow-custom"
                    onClick={ handleUpdate }>
                <FilePenLine className="h-4 md:h-10 w-4 md:w-10"/>
            </Button>
            <AlertDialog>
                <AlertDialogTrigger
                    className="inline-flex items-center justify-center h-10 md:h-16 w-10 md:w-16 rounded-xl bg-red-400 border-0 shadow-custom">
                    <Trash2 className="h-4 md:h-10 w-4 md:w-10"/>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Apakah Anda Yakin Ingin Menghapus Data Ini?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            Data yang sudah dihapus tidak dapat dikembalikan.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={ handleDelete }
                        >
                            { loading ? <Loader/> : "Continue" }
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

CustomGroupActions.propTypes = {
    id: PropTypes.number
};

export default CustomGroupActions;