/* eslint-disable react/no-unknown-property */
import project1 from "../assets/images/proj1.png";
import project2 from "../assets/images/proj2.png";
import project3 from "../assets/images/proj3.png";
import project4 from "../assets/images/proj4.png";

const Projects = () => {
  return (
    <div
      className="p-20 flex flex-col items-center justify-center"
      name="Portfolio"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20
         leading-normal uppercase text-fuchsia-600"
      >
        Projects :{" "}
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-14">
        <div data-aos="fade-up">
          <img
            height={350}
            width={300}
            className="text-[26px] flex justify-center items-center 
        font-semibold text-fuchsia-800
         rounded-3xl h-36 w-48 border-2 border-fuchsia-800 b_glow"
            src={project1}
            alt=""
          />
          <div className="flex justify-center items-center gap-2">
            <a
              className=" mt-4
             bg-indigo-600 px-1 rounded
             text-gray-400
             hover:text-white	
             "
              href="https://portfolio-client-3.web.app/"
              target="_blank"
            >
              Live Link
            </a>
            <a
              className=" mt-4
             bg-indigo-600 px-1 rounded
             text-gray-400
             hover:text-white	
             "
              href="https://github.com/codeCampWithSifat/portfolio-project-client-3"
              target="_blank"
            >
              Github Link
            </a>
          </div>
        </div>

        <div data-aos="fade-down">
          <img
            height={350}
            width={300}
            className="text-[26px] flex justify-center items-center 
        font-semibold text-fuchsia-800
         rounded-3xl h-36 w-48 border-2 border-fuchsia-800 b_glow"
            src={project2}
            alt=""
          />
          <div className="flex justify-center items-center gap-2">
            <a
              className=" mt-4
             bg-indigo-600 px-1 rounded
             text-gray-400
             hover:text-white	
             "
              href="https://ticket-counter-client.vercel.app/"
              target="_blank"
            >
              Live Link
            </a>
            <a
              className=" mt-4
             bg-indigo-600 px-1 rounded
             text-gray-400
             hover:text-white	
             "
              href="https://github.com/codeCampWithSifat/ticket-counter-client"
              target="_blank"
            >
              Github Link
            </a>
          </div>
        </div>

        <div data-aos="fade-up">
          <img
            height={350}
            width={300}
            className="text-[26px] flex justify-center items-center 
        font-semibold text-fuchsia-800
         rounded-3xl h-36 w-48 border-2 border-fuchsia-800 b_glow"
            src={project3}
            alt=""
          />
          <div className="flex justify-center items-center gap-2">
            <a
              className=" mt-4
             bg-indigo-600 px-1 rounded
             text-gray-400
             hover:text-white	
             "
              href="https://portfolio-client-sayed.web.app/"
              target="_blank"
            >
              Live Link
            </a>
            <a
              className=" mt-4
             bg-indigo-600 px-1 rounded
             text-gray-400
             hover:text-white	
             "
              href="https://github.com/codeCampWithSifat/portfolio-client-2"
              target="_blank"
            >
              Github Link
            </a>
          </div>
        </div>

        <div data-aos="fade-down">
          <img
            height={350}
            width={300}
            className="text-[26px] flex justify-center items-center 
            font-semibold text-fuchsia-800
            rounded-3xl h-36 w-48 border-2 border-fuchsia-800 b_glow"
            src={project4}
            alt=""
          />
          <div className="flex justify-center items-center gap-2">
            <a
              className=" mt-4
             bg-indigo-600 px-1 rounded
             text-gray-400
             hover:text-white	
             "
              href="https://stried-assignment-1-revive-frontend.vercel.app/"
              target="_blank"
            >
              Live Link
            </a>
            <a
              className=" mt-4
             bg-indigo-600 px-1 rounded
             text-gray-400
             hover:text-white	
             "
              href="https://github.com/codeCampWithSifat/stried-assignment-1-revive-frontend"
              target="_blank"
            >
              Github Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
