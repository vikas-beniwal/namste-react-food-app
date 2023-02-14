import { createContext } from "react";

const UserContext = createContext({
    user:{
        name:"Vikas",
        email: "vikas@gmail.com",
    }
});

export default UserContext;