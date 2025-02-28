import { useEffect, useState } from "react";

const IntroducePage = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [avatarSize, setAvatarSize] = useState(384);
  const [backgroundSize, setBackgroundSize] = useState(100);
  const [backgroundRadius, setBackgroundRadius] = useState(0);
  const [moveBackground, setMoveBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetX(window.scrollY * 2);

      // Calculate size (background)
      const newSize = Math.max(0, 100 - window.scrollY * 0.9);
      setBackgroundSize(newSize);

      const newBackgroundRadius = Math.min(window.scrollY * 9.9, 200);

      // Calculate radius (background)
      if (newSize <= 50) {
        setBackgroundRadius(newBackgroundRadius);
        setMoveBackground(true);
      } else {
        setBackgroundRadius(newBackgroundRadius);
        setMoveBackground(false);
      }

      // Calculate (avatar)
      const newAvatarSize = Math.max(96, 384 - window.scrollY);
      setAvatarSize(newAvatarSize);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[300vh] text-black relative">
      <div
        className="fixed"
        style={{
          backgroundColor: 'black',
          width: `${backgroundSize}vw`,
          height: `${backgroundSize}vw`,
          borderRadius: `${backgroundRadius}%`,
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) ${moveBackground ? `translateX(${-offsetX}px)` : ''}`,
          transition: 'all 0.2s ease-out',
        }}
      ></div>

      <div
        className="fixed top-1.5 left-1/2 bottom-2 w-full flex justify-center items-center whitespace-nowrap transition-transform duration-100 ease-out"
        style={{ transform: `translateX(${-offsetX - 27}px)` }}
      >
        {/* Avatar */}
        <div className="mr-4 flex-shrink-0">
          <img
            src="/src/assets/images/avatar.png"
            alt="Avatar"
            className="rounded-full border-2 border-black bg-[#f1f1f1]"
            style={{
              width: `${avatarSize}px`,
              height: `${avatarSize}px`,
            }}
          />
        </div>

        {/* Giới thiệu */}
        <h1 className="text-5xl font-medium">
          Hi, My name is{" "}
          <span className="relative font-[700] after:content-[''] after:block after:w-full after:h-[3px] after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-0">
            RainPauL
          </span>
          . I&#39;m from Vietnam, a Software Developer
        </h1>
      </div>

      <div className="h-[300vh]"></div>
    </div>
  );
};

export default IntroducePage;
