export default function ServiceCard({illustration, alt, title, description, alignment})
{
    return (
        <li className={`flex flex-col gap-4 max-w-md ${alignment === "right" ? "sm:flex-row" : "sm:flex-row-reverse"} sm:gap-8 sm:max-w-xl lg:max-w-md xl:max-w-lg lg:flex-row`}>
            <picture className="flex justify-center sm:w-48">
                <img src={illustration} alt={alt} />
            </picture>
            <div className="flex flex-col items-center gap-3 sm:w-full sm:items-start">
                <h3 className="sub-heading text-center sm:text-start">{title}</h3>
                <p className="paragraph text-justify">{description}</p>
            </div>
        </li>
    )
}