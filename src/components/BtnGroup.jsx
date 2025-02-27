import Marquee from "react-fast-marquee";

const BtnGroup = () => {
  const data = [
    { name: "Barishal", value: 363 },
    { name: "Khulna", value: 694 },
    { name: "Sylhet", value: 726 }
  ];

  return (
    <div className="flex gap-1 pt-4 w-[760px]">
      <Marquee pauseOnHover={true}>
      {data.map((item, index) => (
        <button
          key={index}
          className="px-20 py-1 text-[#80479C] cursor-pointer font-bold rounded-full border bg-white border-gray-300 shadow-sm hover:bg-purple-100 transition duration-200 text-sm mr-6 "
        >
          {item.name}: {item.value}
        </button>
      ))}
      </Marquee>
    </div>
  );
};

export default BtnGroup;
