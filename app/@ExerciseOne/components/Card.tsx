import React from "react";

const Card = ({
  imgSrc,
  description,
}: {
  imgSrc: string;
  description: string;
}) => {
  return (
    <div className="card">
      <img
        src={imgSrc}
        alt="image content"
        className="rounded-lg w-[400px] h-[300px]"
      />
      <div className="mt-[20px] text-2xl text-center">{description}</div>
      <div className="flex justify-center mt-[20px] 2xl:grow 2xl:items-end">
        <button className="px-5 py-2 h-max text-2xl font-bold tracking-wider border-4 border-black rounded-full hover:bg-neutral-300/50">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default Card;
