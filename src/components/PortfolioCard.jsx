export default function PortfolioCard({image, title, description, technologies, alignment, source, link})
{
    return (
        <li className={`flex flex-col gap-6 max-w-md md:max-w-xl ${alignment === "right" ? "lg:flex-row" : "lg:flex-row-reverse"} lg:items-center lg:max-w-5xl xl:max-w-7xl`}>
            <picture className="lg:w-[50%]">
                <img className="cursor-pointer w-full rounded-sm border-black border-[1px]" src={`/images/portfolios/${image}`} alt={`${image.split(".")[0]}-logo`} />
            </picture>
            <div className="flex flex-col gap-2 items-center md:items-start md:gap-4 lg:w-[50%] lg:gap-2">
                <h3 className="sub-heading font-bold text-center text-2xl md:text-3xl xl:text-4xl">{title}</h3>
                <p className="paragraph text-center md:text-xl md:text-justify lg:text-lg xl:text-xl">{description}</p>
                <div className="flex flex-col gap-2 items-center md:flex-row md:gap-4 md:justify-between md:w-full lg:flex-col lg:items-start lg:gap-2">
                    <h4 className="font-poppins font-bold text-lg md:text-xl lg:text-base xl:text-xl">Technologies used</h4>
                    <ul className="flex gap-3">
                        {technologies.map((technology,index) => (
                            <li key={index} className="py-1 px-3 text-white bg-black rounded-md text-sm md:text-lg font-inter lg:text-base xl:text-lg">{technology}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex gap-3 mt-2 md:mx-auto lg:mx-0">
                    <a target="_blank" href={link} className="color-button w-24 py-2 md:w-28 md:py-3 md:text-xl lg:w-24 lg:py-2 lg:text-lg xl:w-28 xl:py-3 xl:text-xl">Visit</a>
                    <a target="_blank" href={source} className="bw-button w-24 py-2 md:w-28 md:py-3 md:text-xl lg:w-24 lg:py-2 lg:text-lg xl:w-28 xl:py-3 xl:text-xl">Source</a>
                </div>
            </div>
        </li>
    )
}