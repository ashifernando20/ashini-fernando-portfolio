
import { GraduationCap, MapPin, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <div className="aspect-square bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-white">
                      WF
                    </div>
                    <p className="text-gray-300">Professional Photo</p>
                    <p className="text-gray-400 text-sm">To be added</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-white">BSc Honours in Information Systems</h4>
                  <p className="text-gray-400">Rajarata University of Sri Lanka (Final Year)</p>
                </div>
                <div>
                  <h4 className="font-medium text-white">AAT Sri Lanka</h4>
                  <p className="text-gray-400">Passed Finalist</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <MapPin className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <p className="text-gray-300">Based in Sri Lanka</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <Heart className="text-pink-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Passion</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I have a passion for information technology, design, software quality assurance, and web development. 
                I enjoy bringing ideas to life through clean code, compelling visuals, and data-driven strategies.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Future Goals</h3>
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
