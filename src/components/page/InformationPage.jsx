import { useCallback, useEffect, useState } from 'react'


const InformationPage = () => {

  const [offsetX, setOffsetX] = useState(0);
  const [moveBackground, setMoveBackground] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;

    setOffsetX(scrollY * 2);

    const newSize = Math.max(0, 100 - scrollY * 0.9);

    if (newSize <= 500) {
      setMoveBackground(true);
    } else {
      setMoveBackground(false);
    }


  }, []);

  useEffect(() => {
    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  return(
    <div className="h-[199vh] relative"
        style={{transform: `translate(-50%, -50%) ${moveBackground ? `translateX(${-offsetX}px)` : ""}`,}}>
      <div className="font-medium text-5xl">
        Hi! I&#39;m a Software Developer from Vietnam. I work on both Frontend and Backend, but my strength is Frontend Development. I specialize in building clean, responsive UIs with React, Tailwind CSS, and Next.js. Always eager to learn and create high-quality web experiences!
      </div>
    </div>
  )
}

export default InformationPage;