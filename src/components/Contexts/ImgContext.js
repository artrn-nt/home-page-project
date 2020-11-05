import React, { useState, useContext } from 'react';
import gsap from 'gsap';

const ImgContext = React.createContext();
const ImgUpdateContext = React.createContext();

const useImg = () => useContext(ImgContext);
const useImgUpdate = () => useContext(ImgUpdateContext);

const ImgProvider = ({ children }) => {

    const [state, setState] = useState({
        isActive1: true,
        isActive2: false,
        isActive3: false,
    });

    const [animationComplete, setAnimationComplete] = useState(true);

    const slideLeft = (element, index, duration, multiplied = 1, onEnd) => {
        gsap.to(element.children[index], duration, {
            x: -384 * multiplied,
            ease: 'power2.out',
            onComplete: () => {
                setTimeout(() => { if (onEnd) setAnimationComplete(true); }, .15);
            }
        });
    }

    const slideRight = (element, index, duration, multiplied = 1, onEnd) => {
        gsap.to(element.children[index], duration, {
            x: 384 * multiplied,
            ease: 'power2.out',
            onComplete: () => {
                setTimeout(() => { if (onEnd) setAnimationComplete(true); }, .15);
            }
        });
    }

    const nextPic = (imgListElement) => {
        if (imgListElement.children[0].className.includes('active')) {
            setState({ isActive1: false, isActive2: true, isActive3: false });

            setAnimationComplete(false);
            slideLeft(imgListElement, 0, 1.1);
            slideLeft(imgListElement, 1, 1.1);
            slideLeft(imgListElement, 2, 0);
            slideLeft(imgListElement, 2, 1.1, 1, true);

        } else if (imgListElement.children[1].className.includes('active')) {
            setState({ isActive1: false, isActive2: false, isActive3: true });

            setAnimationComplete(false);
            slideRight(imgListElement, 0, 0);
            slideRight(imgListElement, 0, 1.1);
            slideLeft(imgListElement, 1, 1.1, 2);
            slideLeft(imgListElement, 2, 1.1, 2, true);

        } else if (imgListElement.children[2].className.includes('active')) {
            setState({ isActive1: true, isActive2: false, isActive3: false });

            setAnimationComplete(false);
            slideLeft(imgListElement, 1, 0, 0);
            slideLeft(imgListElement, 0, 1.1, 0);
            slideLeft(imgListElement, 2, 1.1, 3, true);

        }
    }

    const previousPic = (imgListElement) => {
        if (imgListElement.children[0].className.includes('active')) {
            setState({ isActive1: false, isActive2: false, isActive3: true });

            setAnimationComplete(false);
            slideRight(imgListElement, 0, 1.1);
            slideLeft(imgListElement, 1, 0, 2);
            slideLeft(imgListElement, 2, 0, 3);
            slideLeft(imgListElement, 2, 1.1, 2, true);

        } else if (imgListElement.children[1].className.includes('active')) {
            setState({ isActive1: true, isActive2: false, isActive3: false });

            setAnimationComplete(false);
            slideLeft(imgListElement, 2, 0, 3);
            slideRight(imgListElement, 0, 1.1, 0);
            slideRight(imgListElement, 1, 1.1, 0, true);

        } else if (imgListElement.children[2].className.includes('active')) {
            setState({ isActive1: false, isActive2: true, isActive3: false });

            setAnimationComplete(false);
            slideLeft(imgListElement, 0, 0);
            slideRight(imgListElement, 1, 1.1, -1);
            slideRight(imgListElement, 2, 1.1, -1, true);

        }
    }

    const handleDirection = (element, imgListElement) => {
        if (element.className.includes('left')) {
            previousPic(imgListElement);
        } else if (element.className.includes('right')) {
            nextPic(imgListElement);
        }
    }

    return (
        <ImgContext.Provider value={[state, animationComplete]}>
            <ImgUpdateContext.Provider value={handleDirection}>
                {children}
            </ImgUpdateContext.Provider>
        </ImgContext.Provider>
    );
}

export { ImgProvider, useImg, useImgUpdate };

