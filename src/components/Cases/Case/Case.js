import React, { forwardRef } from 'react';
import { ImgProvider } from '../../Contexts/ImgContext';
import { DropProvider } from '../../Contexts/DropContext';
import CountryLabel from './CountryLabel';
import LaptopCurtain from './LaptopCurtain';
import SmallCurtain from './SmallCurtain';
import Gallery from './Gallery';
import casesStyles from '../../../styles/components/cases.module.scss';
// import { useWindowResize } from '../../../utilities/useWindowSize';

const Case = ({ className, animation, imageData, slogan, country, contact, guide }, ref) => {

    const caseRef = ref;
    // const size = useWindowResize();

    return (
        <div className={casesStyles.case} ref={caseRef}>
            {!animation ? <div className={casesStyles.caseOverlay} /> : null}
            <div className={[casesStyles.innerContainer, className].join(' ')}>
                <CountryLabel className={casesStyles.laptopLabel} slogan={slogan} country={country} />
                <SmallCurtain slogan={slogan} country={country} contact={contact} guide={guide} />
                <DropProvider>
                    <LaptopCurtain contact={contact} guide={guide} />
                    <ImgProvider>
                        <Gallery imageData={imageData} />
                    </ImgProvider>
                </DropProvider>
            </div>
        </div>
    );
}

export default forwardRef(Case);

// JSX below is unable to work in production environment for complete unknown reasons... As a consequence I had to rethink the code in an unoptimized way unfortunately.
// {size.width > 834 && <CountryLabel slogan={slogan} country={country} />}
// {size.width <= 834 && <SmallCurtain slogan={slogan} country={country} contact={contact} guide={guide} />}
// {size.width > 834 && <LaptopCurtain contact={contact} guide={guide} />}