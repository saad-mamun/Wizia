import React from "react";

const Allocate = () => {

    const rating = [
      {
        per: "32%",
        des: "Improvement in Open Rates",
      },
      {
        per: "75%",
        des: "Improvement in Ramp Time",
      },
      {
        per: "40%",
        des: "Improvement in Meetings Booked",
      },
    ];


  return (
    // bg have to replace image
    <div className="bg-[#07292F] py-14 ">
      <div className="container mx-auto px-6 flex flex-col items-start justify-between gap-10 md:gap-20 lg:gap-30">
        <div className="space-y-4">
          <h1 className="text-3xl text-white font-semibold max-w-[501px]">
            Allocate effort where your reps make an inpact.
          </h1>
          <h2 className="text-[#0FF1F6] italic text-3xl">
            Let us handle the rest.
          </h2>
          <p className="text-gray-400 text-xl max-w-[550px]">
            Keep your reps “in the air” -- out in the field and on the phone
            where they can build relationships.
          </p>
        </div>
        <div className="flex flex-col md:flex-row  items-start gap-5 md:gap-10">
          {rating.map((item, index) => (
            <div key={index} className="md:max-w-[174px] space-y-2 md:space-y-5">
              <h1 className="text-[#0FF1F6] text-3xl md:text-4xl font-semibold">
                {item.per}
              </h1>
              <p className="text-gray-300 text-[16px] md:text-lg">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allocate;
