import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useNav } from '../../Contexts/NavContext';
import NavItem from './NavItem';
import SocialContainer from './SocialContainer';
import cockpitStyles from '../../../styles/components/cockpit.module.scss';

const MediumNavigation = () => {

    const value = useNav();

    // Nav ref
    const navigationRef = useRef(null);
    const innerNavRef = useRef(null);
    const navRowRef = useRef(null);
    const socialRef = useRef(null);

    // Timeline ref
    const tl = useRef(null);

    useEffect(() => {

        const navRow1 = navRowRef.current;
        const navRow2 = navRow1.nextSibling;
        const navRow3 = navRow2.nextSibling;

        tl.current = gsap.timeline({ defaults: { ease: 'power3.out' }, paused: true })
            .to(navigationRef.current, {
                height: '100%',
                delay: .15
            })
            .fromTo([navRow1.children[0], navRow2.children[0], navRow3.children[0]], {
                opacity: 0,
                x: -16,
                duration: .6
            }, {
                duration: .6,
                opacity: 1,
                x: 0
            }, "-=.3")
            .fromTo([navRow1.children[1], navRow2.children[1], navRow3.children[1]], {
                opacity: 0
            }, {
                duration: .6,
                opacity: 1
            }, "-=.3")
            .from(socialRef.current, {
                duration: .6,
                opacity: 0
            }, "-=.6")
            .to(innerNavRef.current, {
                duration: .45,
                opacity: 0
            })
            .to(navigationRef.current, {
                duration: .45,
                height: '0%'
            });

        if (!tl.current.isActive()) {
            if (value) tl.current.play(0).addPause(1.25);
            else tl.current.play(1.25);
            return () => tl.current.kill();
        }

    }, [value, tl]);

    return (
        <div className={cockpitStyles.navigation} ref={navigationRef}>
            <div className={cockpitStyles.innerNavigation} ref={innerNavRef}>
                <nav className={cockpitStyles.navMenu} ref={navRowRef}>
                    <span className={cockpitStyles.navTitle}>Menu.</span>
                    <ul>
                        <NavItem text='Concept &amp; Ethic' />
                        <NavItem text='Travels Catalog' />
                        <NavItem text='About us' />
                        <NavItem text='We are recruiting!' />
                    </ul>
                </nav>
                <div className={cockpitStyles.navContact}>
                    <span className={cockpitStyles.navTitle}>Contact.</span>
                    <div>
                        <div className={cockpitStyles.contactRow}>
                            <span className={cockpitStyles.contactTitle}>Headquarter</span>
                            <p>
                                <span>Northern Travels</span>
                                <span>213 NW 17th Ave</span>
                                <span>Portland</span>
                                <span>OR 97114</span>
                                <span>United States</span>
                            </p>
                        </div>
                        <div className={cockpitStyles.contactRow}>
                            <span className={cockpitStyles.contactTitle}>Phone</span>
                            <p>
                                <span>+1 502-316-4113</span>
                            </p>
                        </div>
                        <div className={cockpitStyles.contactRow}>
                            <span className={cockpitStyles.contactTitle}>Email</span>
                            <p>
                                <span>contact&#64;northern-travels.com</span>
                            </p>
                        </div>
                    </div>
                </div>
                <nav className={cockpitStyles.navLegal}>
                    <span className={cockpitStyles.navTitle}>Legal.</span>
                    <ul>
                        <NavItem text='Privacy &amp; Cookies' />
                        <NavItem text='Terms &amp; Conditions' />
                    </ul>
                </nav>
                <SocialContainer ref={socialRef} />
            </div>
        </div >
    );
}

export default MediumNavigation;
