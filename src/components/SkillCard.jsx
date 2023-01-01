export default function SkillCard({name, file})
{
    return (
        <li className="hover:border-black hover:bg-white bg-neutral-50 rounded-md border-[1px] w-32 h-32 flex flex-col justify-center items-center gap-4 group cursor-pointer sm:w-40 sm:h-40">
            <picture>
                <img className="cursor-pointer w-16 h-16 sm:w-20 sm:h-20" src={`/images/technologies/${file}`} alt={`${file.split(".")[0]}-logo`} />
            </picture>
            <h4 className="font-bold font-inter text-neutral-800 group-hover:text-black sm:text-lg">{name}</h4>
        </li>
    )
}