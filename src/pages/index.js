import React, { useEffect } from 'react';
import gsap from 'gsap';
import Home from './home';
import '../styles/index.module.scss';

const App = () => {

  useEffect(() => {
    gsap.to('body', .1, { css: { visibility: 'visible' } });
  });

  return (
    <Home />
  );
}

export default App;

