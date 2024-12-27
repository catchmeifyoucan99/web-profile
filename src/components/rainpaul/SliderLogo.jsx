import Marquee from "react-fast-marquee";

const SliderLogo = () => {
  return(
    <div className="h-8 w-full">
      <Marquee className="h-8 w-full flex items-center" pauseOnHover={true} autoFill={true}>
        <img
          className="h-8 w-auto mr-5"
          src="/src/assets/images/huflit_logo.png"
          alt="logo huflit"
        />
        <img
          className="h-8 w-auto mr-5"
          src="/src/assets/images/react_logo.png"
          alt="logo react"
        />
      </Marquee>
    </div>
  )
}

export default SliderLogo;
