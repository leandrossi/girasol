import React from 'react';
import { Briefcase, DollarSign, Users, Globe } from 'lucide-react';

const CareersLanding: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [interest, setInterest] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { email, interest });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden hero-gradient grid-pattern">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="mb-6">
              <span className="block">Join Our</span>
              <span className="gradient-text">Innovative Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Be part of a dynamic team that's shaping the future of technology.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <a 
                href="#join-waitlist" 
                className="btn-primary text-lg shadow-xl hover:shadow-purple-600/30 hover:-translate-y-1"
              >
                Explore Careers
              </a>
              <a 
                href="#how-it-works" 
                className="btn-secondary text-lg"
              >
                Learn More
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="stats-item">
                <Users size={32} className="text-green-500 mb-2" />
                <div className="stats-value">500+</div>
                <div className="stats-label">Team Members</div>
              </div>
              <div className="stats-item">
                <Globe size={32} className="text-blue-500 mb-2" />
                <div className="stats-value">Global</div>
                <div className="stats-label">Presence</div>
              </div>
              <div className="stats-item">
                <DollarSign size={32} className="text-purple-500 mb-2" />
                <div className="stats-value">Competitive</div>
                <div className="stats-label">Salaries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section bg-gray-900">
        <div className="container-custom">
          <h2 className="section-title">Grow with <span className="gradient-text">Us</span></h2>
          <p className="section-description">
            Discover opportunities to advance your career in a supportive and innovative environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="w-12 h-12 text-blue-500" />,
                title: "Career Growth",
                description: "Opportunities for advancement and professional development."
              },
              {
                icon: <Globe className="w-12 h-12 text-green-500" />,
                title: "Global Impact",
                description: "Work on projects that make a difference worldwide."
              },
              {
                icon: <DollarSign className="w-12 h-12 text-purple-500" />,
                title: "Rewarding Work",
                description: "Enjoy a fulfilling career with competitive compensation."
              }
            ].map((step, index) => (
              <div key={index} className="card hover:scale-105 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-gray-800 w-20 h-20 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Waitlist */}
      <section id="join-waitlist" className="section bg-gray-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="card">
              <h2 className="text-3xl font-bold text-center mb-8">
                Ready to <span className="gradient-text">Join</span> Us?
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-400 mb-1">
                    Area of Interest
                  </label>
                  <input
                    type="text"
                    id="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="e.g., Software Development"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                >
                  Explore Careers
                </button>

                <p className="text-sm text-gray-400 text-center">
                  Join us and be part of something great!
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersLanding;