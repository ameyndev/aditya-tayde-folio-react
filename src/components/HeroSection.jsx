import Portrait from "../assets/adi-portrait.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#312f30] px-8 py-16">
      {/* Right Side - Portrait (Appears first on mobile) */}
      <div className="order-1 md:order-2 mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={Portrait}
          alt="Aditya Tayde Portrait"
          className="w-64 md:w-80 shadow-lg shadow-[#eb5f2a]"
        />
      </div>

      {/* Left Side - Name and Introduction */}
      <div className="order-2 md:order-1 text-center md:text-left md:w-1/2 space-y-4 pt-8 md:pl-20  ">
        <h1 className="text-4xl md:text-5xl font-bold text-[#eb5f2a]">
          Hello, I am Aditya Tayde
        </h1>
        <p className="text-lg md:text-xl text-[#eb5f2a]">
          I am 21 years old from Mumbai. <br /> I love Video Editing and Graphic Designing.<br /> Cinematography is my passion.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
