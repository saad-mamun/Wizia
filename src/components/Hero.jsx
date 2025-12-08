import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-[url(/Img.png)]   bg-cover bg-center w-full h-svh ">
      <div className=" pt-40   px-3 md:10 lg:20 text-white flex flex-col items-center md:items-start">
        <h1 className="text-[#0FF1F6] text-lg md:text-2xl font-medium ">
          AI SDRs (aiDRs)
        </h1>
        <h2 className="text-[40px] lg:text-[60px] w-[220px]">
          <span className="font-semibold">More</span> <span className="italic"> leads </span>
          <span className="font-semibold">less</span>
          <span className="italic"> people</span>.
        </h2>
        <p className="text-[20px] text-gray-400">
          Train an aiDR on your ICP and messaging matrix. Activate it on a
          patch. It will send personalized sequences to every target contact.
        </p>
        <div className="mt-10 flex flex-row items-center px-4 py-3 bg-[#0FF1F6] text-[#002228] rounded-full font-semibold font-sans">
          <button>Sign Up for the Beta</button>
          <ArrowUpRight />
        </div>
      </div>
    </div>
  );
};

export default Hero;
