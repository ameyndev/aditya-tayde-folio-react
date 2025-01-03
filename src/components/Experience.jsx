const Experience = () => {
  const experiences = [
    {
      role: "Junior Designer",
      duration: "2020 - 2021",
      details: "Worked at Media Culture as a Junior Designer",
    },
    {
      role: "Graphic Designer & Video Editor",
      duration: "2021 - 2023",
      details: "Worked at TFG HOSPITALITY as a Graphic Designer & Video Editor",
    },
    {
      role: "Graphic Designer & Video Editor",
      duration: "2023 - 2024",
      details:
        "Worked at BLANK MEDIA as a Graphic Designer, Video Editor & Videographer",
    },
  ];

  return (
    <section className="bg-[#312f30] px-8 py-16">
      <h2 className="text-4xl font-bold text-[#eb5f2a] text-center mb-8">
        Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#403d3e] md:mx-24 md:px-12 p-6 rounded-lg shadow-lg space-y-2"
          >
            <h3 className="text-2xl font-semibold text-[#eb5f2a]">
              {exp.role}
            </h3>
            <p className="text-md text-gray-400">{exp.duration}</p>
            <p className="text-lg text-[#f1f1f1]">{exp.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
