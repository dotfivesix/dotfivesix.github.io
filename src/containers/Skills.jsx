import SkillCard from "../components/SkillCard";

import {skills} from "../data.json";

export default function Skills() {
    return (
      <section id="skills" className="flex justify-center bg-neutral-100 py-20">
        <div className="px-8 md:px-12 max-w-7xl">
          <h2 className="heading mb-2 text-center sm:text-start">Skills</h2>
          <p className="paragraph text-justify">I am always eager to learn and stay up to date with the latest developments in the field. This dedication to continuous learning allows me to bring a fresh and well-rounded perspective to my work. Here are some technologies that I know currently.</p>
          <ul className="mt-10 flex flex-row flex-wrap gap-2 justify-center">
            {skills.map(skill => {
              return <SkillCard key={skill.file.split(".")[0]} name={skill.name} file={skill.file} />
            })}
          </ul>
        </div>
      </section>
    )
  }