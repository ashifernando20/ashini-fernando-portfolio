
import { Code, Palette, Shield, Layers } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Creating interactive, responsive interfaces using modern frameworks like React and Angular. Focus on user experience, performance optimization, and cross-browser compatibility.",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "Cross-browser Testing"]
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end development with modern technologies including backend APIs, database design, and frontend integration. Complete web application solutions.",
      icon: <Layers className="w-8 h-8" />,
      color: "from-purple-400 to-purple-600",
      features: ["API Development", "Database Design", "System Architecture", "DevOps Integration"]
    },
    {
      title: "UI/UX Design",
      description: "User-centric design solutions with visual appeal. Creating intuitive interfaces that enhance user experience and drive engagement.",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-400 to-pink-600",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      title: "Software Quality Assurance",
      description: "Manual and automated testing for high-quality software. Ensuring applications meet requirements and function reliably across different scenarios.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-400 to-green-600",
      features: ["Test Planning", "Manual Testing", "Automated Testing", "Bug Tracking"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Services & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-white mb-3">Key Areas:</h4>
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-gray-300">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-semibold mb-4 text-white">Let's Work Together</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              I'm passionate about creating digital solutions that make a difference. Whether you need a 
              complete web application, UI/UX design, or quality assurance for your project, I'm here to help.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
