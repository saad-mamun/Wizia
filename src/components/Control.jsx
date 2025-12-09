import { CircleCheck, ArrowLeft , ArrowRight } from "lucide-react";
import { useState } from "react";

const Control = () => {
  const tables = [
    {
      img: "/Control.png",
      title: "You’re in Control",
      des: "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
    },
    {
      img: "/Scalable.png",
      title: "Infinitely Scalable",
      des: "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
    },
    {
      img: "/Incredibly.png",
      title: "Incredibly Flexible",
      des: "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
    },
  ];

  const partners = [
    { img: "/BackHub.png", title: "BackHub" },
    { img: "CableLabs.png", title: "CableLabs" },
    { img: "DBS.png", title: "DBS" },
    { img: "EasyEuro.png", title: "EasyEuro" },
    { img: "AMD.png", title: "AMD" },
  ];

  const Comments = [
    {
      id: 1,
      img: "/Coart.png",
      desc: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "John Doe",
      location: "Chief Strategy Officer @ Company",
    },
    {
      id: 2,
      img: "/Coart.png",
      desc: "Page layouts look better with something in each section. Web page designers, content writers, and layout artists use lorem.",
      name: "Mamun",
      location: "Chief Strategy Officer @ Company",
    },
    {
      id: 3,
      img: "/Coart.png",
      desc: " editorials, and filler before the final written content and website designs receive client approval..",
      name: "Liton",
      location: "Chief Strategy Officer @ Company",
    },
    {
      id: 4,
      img: "/Coart.png",
      desc: "Fun Lorem Ipsum text may appear in any size and font to simulate everything you create for your campaigns.",
      name: "Naima",
      location: "Chief Strategy Officer @ Company",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? Comments.length - 1 : prevIndex - 1 )
  }
  const nextSlide = () => {

    setCurrentIndex((prevIndex) => prevIndex === Comments.length - 1 ? 0 : prevIndex + 1  )
  }

  const { img, desc, name, location } = Comments[currentIndex];

   const goToSlide = (index) => {
     setCurrentIndex(index);
   };

  return (
    <div>
      <div className="bg-[#07292F] py-10 flex flex-col items-center">
        <h1 className="text-[#0FF1F6]">our trusted partners</h1>
        <div className="grid grid-cols-2 md:grid-cols-5  items-center justify-items-center  gap-4 md:gap-7 lg:gap-10">
          {partners.map((item, index) => (
            <div key={index} className="">
              <img src={item.img} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#002228]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 mx-auto container gap-10 px-6">
          {tables.map((item, index) => (
            <div key={index} className="max-w-[384px] space-y-3">
              <img src={item.img} alt={item.title} />
              <h1 className="text-white text-[24px] md:text-[28px] font-semibold ">
                {item.title}
              </h1>
              <p className="text-gray-400 text-[22px]">{item.des}</p>
            </div>
          ))}
        </div>
        <div className="bg-[url(/train.png)] rounded-r-3xl mx-8">
          <div className="px-5 py-6 md:py-12 lg:py-14  flex flex-col items-start md:items-center  gap-5 md:gap-7 lg:gap-10">
            <div className="">
              <h1 className="text-white text-3xl md:text-[35px] lg:text-[40px] font-medium">
                Train your aiDR on your...
              </h1>
              <h2 className="text-[#0FF1F6] text-xl md:text-[30px] lg:text-[35px] italic">
                prefered email st|
              </h2>
            </div>
            <p className="text-white text-[16px] md:text-2xl  max-w-[275px] md:max-w-[450px]">
              You’re in control. Train your aiDR on elements of your Marketing
              strategy.
            </p>
            <div className="grid md:grid-cols-2">
              <button className="flex flex-row items-center gap-3 text-[#14BCB2]">
                <CircleCheck className=" w-4 md:w-5 h-4 md:h-5" />
                <h1 className="text-[16px] md:text-[20px]">Quick to ramp</h1>
              </button>
              <button className="flex flex-row items-center gap-3 text-[#14BCB2]">
                <CircleCheck className=" w-4 md:w-5 h-4 md:h-5" />
                <h1 className="text-[16px] md:text-[20px]">Easy to optimize</h1>
              </button>
              <button className="flex flex-row items-center gap-3 text-[#14BCB2]">
                <CircleCheck className=" w-4 md:w-5 h-4 md:h-5" />
                <h1 className="text-[16px] md:text-[20px]">
                  Quick to scale up
                </h1>
              </button>
              <button className="flex flex-row items-center gap-3 text-[#14BCB2]">
                <CircleCheck className=" w-4 md:w-5 h-4 md:h-5" />
                <h1 className="text-[16px] md:text-[20px]">
                  Works with all your existing tools
                </h1>
              </button>
            </div>
          </div>
        </div>
        {/* Carousel */}
        <div className="flex flex-col gap-3 py-10 ">
          <div className="flex flex-row items-center md:gap-x-12 px-6 mx-auto container">
            <ArrowLeft
              onClick={prevSlide}
              className="hidden md:block text-white border border-gray-700 bg-gray-700"
            />
            <div className="flex flex-col items-center gap-8">
              <img className="w-10" src={img} alt={name} />
              <p className="text-white text-3xl max-w-[910px]">{desc}</p>
              <div className="flex flex-col items-center">
                <h2 className="text-[#0FF1F6] text-2xl font-semibold">
                  {name}
                </h2>
                <p className="text-[#96ACAF] text-xl">{location}</p>
              </div>
            </div>
            <ArrowRight
              onClick={nextSlide}
              className="hidden md:block text-white border border-gray-700 bg-gray-700"
            />
          </div>
          {/* Dots */}
          <div>
            <div className="flex justify-center mt-3 space-x-2">
              {Comments.map((_, index) => (
                <div
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    currentIndex === index ? "bg-blue-600" : "bg-gray-400"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
