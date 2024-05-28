import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const options = [
    { value: "on-going", label: "On Going", className: "bg-blue-400" },
    { value: "in-process", label: "In Process", className: "bg-lime-400" },
    { value: "completed", label: "Completed", className: "bg-teal-500" },
    { value: "canceled", label: "Canceled", className: "bg-red-400" },
];

const CustomSelect = ({ status }) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleChange = (event) => {
        const selected = options.find((option) => option.value === event.target.value);
        setSelectedOption(selected);
    };

    useEffect(() => {
        setSelectedOption(options.find((item) => item.value === status))
    }, [status])

    return (
        <div className="relative md:min-w-48 min-w-32">
            <select
                value={selectedOption?.value}
                onChange={handleChange}
                className={`h-10 md:h-20 rounded-xl appearance-none px-6 w-full leading-tight focus:outline-none focus:border-gray-500 ${selectedOption?.className}`}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value} className={option.className}>
                        {option.label}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
                <ChevronDown />
            </div>
        </div>
    );
};

CustomSelect.propTypes = {
    status: PropTypes.string,
};

export default CustomSelect;
