import React from 'react';
import { Link } from 'gatsby';
import CountryLabel from './CountryLabel';
import ClickIcon from '../../../assets/click.inline.svg';
import casesStyles from '../../../styles/components/cases.module.scss';

const SmallCurtain = ({ slogan, country, contact, guide }) => {

    const subContact = contact.split('-');

    return (
        <div className={casesStyles.smallCurtain}>
            <CountryLabel className={casesStyles.smallLabel} slogan={slogan} country={country} />
            <Link
                to='#'
                className={casesStyles.guideLink}
                style={{
                    color: '#F7F7F7',
                    fontWeight: 400,
                    cursor: 'pointer'
                }}>
                <ClickIcon className={casesStyles.icon} />
                {subContact[0]}
                <div className={casesStyles.guide}>
                    {guide}
                </div>
                {subContact[1]}
            </Link>
        </div>
    );
}

export default SmallCurtain;
