import SliderLogo from './SliderLogo.jsx'
import NavbarHeader from './navbar/NavbarHeader.jsx'
import CursorPen from '../animations/cursor/CursorPen.jsx'

const MainPage = () => {
  return (
    <main className="w-full h-screen m-0 bg-[#f1f1f1]">
      <CursorPen/>
      <NavbarHeader/>
      <SliderLogo/>
    </main>
  );
};

export default MainPage;