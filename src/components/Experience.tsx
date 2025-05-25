
import { Briefcase, GraduationCap, Search } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "School Leaver Training",
      company: "People's Bank, Chilaw Branch",
      role: "Pawning Cashier",
      period: "Recent",
      description: "Gained hands-on experience in banking operations and customer service",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Academic Journey",
      company: "Rajarata University of Sri Lanka",
      role: "Information Systems Student",
      period: "Current - Final Year",
      description: "Pursuing BSc Honours in Information Systems with focus on web development and software engineering",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Seeking Opportunity",
      company: "IT Industry",
      role: "Internship Position",
      period: "Actively Looking",
      description: "Seeking IT internship opportunities to apply theoretical knowledge in real-world projects",
      icon: <Search className="w-6 h-6" />,
      color: "from-green-400 to-green-600"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience & Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                    <span className="text-gray-400 text-sm mt-1 md:mt-0">{exp.period}</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center mb-3">
                    <h4 className="text-lg font-medium text-blue-400">{exp.company}</h4>
                    <span className="hidden md:inline mx-2 text-gray-500">•</span>
                    <span className="text-gray-300">{exp.role}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-semibold mb-4 text-white">Ready for New Challenges</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I'm actively seeking internship opportunities where I can contribute my skills in web development, 
              UI/UX design, and software quality assurance while continuing to learn and grow professionally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
