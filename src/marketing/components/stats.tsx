import { StatsCard } from "./stats-card";

export function Stats() {
  return (
    <div className="flex flex-col gap-6 pt-20 pl-10 lg:w-96 lg:shrink-0 lg:border-gray-700 lg:border-r lg:pr-8">
      <StatsCard label="Professionals Trained" value="5000+" />
      <StatsCard label="Years of Experience" value="10+" />
      <StatsCard label="Countries" value="30+" />
    </div>
  );
}
