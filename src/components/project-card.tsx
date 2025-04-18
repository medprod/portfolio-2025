import { Card } from "./ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  category: "cloud" | "data-analysis" | "ai-ml" | "other";
  technologies: string[];
}

const ProjectCard = ({
  title,
  description,
  category,
  technologies,
}: ProjectCardProps) => {
  return (
    <Card className="p-6 bg-white/80 border-[#FFE8B0] hover:shadow-lg transition-shadow">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-[#8B6B3D]">{title}</h3>
          <span className="px-3 py-1 text-sm rounded-full bg-[#FFE8B0] text-[#8B6B3D]">
            {category.replace("-", " ")}
          </span>
        </div>
        <p className="text-gray-700">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-sm rounded bg-[#FFF9E6] text-[#8B6B3D]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
