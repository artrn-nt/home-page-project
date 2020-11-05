import React, { useContext, useState } from 'react';

const DropContext = React.createContext();
const DropUpdateContext = React.createContext();

const useDrop = () => useContext(DropContext);
const useDropUpdate = () => useContext(DropUpdateContext);

const DropProvider = ({ children }) => {

    const [drop, setDrop] = useState(false);

    const lower = () => {
        setDrop(true);
    }

    const raise = () => {
        setDrop(false);
    }

    return (
        <DropContext.Provider value={drop}>
            <DropUpdateContext.Provider value={[lower, raise]}>
                {children}
            </DropUpdateContext.Provider>
        </DropContext.Provider>
    );
}

export { DropProvider, useDrop, useDropUpdate };