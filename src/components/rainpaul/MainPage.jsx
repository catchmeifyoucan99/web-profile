// import NavbarHeader from './navbar/NavbarHeader.jsx'
import CursorPen from '../animations/cursor/CursorPen.jsx'
import IntroducePage from '../page/IntroducePage.jsx'
import InformationPage from '../page/InformationPage.jsx'

const MainPage = () => {
  return (
    <main className="w-full h-full m-0 p-0 bg-[#f1f1f1]">
      <CursorPen/>
      <IntroducePage/>
      <InformationPage/>
    </main>
  );
};

export default MainPage;