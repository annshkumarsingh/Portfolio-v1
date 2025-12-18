import Image from "next/image";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen max-w-4xl mx-auto px-6 pt-32"
    >
      <div className="mx-auto">
        <h2 className="text-3xl font-bold mb-10">Technical Skills</h2>
      </div>

      {/* Skills Box */}
      <div className="rounded-2xl shadow-lg hover:shadow-xl bg-white/80 p-8 zoom">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="relative w-12 h-12">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}