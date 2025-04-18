import { Card } from "./ui/card";

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  isLast?: boolean;
}

const TimelineItem = ({
  title,
  company,
  period,
  description,
}: // isLast = false,
TimelineItemProps) => {
  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#FFE8B0]" />

      {/* Timeline dot */}
      <div className="absolute left-[-6px] top-2 w-4 h-4 rounded-full bg-[#8B6B3D] border-2 border-[#FFE8B0]" />

      <Card className="p-6 bg-white/80 border-[#FFE8B0]">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-[#8B6B3D]">{title}</h3>
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium">{company}</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600">{period}</span>
          </div>
          <p className="text-gray-700 mt-2">{description}</p>
        </div>
      </Card>
    </div>
  );
};

export default TimelineItem;
