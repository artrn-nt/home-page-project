import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useWindowInitialSize } from '../utilities/useWindowSize'
import Layout from '../components/Layout';
import Cases from '../components/Cases/Cases';

const Home = () => {

    const size = useWindowInitialSize();

    const [animationComplete, setAnimationComplete] = useState(false);

    const bannerTitle = useRef(null);
    const cockpitOverlay = useRef(null);
    const firstCase = useRef(null);
    const secondCase = useRef(null);
    const thirdCase = useRef(null);

    const tl = useRef(null);

    const completeAnimation = () => {
        setAnimationComplete(true);
    }

    useEffect(() => {

        // Banner title - lines selectors
        const titleLine1 = bannerTitle.current.children[0];
        const titleLine2 = titleLine1.nextSibling;

        // Cases selectors
        const case1 = firstCase.current;
        const case2 = secondCase.current;
        const case3 = thirdCase.current;

        if (size.width > 834) {

            tl.current = gsap.timeline()
                .from([titleLine1.children[0], titleLine2.children[0]], { // main slogan
                    duration: 1.3,
                    opacity: 0,
                    y: 75,
                    skewY: 7,
                    ease: 'power4.out',
                    stagger: .3,
                    delay: .5
                })
                .to(cockpitOverlay.current, { // cockpit overlay
                    duration: .9,
                    height: 0,
                    ease: 'power3.out'
                }, "-=.1")
                .to([case1.children[0], case2.children[0], case3.children[0]], { // case overlay
                    duration: 1.15,
                    width: 0,
                    ease: 'power4.out',
                    stagger: .4
                })
                .to([case1.children[1], case2.children[1], case3.children[1]], { // case inner-container
                    duration: .2,
                    opacity: 1,
                    ease: 'power1.out',
                    stagger: .35
                }, "-=1.45")
                .from([
                    case3.children[1].children[3].children[1],
                    case1.children[1].children[3].children[1],
                    case2.children[1].children[3].children[1]
                ], { // pictures
                    duration: .85,
                    clipPath: 'circle(0px at center)',
                    ease: 'power4.out',
                    stagger: .35,
                    onComplete: () => {
                        completeAnimation();
                    }
                }, "-=.55");

        } else {

            tl.current = gsap.timeline()
                .from([titleLine1.children[0], titleLine2.children[0]], { // main slogan
                    duration: 1.3,
                    opacity: 0,
                    y: 75,
                    skewY: 7,
                    ease: 'power4.out',
                    stagger: .3,
                    delay: .5
                })
                .to(cockpitOverlay.current, { // cockpit overlay
                    duration: .9,
                    height: 0,
                    ease: 'power3.out'
                }, "-=.1")
                .to([case1.children[0], case2.children[0], case3.children[0]], { // case overlay
                    duration: 1.15,
                    width: 0,
                    ease: 'power4.out',
                    stagger: .4
                })
                .to([case1.children[1], case2.children[1], case3.children[1]], { // case inner-container
                    duration: .2,
                    opacity: 1,
                    ease: 'power1.out',
                    stagger: .35
                }, "-=1.45")
                .from([
                    case3.children[1].children[3].children[1],
                    case1.children[1].children[3].children[1],
                    case2.children[1].children[3].children[1]
                ], { // pictures
                    duration: .85,
                    clipPath: 'circle(0px at center)',
                    ease: 'power4.out',
                    stagger: .35,
                    onComplete: () => {
                        completeAnimation();
                    }
                }, "-=.55");

        }

    }, [size.width]);

    return (
        <Layout animation={animationComplete} ref={{ ref1: cockpitOverlay, ref2: bannerTitle }}>
            <Cases animation={animationComplete} ref={{ case1Ref: firstCase, case2Ref: secondCase, case3Ref: thirdCase }} />
        </Layout>
    );
}

export default Home;
