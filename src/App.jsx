import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { getTime } from "./api/api";

function App() {
  const [time, setTime] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTime().then(data => setTime(data.datetime))
  }, [])

  console.log(time);

    return (
        <>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            
        </>
    );
}

export default App;
