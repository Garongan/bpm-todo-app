import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CurrentWeatherByGeo } from "../api/api";
import { Button } from "../components/ui/button";
import Status from "../components/ui/status";
import Loader from "../components/ui/loader";
import WeatherInfo from "../components/ui/weather-info";
import GroupTaskList from "@/pages/GroupTask/GroupTaskList";
import NewTaskButton from "../components/ui/new-task-button";

function App() {
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const { toast } = useToast();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const crd = pos.coords;
                setLat(crd.latitude);
                setLon(crd.longitude);
            },
            () => {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "Please enable the location service",
                    action: <ToastAction altText="Try again">Try again</ToastAction>,
                });
            },
            { enableHighAccuracy: true, maximumAge: 0 }
        );
    }, [toast]);

    // const { data, isSuccess } = useQuery({
    //     queryKey: ["weather", lat, lon],
    //     queryFn: () => CurrentWeatherByGeo(lat, lon),
    //     enabled: !!lat && !!lon,
    //     staleTime: keepPreviousData,
    // });

    return (
        <div className="flex flex-col gap-10">
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
                <Button variant="outline" size="icon" className="bg-zinc-200/75 border-0 shadow-custom">
                    <Search className="h-4 md:h-10 w-4 md:w-10" />
                </Button>
            </div>
            {/* {!isSuccess ? (
                <Loader />
            ) : (
                <WeatherInfo iconCode={data.data.weather[0].icon} city={data.data.name} temp={data.data.main.temp} />
            )} */}
            <Status />
            <GroupTaskList />
            <div className="pb-5 fixed container bottom-0">
                <div className="flex justify-end pr-8">
                    <Link to="/group/new">
                        <NewTaskButton />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default App;
