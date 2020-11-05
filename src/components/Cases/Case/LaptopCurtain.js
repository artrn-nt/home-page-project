import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { Transition } from 'react-transition-group';
import gsap from 'gsap';
import { useDrop, useDropUpdate } from '../../Contexts/DropContext';
import casesStyles from '../../../styles/components/cases.module.scss';

const LaptopCurtain = ({ contact, guide }) => {

    const drop = useDrop();
    const setDrop = useDropUpdate();

    const curtain = useRef(null);
    const subContact = contact.split('-');

    useEffect(() => {
        if (drop) {
            gsap.to(curtain.current, {
                duration: .75,
                y: '100%',
                ease: 'power3.out'
            });
        } else {
            gsap.to(curtain.current, {
                duration: .75,
                y: '0%',
                ease: 'power3.out'
            });
        }
    }, [drop]);

    const transitionStyles = {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 }
    };

    return (
        <div className={casesStyles.outerCurtain} onMouseEnter={setDrop[0]} onMouseLeave={setDrop[1]} role='none'>
            <div className={casesStyles.laptopCurtain} ref={curtain}>
                <Transition in={drop} timeout={250} unmountOnExit mountOnEnter>
                    {state => (
                        <Link
                            to='#'
                            className={casesStyles.guideLink}
                            style={{
                                ...transitionStyles[state],
                                transition: 'opacity .25s ease-out',
                                color: '#F7F7F7',
                                fontWeight: 400,
                                cursor: 'pointer'
                            }}>
                            {subContact[0]}
                            <div className={casesStyles.guide}>
                                {guide}
                            </div>
                            {subContact[1]}
                        </Link>
                    )}
                </Transition>
            </div>
        </div>
    );
}

export default LaptopCurtain;