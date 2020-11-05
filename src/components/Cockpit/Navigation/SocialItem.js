import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import cockpitStyles from '../../../styles/components/cockpit.module.scss';

const Social = styled.div`
background-color: ${props => props.backgroundColor};
border: ${props => props.border};
    svg {
        fill: ${props => props.colors};
        height: .7rem;
        width: .7rem;
        transition: fill .4s ease-out;
    }
`;

const SocialItem = ({ children }) => {

    const [fill, setFill] = useState(false);

    return (
        <Link
            to='#'
            className={cockpitStyles.socialLink}
            onMouseEnter={() => setFill(true)}
            onMouseLeave={() => setFill(false)}>
            <Social
                className={cockpitStyles.socialWrap}
                border={fill === false ? '1px solid #F7F7F7' : '1px solid #F7F7F7'}
                backgroundColor={fill === false ? '#2e3d40' : '#F7F7F7'}
                colors={fill === false ? '#F7F7F7' : '#2e3d40'}
            >
                {children}
            </Social>
        </Link>
    );
}

export default SocialItem;