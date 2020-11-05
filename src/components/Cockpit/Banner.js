import React, { useState, forwardRef } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import RightArrow from '../../assets/banner-right-arrow.inline.svg';
import cockpitStyles from '../../styles/components/cockpit.module.scss';

const ArrowWrapper = styled.div`
    background-color: ${props => props.backgroundColor};
    svg {
        fill: ${props => props.colors};
        position: absolute;
        top: 25%;
        left: 27.5%;
        height: 50%;
        width: 50%;
        transition: fill 500ms ease-in-out;
    }
`;

const Banner = (props, ref) => {

    const [fill, setFill] = useState(false);

    return (
        <section className={cockpitStyles.banner}>
            <div className={cockpitStyles.row}>
                <h2 ref={ref}>
                    <div className={cockpitStyles.titleLine}>
                        <span>We will make you love</span>
                    </div>
                    <div className={cockpitStyles.titleLine}>
                        <span>cold countries.</span>
                    </div>
                </h2>
                <div className={cockpitStyles.infoRow}>
                    <Link
                        to="#"
                        onMouseEnter={() => setFill(true)}
                        onMouseLeave={() => setFill(false)}
                        className={cockpitStyles.line}
                    >
                        <span>Learn more about the core concept and</span>
                    </Link>
                    <Link
                        to="#"
                        onMouseEnter={() => setFill(true)}
                        onMouseLeave={() => setFill(false)}
                        className={cockpitStyles.line}
                    >
                        <span>our travel ethic.</span>
                        <ArrowWrapper
                            className={cockpitStyles.btn}
                            colors={fill === false ? '#1d1d21' : '#F7F7F7'}
                            backgroundColor={fill === false ? '#F7F7F7' : '#1d1d21'}
                        >
                            <RightArrow />
                        </ArrowWrapper>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default forwardRef(Banner);