import SkillCard from "../components/SkillCard"
import { devTools } from "app/data/skills"
import { programmingLanguages} from "app/data/skills"
import { frameworks} from "app/data/skills"
import { cloudServices} from "app/data/skills"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Skills | nerfnyanit"
}

export default function page() {
  return (
  <div className="py-20 px-6 mx-auto max-w-5xl">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 tracking-wide">
        SKILLS
      </h1>
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-white">
        ProgrammingLanguages
      </h2>

      <div className="flex flex-wrap gap-6">
        {programmingLanguages.map((tool) => (
          <SkillCard
            key={tool.name}
            name={tool.name}         
            img={tool.img}           
            month={tool.month}
          />
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-semibold mb-6 text-white">
        Frameworks
      </h2>

      <div className="flex flex-wrap gap-6">
        {frameworks.map((tool) => (
          <SkillCard
            key={tool.name}
            name={tool.name}         
            img={tool.img}           
            month={tool.month}
          />
        ))}
      </div>
    </section>

        <section>
      <h2 className="text-2xl font-semibold mb-6 text-white">
        Cloud Services
      </h2>

      <div className="flex flex-wrap gap-6">
        {cloudServices.map((tool) => (
          <SkillCard
            key={tool.name}
            name={tool.name}         
            img={tool.img}           
            month={tool.month}
          />
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-semibold mb-6 text-white">
        Development Tool
      </h2>

      <div className="flex flex-wrap gap-6">
        {devTools.map((tool) => (
          <SkillCard
            key={tool.name}
            name={tool.name}         
            img={tool.img}           
            month={tool.month}
          />
        ))}
      </div>
    </section>
  </div>
  )
}
