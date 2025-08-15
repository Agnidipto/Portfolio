import React, { useEffect, useState, useMemo } from "react";

function ScrollProgress(props) {

  const [loadedPerc, setLoadedPerc] = useState(0)

  const handleScroll = () => {

    const scrollPx = Math.round(document.documentElement.scrollTop);
    const winHeightPx =Math.round(
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
    const scrolled = Math.round(scrollPx / winHeightPx * 500) * 0.2;

    // console.log(scrolled)

    setLoadedPerc(scrolled)

  }; 

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div style={{transform:`scaleX(${loadedPerc*0.99})`}} className='progress-bar'/>
}

export default React.memo(ScrollProgress)