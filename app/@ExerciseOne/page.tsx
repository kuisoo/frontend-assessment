import React from "react";

const ExerciseOne = () => {
  return (
    <div className="max-w-[600px] h-max 2xl:max-w-[1920px] 2xl:h-[1300px]">
      {/* Banner */}
      <div
        className="w-[600px] h-[600px] bg-mobile-banner bg-cover tracking-[0.2em] text-white
      2xl:w-[1920px] 2xl:h-[650px] 2xl:bg-desktop-banner 2xl:flex 2xl:items-center"
      >
        <div className="py-44 px-5 w-[600px] h-[600px] 2xl:w-full 2xl:h-max 2xl:py-0">
          <div className="w-full text-center leading-[5]">
            <span className="text-7xl font-bold">Hello Developer!</span>
          </div>
          <div className="w-full text-center leading-loose">
            <span className="text-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </span>
          </div>
        </div>
      </div>
      {/* Items */}
      <div
        className="grid grid-cols-1 justify-items-center gap-[30px] my-[60px]
      2xl:grid-cols-3 2xl:px-[230px] 2xl:h-[750px] 2xl:place-items-center 2xl:my-0 2xl:relative"
      >
        {CardItems.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col p-[30px] w-[460px] h-max rounded-lg border 2xl:h-[680px]"
            >
              <img
                src={item.src}
                alt="image content"
                className="rounded-lg w-[400px] h-[300px]"
              />
              <div className="mt-[20px] text-2xl text-center">{item.text}</div>
              <div className="flex justify-center mt-[20px] 2xl:grow 2xl:items-end">
                <button className="px-5 py-2 h-max text-2xl font-bold tracking-wider border-4 border-black rounded-full">
                  READ MORE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExerciseOne;

const CardItems = [
  {
    src: "/img/content-images.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    src: "/img/content-images.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    src: "/img/content-images.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
];
