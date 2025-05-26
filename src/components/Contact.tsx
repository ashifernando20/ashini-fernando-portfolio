
import { useState } from 'react';
import { Mail, Send, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      console.log('Sending email with data:', formData);
      
      await emailjs.send(
        'service_hr5o8ck', // Service ID
        'template_pwzxqyl', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'hSdoLmsEvW_1iGShd' // Public Key
      );
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about technology and design. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <a 
                    href="mailto:ashifernando820@gmail.com" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    ashifernando820@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/ashini-fernando-9993b3287" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    linkedin.com/in/ashini-fernando-9993b3287
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">GitHub</h4>
                  <a 
                    href="https://github.com/ashifernando20" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    github.com/ashifernando20
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  rows={5}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Send className="mr-2 h-4 w-4" />
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4 text-white">Thank You for Visiting!</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I appreciate you taking the time to learn about my work and skills. 
              I look forward to connecting and exploring potential opportunities together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
