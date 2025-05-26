import { ArrowDown, Download, Sparkles, Code2, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 animate-bounce delay-300">
          <div className="w-3 h-3 bg-blue-400/60 rounded-full"></div>
        </div>
        <div className="absolute top-40 right-32 animate-bounce delay-700">
          <div className="w-2 h-2 bg-purple-400/60 rounded-full"></div>
        </div>
        <div className="absolute bottom-32 left-40 animate-bounce delay-1000">
          <div className="w-4 h-4 bg-pink-400/60 rounded-full"></div>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        <div className="text-center lg:text-left space-y-8">
          <div className="animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-700/50 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white/90">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Ashini Fernando</span>
            </h1>

            {/* Role with Icon */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <p className="text-xl md:text-2xl text-gray-300 font-medium">Undergraduate in BSc honours Information Systems Degree</p>
            </div>

            {/* Enhanced Description */}
            <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Passionate about creating exceptional digital experiences through 
              <span className="text-blue-400 font-medium"> web development</span>, 
              <span className="text-purple-400 font-medium"> UI/UX design</span>, and 
              <span className="text-pink-400 font-medium"> software quality assurance</span>.
            </p>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              {['React', 'Java', 'UI/UX', 'Testing'].map((skill, index) => <span key={skill} className="px-3 py-1 bg-gray-800/60 backdrop-blur-sm text-gray-300 rounded-full text-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  {skill}
                </span>)}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={scrollToAbout} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                <span className="mr-2">View My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              
            </div>
          </div>
        </div>

        {/* Enhanced Right Side with Profile Picture */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Animated Background Circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full animate-pulse"></div>
            
            {/* Main Container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Orbiting Elements */}
              <div className="absolute inset-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700/50 flex items-center justify-center overflow-hidden">
                
                {/* Floating Icons */}
                <div className="absolute top-4 right-4 animate-bounce delay-300 z-10">
                  <Code2 className="w-6 h-6 text-blue-400" />
                </div>
                <div className="absolute bottom-4 left-4 animate-bounce delay-700 z-10">
                  <Palette className="w-6 h-6 text-purple-400" />
                </div>
                
                {/* Profile Picture */}
                <div className="w-full h-full flex items-center justify-center">
                  <img src="https://i.postimg.cc/rybh4bwh/Whats-App-Image-2025-05-26-at-00-11-50-d6516430.jpg" alt="W.A.N. Fernando" className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-gradient-to-r from-blue-400 to-purple-500 shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button onClick={scrollToAbout} className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group">
          <span className="text-xs font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce group-hover:bg-white transition-colors"></div>
          </div>
        </button>
      </div>
    </section>;
};
export default Hero;