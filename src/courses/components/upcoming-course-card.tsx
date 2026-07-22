import { MapPin, Radio } from "lucide-react";

export interface UpcomingCourseCardProps {
  countdownText?: string;
  dateDayEnd: string;
  dateDayStart: string;
  dateMonth: string;
  isLive?: boolean;
  location: string;
  tag?: string;
  title: string;
}

export function UpcomingCourseCard({
  dateDayStart,
  dateDayEnd,
  dateMonth,
  tag = "Featured",
  isLive = false,
  title,
  location,
  countdownText,
}: UpcomingCourseCardProps) {
  return (
    <div className="flex flex-col rounded-xl bg-lightblue p-5 text-white shadow-md transition-shadow hover:shadow-lg">
      <div className="flex items-start gap-4">
        <div className="flex shrink-0 flex-col font-bold text-white">
          <div className="flex items-baseline gap-1">
            <span className="font-extrabold text-2xl leading-none">
              {dateDayStart}
            </span>
            <span className="font-semibold text-xs opacity-90">
              -{dateDayEnd}
            </span>
          </div>
          <span className="mt-0.5 font-bold text-[10px] uppercase tracking-wider opacity-80">
            {dateMonth}
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            {Boolean(tag) && (
              <span className="rounded-full bg-(--color-orange) px-2 py-0.5 font-bold text-[10px] text-white uppercase tracking-wider">
                {tag}
              </span>
            )}
            {Boolean(isLive) && (
              <span className="flex items-center gap-1 font-bold text-red-500 text-xs">
                <Radio className="size-3.5 animate-pulse" />
              </span>
            )}
          </div>

          <h4 className="font-bold text-sm text-white uppercase leading-tight tracking-wide">
            {title}
          </h4>

          <div className="mt-0.5 flex items-center gap-1.5 font-medium text-white/90 text-xs">
            <MapPin className="size-3.5 shrink-0" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      {Boolean(countdownText) && (
        <div className="mt-4 border-white/20 border-t pt-2.5">
          <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/30">
            <div className="h-full w-2/3 rounded-full bg-white" />
          </div>
          <p className="mt-1.5 text-center font-medium text-[11px] text-white/90">
            {countdownText}
          </p>
        </div>
      )}
    </div>
  );
}
