import {BsInstagram} from "react-icons/bs/index.js";
import {BsTwitter} from "react-icons/bs/index.js";
import {SiGmail} from "react-icons/si/index.js";
import {FaDiscord} from "react-icons/fa/index.js";

export default function Footer() {
    return (
      <footer className="flex py-12 items-center justify-center px-8 md:px-12 bg-black font-poppins w-full lg:px-12 z-10">
      <div className="flex flex-col justify-center items-start gap-8 w-full relative z-10 max-w-7xl md:flex-row md:max-7xl md:justify-between md:px-6">

        <div className="flex flex-col mx-auto items-center justify-center gap-4 sm:flex-row md:mr-auto md:ml-0">
          <picture className="">
            <img className="w-20 md:min-w-[80px]" src="/images/logo.svg" alt="logo" />
          </picture>
          <h3 className="text-neutral-50 font-inter text-justify max-w-sm md:max-w-lg lg:max-w-xl">If you have any questions or would like to discuss your project in more detail, please don't hesitate to contact me at mda.business.on@gmail.com. I try my best to give a response under 24 hours.</h3>
        </div>

        <div className="text-neutral-50 flex flex-row max-w-sm mx-auto gap-3 sm:ml-auto md:mr-0 md:ml-auto">
          <div className="relative flex items-center gap-2 group cursor-pointer">
            <picture className="relative flex rounded-full w-10 h-10 text-white border-neutral-50 border-[1px] justify-center items-center group-hover:base-gradient">
              <FaDiscord size={20} />
            </picture>
            <span className="absolute rounded-md justify-center bg-neutral-900 text-white py-1 px-3 -top-10 -left-8 text-sm hidden group-hover:flex base-gradient">hexyne.</span>
          </div>
          <div className="relative flex items-center gap-2 group cursor-pointer">
            <picture className="relative flex rounded-full w-10 h-10 text-white border-neutral-50 border-[1px] justify-center items-center group-hover:base-gradient">
              <SiGmail size={20} />
            </picture>
            <span className="absolute rounded-md justify-center bg-neutral-900 text-white py-1 px-3 -top-10 -left-8 text-sm hidden group-hover:flex base-gradient">mda.business.on</span>
          </div>
          <div className="relative flex items-center gap-2 group cursor-pointer">
            <picture className="relative flex rounded-full w-10 h-10 text-white border-neutral-50 border-[1px] justify-center items-center group-hover:base-gradient">
              <BsInstagram size={20} />
            </picture>
            <span className="absolute rounded-md justify-center bg-neutral-900 text-white py-1 px-3 -top-10 -left-8 text-sm hidden group-hover:flex base-gradient">darkdev.56</span>
          </div>
          <div className="relative flex items-center gap-2 group cursor-pointer">
            <picture className="relative flex rounded-full w-10 h-10 text-white border-neutral-50 border-[1px] justify-center items-center group-hover:base-gradient">
              <BsTwitter size={20} />
            </picture>
            <span className="absolute rounded-md justify-center bg-neutral-900 text-white py-1 px-3 -top-10 -left-8 text-sm hidden group-hover:flex base-gradient">dotfivesix</span>
          </div>
        </div>

      </div>
    </footer>
    )
  }
