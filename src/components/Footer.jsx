
const Footer = () => {
  return (
    <div className="bg-[#07292F]">
      <div className=" container mx-auto px-6 py-6 flex flex-col  md:flex-row items-center justify-between gap-5">
        <img src="/Lf.png" alt="Wizia" />
        <h3 className="text-gray-400">
          {" "}
          Copyright © { new Date().getFullYear()} Wizia. All rights reserved.{" "}
        </h3>
      </div>
    </div>
  );
}

export default Footer
