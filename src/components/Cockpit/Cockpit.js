import React, { forwardRef } from 'react';
import { Transition } from 'react-transition-group';
import { useNav } from '../Contexts/NavContext';
import { useWindowResize } from '../../utilities/useWindowSize';
import Navigation from './Navigation/Navigation';
import MediumNavigation from './Navigation/MediumNavigation';
import SmallNavigation from './Navigation/SmallNavigation';
import Header from './Header';
import Banner from './Banner';
import cockpitStyles from '../../styles/components/cockpit.module.scss';

const Cockpit = (props, ref) => {

    const { ref1, ref2 } = ref;
    const value = useNav();
    const size = useWindowResize();

    return (
        <div className={cockpitStyles.container}>
            {!props.animation ? <div className={cockpitStyles.overlay} ref={ref1} /> : null}
            <Header animation={props.animation} />
            <Banner ref={ref2} />
            {size.width > 834 ?
                <Transition in={value} timeout={{ exit: 910 }} unmountOnExit>
                    <Navigation />
                </Transition>
                :
                size.width > 464 ?
                    <Transition in={value} timeout={{ exit: 910 }} unmountOnExit>
                        <MediumNavigation />
                    </Transition>
                    :
                    <Transition in={value} timeout={{ exit: 910 }} unmountOnExit>
                        <SmallNavigation />
                    </Transition>
            }
        </div >
    );
}

export default forwardRef(Cockpit);
