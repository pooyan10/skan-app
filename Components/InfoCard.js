import Image from "next/image";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div>
      <div className="relative h-24 w-40">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>

      <div></div>
    </div>
  );
}

export default InfoCard;
