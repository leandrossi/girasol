import React from 'react';
import { Briefcase, DollarSign, Shield, TrendingUp } from 'lucide-react';

const InvestorsLanding: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [investmentInterest, setInvestmentInterest] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { email, investmentInterest });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden hero-gradient grid-pattern">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="mb-6">
              <span className="block">Invest in the Future of</span>
              <span className="gradient-text">Tech Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Join us in revolutionizing the tech industry with cutting-edge solutions and high returns.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <a 
                href="#join-waitlist" 
                className="btn-primary text-lg shadow-xl hover:shadow-green-600/30 hover:-translate-y-1"
              >
                Join the Investor Waitlist
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
                <DollarSign size={32} className="text-green-500 mb-2" />
                <div className="stats-value">20%+</div>
                <div className="stats-label">Annual Returns</div>
              </div>
              <div className="stats-item">
                <TrendingUp size={32} className="text-blue-500 mb-2" />
                <div className="stats-value">10,000+</div>
                <div className="stats-label">Investors Onboard</div>
              </div>
              <div className="stats-item">
                <Shield size={32} className="text-purple-500 mb-2" />
                <div className="stats-value">Secure</div>
                <div className="stats-label">Investments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section bg-gray-900">
        <div className="container-custom">
          <h2 className="section-title">Invest with <span className="gradient-text">Confidence</span></h2>
          <p className="section-description">
            Our platform offers secure and transparent investment opportunities in the tech sector.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="w-12 h-12 text-blue-500" />,
                title: "Diverse Portfolio",
                description: "Access a wide range of tech investments tailored to your interests."
              },
              {
                icon: <Shield className="w-12 h-12 text-green-500" />,
                title: "Secure Transactions",
                description: "Benefit from industry-leading security measures and transparency."
              },
              {
                icon: <DollarSign className="w-12 h-12 text-purple-500" />,
                title: "High Returns",
                description: "Enjoy competitive returns on your investments with minimal risk."
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
                Ready to <span className="gradient-text">Invest</span> in the Future?
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="investment-interest" className="block text-sm font-medium text-gray-400 mb-1">
                    Investment Interest
                  </label>
                  <input
                    type="text"
                    id="investment-interest"
                    value={investmentInterest}
                    onChange={(e) => setInvestmentInterest(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                    placeholder="e.g., AI, Blockchain"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                >
                  Join the Investor Waitlist
                </button>

                <p className="text-sm text-gray-400 text-center">
                  Early investors receive exclusive insights and benefits!
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorsLanding;