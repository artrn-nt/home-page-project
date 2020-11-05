import React, { forwardRef } from 'react';
import SocialItem from './SocialItem';
import InstagramLogo from '../../../assets/instagram.inline.svg';
import TwitterLogo from '../../../assets/twitter.inline.svg';
import PinterestLogo from '../../../assets/pinterest.inline.svg';
import cockpitStyles from '../../../styles/components/cockpit.module.scss';

const SocialContainer = (props, ref) => {

    return (
        <div className={cockpitStyles.navSocial} ref={ref}>
            <SocialItem>
                <InstagramLogo />
            </SocialItem>
            <SocialItem>
                <TwitterLogo />
            </SocialItem>
            <SocialItem>
                <PinterestLogo />
            </SocialItem>
        </div>
    );
}

export default forwardRef(SocialContainer);
