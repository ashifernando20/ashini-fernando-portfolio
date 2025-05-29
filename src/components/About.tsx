import { GraduationCap, MapPin, Heart, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-transparent to-gray-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Section */}
          <div className="relative group">
            <div className="w-full max-w-md mx-auto">
              {/* Animated rings around photo */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="w-full h-full border-2 border-dashed border-blue-400/30 rounded-full"></div>
              </div>
              <div className="absolute inset-4 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '20s' }}>
                <div className="w-full h-full border border-purple-400/20 rounded-full"></div>
              </div>
              
              <div className="aspect-square bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full p-8 backdrop-blur-sm border border-gray-700/50 relative overflow-hidden">
                {/* Profile photo with circular mask */}
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img 
                    src="https://i.postimg.cc/Lsr9nPsC/Whats-App-Image-2025-05-26-at-11-54-17-88a47e4f.jpg"
                    alt="W.A.N. Fernando - Profile Picture"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-0 right-0 text-center z-10">
                    <p className="text-white font-medium text-lg shadow-lg">W.A.N. Fernando</p>
                    <p className="text-gray-200 text-sm">Information Systems Student</p>
                    <div className="flex justify-center gap-1 mt-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/30">
                  <h4 className="font-medium text-white mb-1">BSc Honours in Information Systems</h4>
                  <p className="text-gray-400 text-sm">Rajarata University of Sri Lanka</p>
                  <span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs mt-2">Final Year</span>
                </div>
                <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/30">
                  <h4 className="font-medium text-white mb-1">AAT Sri Lanka</h4>
                  <p className="text-gray-400 text-sm">Association of Accounting Technicians</p>
                  <span className="inline-block px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs mt-2">Passed Finalist</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                </div>
                <p className="text-gray-300">Chilaw, North Western Province, Sri Lanka</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                    <Award className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Status</h3>
                </div>
                <p className="text-gray-300">Available for Internships</p>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Heart className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">Passion</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                I have a passion for information technology, design, software quality assurance, and web development. 
                I enjoy bringing ideas to life through clean code, compelling visuals, and data-driven strategies.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Target className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">Future Goals</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                My future goals include growing as a frontend developer, full-stack developer, UI/UX designer, 
                and software quality assurance professional. I'm always eager to learn, collaborate, and take on 
                new challenges that help create meaningful, user-centered solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
