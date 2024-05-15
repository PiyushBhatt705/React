import React from "react";
import userContext from "./UserContext";

const UserContextProvider =({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <userContext.Provider vlaue={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider