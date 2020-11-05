import React from 'react';
import { Link } from 'gatsby';
import cockpitStyles from '../../../styles/components/cockpit.module.scss';

const NavItem = ({ text }) => {
    return (
        <li className={cockpitStyles.navItem}>
            <Link to='#' style={{ color: '#F7F7F7' }}>{text}</Link>
        </li>
    );
}

export default NavItem;
