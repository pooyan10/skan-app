import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="hover:scale-105 cursor-pointer transition transform duration-300 ease-out">
      <div className="relative  h-80 w-80">
        <Image className="rounded-xl" alt="" src={img} layout="fill" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
