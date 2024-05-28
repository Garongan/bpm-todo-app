import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { CurrentWeatherByGeo } from "./api/api";
import { Button } from "./components/ui/button";
import Loader from "./components/ui/loader";
import WeatherInfo from "./components/ui/weather-info";
import Category from "./components/ui/category";
import Tasks from "./components/ui/tasks";
import NewTask from "./components/ui/new-task";

function App() {
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();
    const [iconCode, setIconCode] = useState();
    const [city, setCity] = useState();
    const [temp, setTemp] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const crd = pos.coords;
                setLat(crd.latitude);
                setLon(crd.longitude);
                CurrentWeatherByGeo(lat, lon).then((results) => {
                    // setIconCode(results.data.weather[0].icon);
                    // setCity(results.data.name);
                    // setTemp(results.data.main.temp);
                    setLoading(false);
                });
            },
            () => {
                setLoading(false);
            },
            { enableHighAccuracy: true, maximumAge: 0 }
        );
    }, [lat, lon]);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col justify-center">
                        <h2 className="flex gap-2 text-[150%] font-medium">Hi, Alvindo</h2>
                        <p className="text-[110%]">Create task fo today</p>
                    </div>
                </div>
                <Button variant="outline" size="icon" className="bg-zinc-100/75 border-0 shadow-custom">
                    <Search className="h-4 md:h-10 w-4 md:w-10" />
                </Button>
            </div>
            {loading ? <Loader /> : <WeatherInfo iconCode={iconCode} city={city} temp={temp} />}
            <Category />
            <Tasks />
            <div className="absolute bottom-0 right-0 pb-5 pr-[2rem]">
                <NewTask />
            </div>
        </div>
    );
}

export default App;
