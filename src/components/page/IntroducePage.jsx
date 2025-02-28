import { useEffect, useState } from "react";

const IntroducePage = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [avatarSize, setAvatarSize] = useState(384);

  useEffect(() => {
    const handleScroll = () => {

      setOffsetX(window.scrollY * 2);

      // calculate animate (background)
      // const newSizeBackground = Math.max()

      // calculate size (avatar)
      const newSizeAvatar = Math.max(96, 384 - window.scrollY);
      setAvatarSize(newSizeAvatar);

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[300vh] text-black relative">
      <div className="fixed top-1.5 left-1/2 bottom-2 w-full flex justify-center items-center whitespace-nowrap transition-transform duration-100 ease-out"
           style={{ transform: `translateX(${-offsetX}px)` }}>

        {/* avatar*/}
        <div className="mr-4 flex-shrink-0">
          <img
            src="/src/assets/images/avatar.png"
            alt="Avatar"
            className="rounded-full border-2 border-gray-500"
            style={{
              width: `${avatarSize}px`,
              height: `${avatarSize}px`,
            }}
          />
        </div>

        {/* introduce */}
        <h1
          className="text-5xl font-medium">
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
