import { useEffect, useState } from "react";

const IntroducePage = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [avatarSize, setAvatarSize] = useState(384);
  const [backgroundSize, setBackgroundSize] = useState(100);
  const [backgroundRadius, setBackgroundRadius] = useState(0);
  const [moveBackground, setMoveBackground] = useState(false);
  const [mouseOffset, setMouseOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setOffsetX(scrollY * 2);

      // Calculate size (background)
      const newSize = Math.max(0, 100 - scrollY * 0.9);
      setBackgroundSize(newSize);

      const newBackgroundRadius = Math.min(scrollY * 9.9, 200);

      // Calculate radius (background)
      if (newSize <= 50) {
        setBackgroundRadius(newBackgroundRadius);
        setMoveBackground(true);
      } else {
        setBackgroundRadius(newBackgroundRadius);
        setMoveBackground(false);
      }

      // Điều chỉnh opacity và dịch chuột
      const newMouseOffset = Math.min(scrollY / 2, 100);
      setMouseOffset(newMouseOffset);

      // Calculate avatar size
      const newAvatarSize = Math.max(96, 384 - scrollY);
      setAvatarSize(newAvatarSize);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[300vh] text-black relative">
      <div
        className="fixed bg-black"
        style={{
          width: `${backgroundSize}vw`,
          height: `${backgroundSize}vw`,
          borderRadius: `${backgroundRadius}%`,
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) ${moveBackground ? `translateX(${-offsetX}px)` : ''}`,
          transition: 'all 0.2s ease-out',
          zIndex: 1,
        }}
      ></div>

      <div
        className="fixed top-1.5 left-1/2 bottom-2 w-full flex justify-center items-center whitespace-nowrap transition-transform duration-100 ease-out"
        style={{ transform: `translateX(${-offsetX - 27}px)`, zIndex: 2 }}
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

        <div
          className="absolute z-20 mr-20 transition-transform duration-700 ease-out flex flex-col items-center"
          style={{
            opacity: Math.max(0, 1 - window.scrollY / 15),
            transform: `translateY(${scrollY}px)`,
            transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
          }}
        >
          <img
            src="/src/assets/images/mouse.png"
            alt="Mouse"
            className="w-9 h-9"
            style={{ filter: "invert(1)" }}
          />
          <img
            src="/src/assets/images/down-arrow.png"
            alt="mouse-animate"
            className="w-6 h-6 mt-1 animate-arrow"
            style={{ filter: "invert(1)" }}
          />
        </div>

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
