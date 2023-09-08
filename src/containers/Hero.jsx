import { useEffect, useState } from "react";

export default function Hero() {

  const [isSubHeadingVisible,setIsSubHeadingVisible] = useState(false);
  const [isHeadingVisible,setIsHeadingVisible] = useState(false);
  const [isParagraphVisible,setIsParagraphVisible] = useState(false);
  const [areButtonsVisible,setAreButtonsVisible] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setIsSubHeadingVisible(true), 750);
    setTimeout(() => setIsHeadingVisible(true), 1500);
    setTimeout(() => setIsParagraphVisible(true), 2250);
    setTimeout(() => setAreButtonsVisible(true), 3000);
  });

  return (
    <section id="#home" className="h-[calc(100vh-80px)] min-h-[400px] w-full bg-[rgba(0,0,0,0.95)] relative overflow-hidden flex before:absolute before:content-[''] before:w-[100%] before:h-[calc(100vh-80px)] before:top-0 before:left-0 before:bg-[url('/images/hero.webp')] before:bg-cover before:bg-center before:bg-no-repeat before:z-[-1]">
      <div className="base-gradient text-white w-56 h-56 rounded-full blur-3xl opacity-5 bg-blend-multiply absolute -top-32 -left-36 md:h-80 md:w-80 md:-left-0 md:-top-48"></div>
      <div className="base-gradient text-white w-56 h-56 rounded-full blur-3xl opacity-5 bg-blend-multiply absolute top-72 -right-48 md:h-80 md:w-80 md:top-32"></div>
      <div className="base-gradient text-white w-56 h-56 rounded-full blur-3xl opacity-5 bg-blend-multiply absolute -bottom-40 -left-36 md:h-80 md:w-80 md:left-64 md:-bottom-64"></div>
      <div className="relative px-8 md:px-12 my-auto pb-10 w-full flex justify-center">
        <div className="text-center relative flex flex-col items-center gap-4 max-w-xl md:max-w-2xl">
          <h4 className={`${isSubHeadingVisible ? "left-0 opacity-100" : "left-8 opacity-0"} relative transition-all duration-300 text-xl font-bold font-inter md:text-2xl bg-gradient-to-r from-cyan-300 via-purple-300 to-red-300 bg-clip-text text-transparent w-min`}>DotFiveSix</h4>
          <h1 className={`${isHeadingVisible ? "top-0 opacity-100" : "top-8 opacity-0"} relative transition-all duration-300 text-5xl font-bold font-poppins text-white md:text-6xl`}>Hello I am DarkDev</h1>
          <p className={`${isParagraphVisible ? "right-0 opacity-100" : "right-8 opacity-0"} relative transition-all duration-300 text-lg font-inter text-neutral-50 md:text-xl`}>You can call me heyxne. I am a self-taught web developer and designer experienced at the Frontend.</p>
          <div className={`${areButtonsVisible ? "bottom-0 opacity-100" : "bottom-8 opacity-0"} relative transition-all duration-300 flex gap-4 mx-auto`}>
            <a href="#about" className="color-button w-28 py-3 md:w-36 md:py-4 md:text-xl">About</a>
            <a href="#projects" className="bw-button w-28 py-3 md:w-36 md:py-4 md:text-xl">Portfolio</a>
          </div>
        </div>
      </div>
    </section>
  )
}
