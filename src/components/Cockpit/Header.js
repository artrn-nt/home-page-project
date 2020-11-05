import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useNavUpdate, useNav } from '../Contexts/NavContext';
import { useWindowResize } from '../../utilities/useWindowSize';
import { Spin as Hamburger } from 'hamburger-react';
import cockpitStyles from '../../styles/components/cockpit.module.scss';

const Header = (props) => {

  const value = useNav();
  const set = useNavUpdate();
  const size = useWindowResize();

  const logo = useRef(null);

  useEffect(() => {
    if (!value) {
      gsap.to(logo.current, {
        duration: .8,
        color: '#1d1d21',
        ease: 'power3.out',
        delay: size.width > 834 ? .5 : .7
      });
    } else {
      gsap.to(logo.current, {
        duration: .8,
        color: '#F7F7F7',
        ease: 'power3.out'
      });
    }
  }, [value, size]);

  return (
    <header className={cockpitStyles.header} style={{ zIndex: !props.animation ? 1 : 12 }}>
      <div className={cockpitStyles.logo}>
        <h1 ref={logo}>Northern Travels.</h1>
      </div>
      <div className={cockpitStyles.navBtn}>
        <Hamburger
          size={16}
          direction="left"
          duration={.7}
          distance="md"
          color={!value ? '#1d1d21' : '#F7F7F7'}
          label='Show menu'
          hideOutline={true}
          toggle={set}
          toggled={value}
          easing='ease-out'
          rounded
        />
      </div>
    </header>
  );
}

export default Header;
