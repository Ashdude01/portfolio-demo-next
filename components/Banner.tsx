import Image from "next/image";
// import ProfileImg from "../public/img/profileImg.jpg";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src='https://i.imgur.com/P5uM15D.jpeg'
          width={300}
          height={300}
          alt="ProfileImg"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start    gap-2">
        <h1 className="text-3xl md:text-5xl font-bold whitespace-nowrap text-white">Bittu Sharma</h1>
        <h3 className="text-xl md:text-2xl whitespace-nowrap font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
            DevOps & Cloud Engineer
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
        I am a DevOps Engineer skilled in DevOps, DevSecOps, and Cloud technologies. I automate software delivery with tools like Jenkins, Docker, and Kubernetes, 
        ensuring secure and scalable cloud deployments.
        </p>
      </div>
    </div>
  );
};

export default Banner;
