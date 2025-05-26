
import { ExternalLink, Github, ShoppingCart, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Online Book Selling Website",
      description: "A comprehensive full-stack web application designed for browsing, purchasing, and managing book inventories. Features a modern responsive design, secure user authentication, intuitive shopping cart functionality, and a comprehensive admin panel for inventory management.",
      role: "Full-Stack Developer",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "JWT"],
      features: [
        "Responsive user interface with modern design",
        "Secure user authentication & authorization",
        "Advanced shopping cart & checkout system",
        "Real-time inventory management",
        "Advanced search and filtering capabilities",
        "Payment integration ready architecture"
      ],
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600",
      status: "Completed",
      statusColor: "from-green-400 to-green-600",
      duration: "3 months",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/6 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/6 w-56 h-56 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative solutions built with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute -top-3 -right-3 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Featured
                  </div>
                </div>
              )}

              {/* Main project card */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 overflow-hidden hover:border-gray-600/50 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                {/* Header section */}
                <div className="p-8 pb-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-6">
                      <div className={`w-20 h-20 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center text-white shadow-xl`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                        <div className="flex items-center gap-4 flex-wrap">
                          <span className="text-blue-400 font-medium text-lg">{project.role}</span>
                          <div className={`px-3 py-1 bg-gradient-to-r ${project.statusColor} rounded-full text-black text-sm font-medium`}>
                            {project.status}
                          </div>
                          <div className="flex items-center gap-1 text-gray-400 text-sm">
                            <Clock className="w-4 h-4" />
                            {project.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>

                {/* Content grid */}
                <div className="px-8 pb-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Technologies */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 bg-gray-700/60 text-gray-300 rounded-xl text-sm border border-gray-600/50 hover:border-gray-500/50 hover:bg-gray-700/80 transition-all duration-300 hover:transform hover:scale-105"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-gray-300 text-sm flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-4 mt-8 pt-6 border-t border-gray-700/50">
                    <Button 
                      variant="outline" 
                      className="border-gray-600/50 bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500/50 px-6 py-3 rounded-xl transition-all duration-300 group/btn"
                    >
                      <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      View Code
                    </Button>
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-xl transition-all duration-300 group/btn">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Coming soon section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-semibold mb-4 text-white">More Projects Coming Soon</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm continuously working on new projects that showcase different aspects of web development, 
                UI/UX design, and software engineering. Stay tuned for more exciting work!
              </p>
              <div className="flex justify-center gap-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
