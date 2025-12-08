

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

  return (
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
    </div>
  );
}

export default Control
