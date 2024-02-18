import { useEffect, useState } from "react"

const useOnlinestatus =  () => {

    const [onlinestatus, setonlinestatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline", () => {
            setonlinestatus(false);
        })
    
        window.addEventListener("online", () => {
            setonlinestatus(true);
        })
    },[onlinestatus]);

    return onlinestatus;


}

export default useOnlinestatus;