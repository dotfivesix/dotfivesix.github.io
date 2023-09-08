export default function AboutReading({illustration, alt, heading="", paragraph, alignment}) {
  return (
    <div>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col items-center justify-center gap-6 sm:hidden">
          <picture className="sm:w-40">
            <img src={illustration} alt={alt} />
          </picture>
          <div className="flex flex-col gap-2 sm:w-full">
            {heading ? <h2 className="heading text-center font-bold">{heading}</h2> : ""}
            <p className="paragraph text-justify">{paragraph}</p>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="paragraph text-justify inline-block">
          <picture className={`inline w-56 ${alignment === "right" ? "ml-8 float-right" : "mr-8 float-left"} mb-2`}>
            <img src={illustration} alt={alt} className={`w-full`} />
          </picture>
          {heading ? <h2 className="heading text-start font-bold mb-2">{heading}</h2> : ""}
          <p className="paragraph inline">{paragraph}</p>
        </div>
      </div>
    </div>
  )
}