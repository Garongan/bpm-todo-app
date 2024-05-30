import PropTypes from "prop-types";
import {Button} from "@/components/ui/button.jsx";
import {toCapital} from "@/components/shared/to-capital.js";

const StatusComponent = ({ status, setStatus, title, count, icon, activeColor, defaultColor }) => {
    return (
        <div
            className={ `${ status === title ? activeColor : defaultColor } p-4 rounded-xl shadow-custom flex gap-2 items-center` }
            onClick={ () => {
                if (status === title) {
                    return setStatus("");
                } else {
                    return setStatus(title);
                }
            } }
        >
            <Button variant="ghost" size="icon" className="bg-zinc-100 border-0 rounded-full shadow-custom">
                { icon }
            </Button>
            <div>
                <h3 className="font-bold text-[110%]">{ title.split("-").map(item => toCapital(item) + " ") }</h3>
                <p>{ count } taks</p>
            </div>
        </div>
    );
};

StatusComponent.propTypes = {
    title: PropTypes.string,
    status: PropTypes.string,
    setStatus: PropTypes.func,
    count: PropTypes.number,
    icon: PropTypes.element,
    activeColor: PropTypes.string,
    defaultColor: PropTypes.string
};

export default StatusComponent;