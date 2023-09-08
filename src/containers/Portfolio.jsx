import {AiFillGithub} from "react-icons/ai/index.js";
import PortfolioCard from "../components/PortfolioCard";
import {portfolios} from "../data.json";

export default function Portfolio() {
    return (
      <section id="projects" className="flex justify-center bg-white py-20">
        <div className="px-8 md:px-12 max-w-7xl w-full">
          <div className="flex flex-col gap-4 md:gap-16 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="heading mb-2 text-center sm:text-start">Portfolio</h2>
              <p className="paragraph text-justify">Currently I am building out many cool projects to add up to my list. So make sure to keep a check on it.</p>
            </div>
            <a className="flex flex-row items-center ml-auto md:ml-0 gap-1 text-2xl font-bold text-white py-3 px-6 w-min h-min rounded-md color-button cursor-pointer" target="_blank" href="https://github.com/dotfivesix">
              <AiFillGithub size={30}/>
              <span>Github</span>
            </a>
          </div>
          <ul className="my-10 flex flex-col gap-12 items-center">
            {portfolios.map((portfolio, index) => (
              <PortfolioCard key={portfolio.image.split(".")[0]} image={portfolio.image} title={portfolio.title} description={portfolio.description} technologies={portfolio.technologies} source={portfolio.source} link={portfolio.link} alignment={(index % 2 === 0) ? "right" : "left"} />
            ))}
          </ul>
        </div>
      </section>
    )
  }
