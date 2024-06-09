/* eslint-disable react/no-unknown-property */
import project1 from "../assets/images/proj1.png";
import project2 from "../assets/images/proj2.png";
import project3 from "../assets/images/proj3.png";
import project4 from "../assets/images/proj4.png";
import project5 from "../assets/images/proj5.png";
import project6 from "../assets/images/proj6.png";

const Projects = () => {
  return (
    <div
      className="p-20 flex flex-col items-center justify-center"
      name="Portfolio"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-600"
      >
        Projects :{" "}
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-14">
        <img
          height={350}
          width={300}
          data-aos="fade-up"
          className="text-[26px] flex justify-center items-center 
        font-semibold text-fuchsia-800
         rounded-3xl h-36 w-48 border-2 border-fuchsia-800 b_glow"
          src={project1}
          alt=""
        />
        <img
          data-aos="fade-down"
          height={350}
          width={300}
          className="text-[26px] flex justify-center items-center 
        font-semibold text-fuchsia-800
         rounded-3xl h-36 w-48 border-2 border-fuchsia-800 b_glow"
          src={project2}
          alt=""
        />
        <img
          data-aos="fade-up"
          height={350}
          width={300}
          className="text-[26px] flex justify-center items-center 
        font-semibold text-fuchsia-800
         rounded-3xl h-36 w-48 border-2 border-fuchsia-800 b_glow"
          src={project3}
          alt=""
        />
        <img
          data-aos="fade-down"
          height={350}
          width={300}
          className="text-[26px] flex justify-center items-center 
        font-semibold text-fuchsia-800
         rounded-3xl h-36 w-48 border-2 border-fuchsia-800 b_glow"
          src={project4}
          alt=""
        />
        <img
          data-aos="fade-up"
          height={350}
          width={300}
          className="text-[26px] flex justify-center items-center 
        font-semibold text-fuchsia-800
         rounded-3xl h-36 w-48 border-2 border-fuchsia-800 b_glow"
          src={project5}
          alt=""
        />
        <img
          data-aos="fade-down"
          height={350}
          width={300}
          className="text-[26px] flex justify-center items-center 
        font-semibold text-fuchsia-800
         rounded-3xl h-36 w-48 border-2 border-fuchsia-800 b_glow"
          src={project6}
          alt=""
        />
      </div>
    </div>
  );
};

export default Projects;
