import { useState } from "react";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai/index";
const links = ["home", "about", "skills", "projects", "services"];

export default function Header() {

  const [navVisible, setNavVisible] = useState(false);

  const HandleNavClick = () => {
    setNavVisible(!navVisible);
  }

  return (
    <header className="relative flex justify-center px-8 md:px-12 h-20 bg-black font-poppins w-full border-[rgba(255,255,255,0.08)] border-b-2 lg:px-12 backdrop-blur-md z-10">
      <div className="flex justify-between items-center w-full relative z-10 max-w-7xl">

        <picture>
          <img className="cursor-pointer w-40 sm:w-48" src="/images/logo-full.svg" />
        </picture>

        <div className="md:hidden">
          <button onClick={HandleNavClick} className="text-white text-3xl">
            {navVisible ? <AiOutlineClose/> : <AiOutlineMenu/>}
          </button>
        </div>

        <nav className={`${navVisible ? "scale-100" : "scale-0"} origin-top-right transition-transform duration-200 absolute top-28 right-0 bg-white z-[20] w-40 py-4 before:content-[''] before:w-0 before:h-0 before:border-b-[1.5rem] before:border-b-white before:border-solid before:border-l-[1.5rem] before:border-l-transparent before:absolute before:-top-6 before:right-0 md:hidden`}>
          <ul className="font-inter font-bold flex flex-col gap-3 text-lg items-center">
            {links.map(link => (
              <li key={link} className="capitalize cursor-pointer hover:underline"><a href={`#${link}`}>{link}</a></li>
            ))}
          </ul>
        </nav>

        <nav className="hidden md:flex">
          <ul className="flex gap-8">
            {links.map(link => (
              <li key={link} className="capitalize text-white cursor-pointer lg:text-lg transition-colors duration-100 relative before:h-[2px] before:base-gradient before:w-0 before:absolute before:-bottom-1 hover:before:w-full before:transition-all before:duration-100 hover:text-neutral-100"><a href={`#${link}`}>{link}</a></li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  )
}