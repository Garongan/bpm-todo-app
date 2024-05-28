import PropTypes from "prop-types";

const WeatherInfo = ({ iconCode, city, temp }) => {
    return (
        <div className="bg-zinc-200/75 shadow-custom rounded-xl">
            <div className="flex items-center justify-center gap-4">
                <div className="text-[120%]">{city && city}</div>
                {iconCode && (
                    <img
                        src={`https://openweathermap.org/img/wn/${iconCode}@4x.png`}
                        alt="Image"
                        className="drop-shadow-[2px_3px_rgba(0,0,0,1)] h-12 md:h-20"
                    />
                )}
                {temp && <div className="text-[120%]">{temp}&deg;C</div>}
            </div>
        </div>
    );
};

WeatherInfo.propTypes = {
    iconCode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
};

export default WeatherInfo;
