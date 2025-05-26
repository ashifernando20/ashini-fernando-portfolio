
import { Code, Palette, Shield, Layers, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Creating interactive, responsive interfaces using modern frameworks like React and Angular. Focus on user experience, performance optimization, and cross-browser compatibility with cutting-edge technologies.",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "Cross-browser Testing"],
      price: "Competitive rates",
      delivery: "2-4 weeks"
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end development with modern technologies including backend APIs, database design, and frontend integration. Complete web application solutions from concept to deployment.",
      icon: <Layers className="w-8 h-8" />,
      color: "from-purple-400 to-purple-600",
      features: ["API Development", "Database Design", "System Architecture", "DevOps Integration"],
      price: "Project-based",
      delivery: "4-8 weeks"
    },
    {
      title: "UI/UX Design",
      description: "User-centric design solutions with visual appeal and intuitive functionality. Creating interfaces that enhance user experience and drive engagement through thoughtful design principles.",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-400 to-pink-600",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
      price: "Design packages",
      delivery: "1-3 weeks"
    },
    {
      title: "Software Quality Assurance",
      description: "Comprehensive manual and automated testing for high-quality software. Ensuring applications meet requirements and function reliably across different scenarios and environments.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-400 to-green-600",
      features: ["Test Planning", "Manual Testing", "Automated Testing", "Bug Tracking"],
      price: "Hourly rates",
      delivery: "Ongoing"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-transparent to-gray-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Services & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive digital solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Service card */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group-hover:transform group-hover:scale-105 h-full">
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white shadow-xl flex-shrink-0`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        {service.delivery}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {service.price}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                    Key Areas
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <Button 
                  variant="outline" 
                  className="w-full border-gray-600/50 bg-gray-700/30 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500/50 rounded-xl transition-all duration-300 group/btn"
                >
                  <span className="mr-2">Learn More</span>
                  <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full group-hover/btn:scale-125 transition-transform`}></div>
                </Button>
              </div>

              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl -z-10 blur-xl`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-3xl font-semibold mb-4 text-white">Let's Work Together</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm passionate about creating digital solutions that make a difference. Whether you need a 
                complete web application, UI/UX design, or quality assurance for your project, I'm here to help 
                bring your vision to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 group">
                  <span className="mr-2">Get In Touch</span>
                  <div className="w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform"></div>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-600/50 bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500/50 px-8 py-4 rounded-xl transition-all duration-300"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
