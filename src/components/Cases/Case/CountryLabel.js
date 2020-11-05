import React from 'react';
import casesStyles from '../../../styles/components/cases.module.scss';

const CountryLabel = ({ className, slogan, country }) => {

    return (
        <h3 className={className}>
            <div className={casesStyles.line}>
                <span>{slogan}</span>
            </div>
            <div className={casesStyles.line}>
                <span>{country}</span>
            </div>
        </h3>
    );
}

export default CountryLabel;
