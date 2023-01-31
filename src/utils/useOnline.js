import { useState, useEffect } from "react"
const useOnline = ()=>{
    const[isOnline, setIsOnline] = useState(true);

    useEffect(()=>{
       const handleOnline =()=>{
        setIsOnline(true)}
   
        const handleOffline = ()=>{
            setIsOnline(false)}

        window.addEventListener("offline", handleOffline
        );
        window.addEventListener("online", handleOnline
        );

        return ()=>{
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("online", handleOffline)

        }
    }, [])

    return isOnline;
}
export default useOnline