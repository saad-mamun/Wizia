import { SquareArrowUpRight } from "lucide-react";

const Embrace = () => {
  return (
    <div className="bg-[#002228]">
      <div className="flex flex-col items-center gap-4 md:gap-7  py-10 px-6">
        <h1 className="text-[#0FF1F6] text-lg">GET STARTED</h1>
        <h2 className="text-white text-3xl">
          <span className="italic">Embrace</span>
          <span className="font-semibold">the new era of</span>
          <span className="italic"> outbound </span>.
        </h2>
        <div className="flex flex-col items-center gap-1">
          <p className="text-gray-400 tracking-wide">
            Wizia lets you train, activate, and  optimize aiDRs.
          </p>
          <p className="text-gray-400 tracking-wide">
            Take your outbound to new levels of performance and efficiency.
          </p>
        </div>
        <button className="bg-[#0FF1F6] flex py-4 md:py-2 px-14 md:px-5 rounded-full font-semibold gap-3">
          Sign Up for the Beta <SquareArrowUpRight className="w-4" />
        </button>
      </div>
    </div>
  );
};

export default Embrace;
