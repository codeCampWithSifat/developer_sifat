import about from "../../public/about4.jpeg";
const About = () => {
  return (
    <>
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <div className="md:grid md:grid-cols-2 sm:py-16">
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
            <div className="my-auto mx-6">
              <h2 className="text-4xl font-bold mb-4 primary-color">
                About Me
              </h2>
              <p className="text-base lg:text-lg">
                Hello, Im Akhil, a passionate Web developer with a keen eye for
                MERN Stack . With a background in IT, I strive to create
                impactful and visually stunning Software solutions that leave a
                lasting impression.
              </p>
            </div>
          </div>
          <img
            src={about}
            className="mx-auto rounded-xl py-8 md:py-0"
            height={300}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default About;
