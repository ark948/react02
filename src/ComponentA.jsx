import { useState } from 'react';
import { createContext } from 'react';
import ComponentB from './ComponentB.jsx';

export const UserContext = createContext();

function ComponentA() {
    const [user, setUser] = useState("BroCode");

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            {/* step 3 of using react context hook */}
            <UserContext.Provider value={user}>
                {/* wrap the child within, now props can be deleted */}
                <ComponentB user={user}/>
            </UserContext.Provider>
        </div>
    );
}

export default ComponentA