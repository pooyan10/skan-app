import Image from "next/image";
import { motion } from "framer-motion";
function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[930px]">
      <Image
        alt=""
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm  sm:text-lg font-semibold">
          Not sure where to go? perfect.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-lg "
        >
          Im flexible
        </motion.button>
      </div>
    </div>
  );
}

export default Banner;
