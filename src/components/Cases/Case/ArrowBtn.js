import React, { useState, useRef } from 'react';
import { useImg, useImgUpdate } from '../../Contexts/ImgContext';
import { useDropUpdate } from '../../Contexts/DropContext';
import styled from 'styled-components';

const ArrowButton = styled.div`
    background-color: ${props => props.backgroundColor};

    svg {
        fill: ${props => props.color};
        width: 70%;
        height: 70%;
        transition: fill 500ms ease-in-out;
    }
`;

const ArrowBtn = ({ className, imgListRef, children }) => {

    // Contexts
    const value = useImg();
    const handleDirection = useImgUpdate();
    const setDrop = useDropUpdate();

    const [fill, setFill] = useState(false);

    const arrowBtnRef = useRef(null);

    const handleMouseEnter = (element) => {
        if (element.current.parentElement.parentElement.className.includes('one') ||
            element.current.parentElement.parentElement.className.includes('three')) {
            if (className.includes('left')) {
                setDrop[0]();
                setFill(true);
            } else if (className.includes('right')) {
                setFill(true);
            }
        } else if (element.current.parentElement.parentElement.className.includes('two')) {
            if (className.includes('right')) {
                setDrop[0]();
                setFill(true);
            } else if (className.includes('left')) {
                setFill(true);
            }
        }
    }

    const handleClick = () => handleDirection(arrowBtnRef.current, imgListRef.current);

    return (
        <ArrowButton
            className={className}
            onClick={value[1] ? handleClick : null}
            onMouseEnter={() => handleMouseEnter(arrowBtnRef)}
            onMouseLeave={() => setFill(false)}
            color={fill === false ? '#1d1d21' : '#F7F7F7'}
            backgroundColor={fill === false ? '#F7F7F7' : '#1d1d21'}
            ref={arrowBtnRef}
        >
            {children}
        </ArrowButton>
    );
}

export default ArrowBtn;