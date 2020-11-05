import React, { useContext, useState } from 'react';

const NavContext = React.createContext();
const NavUpdateContext = React.createContext();

const useNav = () => useContext(NavContext);
const useNavUpdate = () => useContext(NavUpdateContext);

const NavProvider = ({ children }) => {

    const [expand, setExpand] = useState(false);
    const [lock, setLock] = useState(false);

    const handleLock = (expand) => {
        if (!lock) {
            setLock(true);

            if (expand) {
                setTimeout(() => {
                    setLock(false);
                }, 910);
            } else {
                setTimeout(() => {
                    setLock(false);
                }, 1110);
            }
        }
    }

    const handleExpand = () => {
        handleLock(expand);
        if (lock) return;
        setExpand(prevState => !prevState);
    }

    return (
        <NavContext.Provider value={expand}>
            <NavUpdateContext.Provider value={handleExpand}>
                {children}
            </NavUpdateContext.Provider>
        </NavContext.Provider>
    );
}

export { NavProvider, useNav, useNavUpdate };