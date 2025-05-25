
import { ExternalLink, Github, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Online Book Selling Website",
      description: "A full-stack web application for browsing, purchasing, and managing book inventories. Features responsive design, user authentication, shopping cart functionality, and admin panel for inventory management.",
      role: "Full-Stack Developer",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      features: [
        "Responsive user interface",
        "User authentication & authorization",
        "Shopping cart & checkout system",
        "Inventory management",
        "Search and filtering",
        "Payment integration ready"
      ],
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center text-white`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex items-center gap-4">
                        <span className="text-blue-400 font-medium">{project.role}</span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-semibold mb-4 text-white">More Projects Coming Soon</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I'm continuously working on new projects that showcase different aspects of web development, 
              UI/UX design, and software engineering. Stay tuned for more exciting work!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
