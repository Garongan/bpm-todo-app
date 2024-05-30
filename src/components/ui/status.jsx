import {Clock, FileCheck2, FileX2, RefreshCcwDot} from "lucide-react";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Loader from "@/components/ui/loader.jsx";
import StatusComponent from "@/components/ui/status-component.jsx";

const Status = ({ status, setStatus }) => {
    const { groupTasks, loading } = useSelector((state) => state.groupTask);
    const [ onGoingCount, setOnGoingCount ] = useState(0);
    const [ inProcessCount, setInProcessCount ] = useState(0);
    const [ completedCount, setCompletedCount ] = useState(0);
    const [ canceledCount, setCanceledCount ] = useState(0);

    useEffect(() => {
        setOnGoingCount(groupTasks.filter(item => item.status === "on-going").length);
        setInProcessCount(groupTasks.filter(item => item.status === "in-process").length);
        setCompletedCount(groupTasks.filter(item => item.status === "completed").length);
        setCanceledCount(groupTasks.filter(item => item.status === "canceled").length);
    }, [ groupTasks ]);

    if (loading) return <Loader/>;

    return (
        <div className="grid grid-cols-2 gap-4">
            <StatusComponent icon={ <RefreshCcwDot className="h-4 md:h-10 w-4 md:w-10"/> } setStatus={ setStatus } status={ status }
                             defaultColor="bg-blue-400" title="on-going" activeColor="bg-blue-200"
                             count={ onGoingCount }/>

            <StatusComponent icon={ <Clock className="h-4 md:h-10 w-4 md:w-10" /> } setStatus={ setStatus } status={ status }
                             defaultColor="bg-lime-400" title="in-process" activeColor="bg-lime-200"
                             count={ inProcessCount }/>

            <StatusComponent icon={ <FileCheck2 className="h-4 md:h-10 w-4 md:w-10"/> } setStatus={ setStatus } status={ status }
                             defaultColor="bg-teal-500" title="completed" activeColor="bg-teal-300"
                             count={ completedCount }/>

            <StatusComponent icon={ <FileX2 className="h-4 md:h-10 w-4 md:w-10"/> } setStatus={ setStatus } status={ status }
                             defaultColor="bg-red-400" title="canceled" activeColor="bg-red-200"
                             count={ canceledCount }/>
        </div>
    );
};

Status.propTypes = {
    status: PropTypes.string,
    setStatus: PropTypes.func
};

export default Status;
