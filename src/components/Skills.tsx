import { Code, Database, Palette, TestTube, Zap, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "React"],
      color: "from-blue-400 to-blue-600",
      bgColor: "from-blue-500/10 to-blue-600/10"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Database className="w-6 h-6" />,
      skills: ["Spring Boot", "React", "Angular", "Node.js"],
      color: "from-purple-400 to-purple-600",
      bgColor: "from-purple-500/10 to-purple-600/10"
    },
    {
      title: "Design & Tools",
      icon: <Palette className="w-6 h-6" />,
      skills: ["UI/UX Design", "Sage 50", "Figma", "Adobe Creative Suite"],
      color: "from-pink-400 to-pink-600",
      bgColor: "from-pink-500/10 to-pink-600/10"
    },
    {
      title: "Quality Assurance",
      icon: <TestTube className="w-6 h-6" />,
      skills: ["Manual Testing", "Automated Testing", "Test Planning", "Bug Tracking"],
      color: "from-green-400 to-green-600",
      bgColor: "from-green-500/10 to-green-600/10"
    }
  ];

  const topSkills = [
    { name: "HTML", icon: "🌐", level: 90 },
    { name: "CSS", icon: "🎨", level: 85 },
    { name: "JavaScript", icon: "🟨", level: 80 },
    { name: "React", icon: "⚛️", level: 75 },
    { name: "Node.js", icon: "🟢", level: 70 },
    { name: "MongoDB", icon: "🍃", level: 65 },
    { name: "UI/UX", icon: "🎨", level: 80 },
    { name: "Testing", icon: "🧪", level: 75 }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/5 w-32 h-32 bg-blue-500/5 rounded-full filter blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/5 w-48 h-48 bg-purple-500/5 rounded-full filter blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for modern web development and quality assurance
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {category.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold mb-6 text-white">{category.title}</h3>
                
                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill bg-gray-700/40 rounded-xl px-4 py-3 text-sm text-gray-300 hover:bg-gray-700/60 transition-all duration-300 hover:transform hover:translateX-2 border border-gray-600/30 hover:border-gray-500/50"
                    >
                      <div className="flex items-center justify-between">
                        <span>{skill}</span>
                        <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full opacity-70 group-hover/skill:opacity-100 transition-opacity`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Hover effect background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}></div>
            </div>
          ))}
        </div>

        {/* Skills Progress */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-2">Proficiency Levels</h3>
            <p className="text-gray-400">Current skill proficiency across key technologies</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topSkills.map((skill, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  {/* Circular progress */}
                  <div className="w-20 h-20 mx-auto relative">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-gray-700"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - skill.level / 100)}`}
                        className="transition-all duration-1000 ease-out"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl">{skill.icon}</span>
                    </div>
                  </div>
                  
                  {/* Percentage */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                    <span className="text-xs font-medium text-gray-400 bg-gray-800 px-2 py-1 rounded-full">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
