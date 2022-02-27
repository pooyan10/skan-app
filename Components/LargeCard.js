import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16">
      <div className="relative h-96 min-w-[300px]">
        <Image
          className="rounded-2xl"
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute top-32 left-12 space-y-2">
        <h3 className="text-4xl mb-3 w-64 ">{title}</h3>
        <p>{description}</p>
        <button className=" text-sm bg-black text-white p-2 px-4 mt-5 rounded-xl">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
