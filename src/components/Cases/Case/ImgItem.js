import React from 'react';
import Img from 'gatsby-image';
import { useWindowResize } from '../../../utilities/useWindowSize';

const ImgItem = ({ className, imageData }) => {

    const size = useWindowResize();

    const handleClipPathOnResize = () => {
        if (size.width > 1600) return 125.6;
        if (size.width > 834) return 109.6;
        if (size.width > 464) return 116.6;
        else return 108.6;
    }

    return (
        <li className={className} style={{ clipPath: `circle(${handleClipPathOnResize()}px at center)` }}>
            {size.width > 834
                ?
                <Img fixed={imageData.childImageSharp.fixed} style={{ height: '100%' }} />
                :
                <Img fixed={imageData.childImageSharp.fixed} />
            }
        </li>
    );
}

export default ImgItem;
