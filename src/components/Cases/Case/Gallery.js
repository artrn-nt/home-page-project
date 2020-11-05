import React, { useRef } from 'react';
import { useImg } from '../../Contexts/ImgContext';
import ImgItem from './ImgItem';
import ArrowBtn from './ArrowBtn';
import { useWindowResize } from '../../../utilities/useWindowSize'
import LeftArrow from '../../../assets/left-arrow.inline.svg';
import RightArrow from '../../../assets/right-arrow.inline.svg';
import casesStyles from '../../../styles/components/cases.module.scss';

const Gallery = ({ imageData }) => {

    const galleryRef = useRef(null);
    const imgListRef = useRef(null);
    const value = useImg();
    const size = useWindowResize();

    const handleClipPathOnResize = () => {
        if (size.width > 1600) return 127;
        if (size.width > 834) return 111;
        if (size.width > 464) return 118;
        else return 110;
    }

    return (
        <div className={casesStyles.gallery} ref={galleryRef}>
            <ArrowBtn className={`${casesStyles.arrow} ${casesStyles.left}`} imgListRef={imgListRef}>
                <LeftArrow />
            </ArrowBtn>
            <ul className={casesStyles.imgList} style={{ clipPath: `circle(${handleClipPathOnResize()}px at center)` }} ref={imgListRef}>
                <ImgItem
                    className={value[0].isActive1 ? `${casesStyles.imgItem} ${casesStyles.active}` : casesStyles.imgItem}
                    imageData={imageData[0]}
                />
                <ImgItem
                    className={value[0].isActive2 ? `${casesStyles.imgItem} ${casesStyles.active}` : casesStyles.imgItem}
                    imageData={imageData[1]}
                />
                <ImgItem
                    className={value[0].isActive3 ? `${casesStyles.imgItem} ${casesStyles.active}` : casesStyles.imgItem}
                    imageData={imageData[2]}
                />
            </ul>
            <ArrowBtn className={`${casesStyles.arrow} ${casesStyles.right}`} imgListRef={imgListRef}>
                <RightArrow />
            </ArrowBtn>
        </div>
    );
}

export default Gallery;