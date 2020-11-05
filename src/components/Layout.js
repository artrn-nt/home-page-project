import React, { forwardRef } from 'react';
import { NavProvider } from './Contexts/NavContext';
import Cockpit from './Cockpit/Cockpit';
import layoutStyles from '../styles/components/layout.module.scss';

function Layout(props, ref) {

    const { ref1, ref2 } = ref;

    return (
        <div className={layoutStyles.container}>
            <NavProvider>
                <Cockpit animation={props.animation} ref={{ ref1, ref2 }} />
            </NavProvider>
            <main className={layoutStyles.content}>
                {props.children}
            </main>
        </div>
    );
}

export default forwardRef(Layout);
