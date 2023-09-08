export default function AboutComponent({illustration, alt, heading, paragraph})
{
    return (
        <div className="flex flex-col gap-4 max-w-md sm:flex-row sm:gap-8 sm:max-w-xl lg:max-w-[26rem] xl:max-w-lg">
            <picture className="flex justify-center sm:w-48">
                <img src={illustration} alt={alt} />
            </picture>
            <div className="flex flex-col items-center gap-3 sm:w-full sm:items-start">
                <h3 className="sub-heading">{heading}</h3>
                <p className="paragraph text-justify">{paragraph}</p>
            </div>
        </div>
    )
}