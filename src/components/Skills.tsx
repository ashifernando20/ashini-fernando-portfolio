
import { Code, Database, Palette, TestTube } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Java", "JavaScript", "Python", "MATLAB"],
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Database className="w-6 h-6" />,
      skills: ["Spring Boot", "React", "Angular", "Node.js"],
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Design & Tools",
      icon: <Palette className="w-6 h-6" />,
      skills: ["UI/UX Design", "Sage 50", "Figma", "Adobe Creative Suite"],
      color: "from-pink-400 to-pink-600"
    },
    {
      title: "Quality Assurance",
      icon: <TestTube className="w-6 h-6" />,
      skills: ["Manual Testing", "Automated Testing", "Test Planning", "Bug Tracking"],
      color: "from-green-400 to-green-600"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-700/50 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {["Java", "JavaScript", "React", "Node.js", "Python", "UI/UX", "Testing", "Spring Boot"].map((skill, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-xl font-bold text-white border border-gray-600">
                {skill.slice(0, 2)}
              </div>
              <p className="text-gray-300 text-sm">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
