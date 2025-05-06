import React from 'react';
import { Brain, LineChart, Leaf, Server } from 'lucide-react';

const ResearchersLanding: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [institution, setInstitution] = React.useState('');
  const [researchField, setResearchField] = React.useState('');
  const [computingNeeds, setComputingNeeds] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { email, institution, researchField, computingNeeds });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden hero-gradient grid-pattern">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="mb-6">
              <span className="block">Sustainable & Affordable</span>
              <span className="gradient-text">Computing for Research</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Access high-performance GPU computing at 50-70% lower cost than traditional providers,
              while reducing your carbon footprint.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <a 
                href="#research-priority" 
                className="btn-primary text-lg shadow-xl hover:shadow-blue-600/30 hover:-translate-y-1"
              >
                Join Research Priority List
              </a>
              <a 
                href="#sustainability" 
                className="btn-secondary text-lg"
              >
                View Environmental Impact
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="stats-item">
                <LineChart size={32} className="text-blue-500 mb-2" />
                <div className="stats-value">70%</div>
                <div className="stats-label">Cost Reduction</div>
              </div>
              <div className="stats-item">
                <Leaf size={32} className="text-green-500 mb-2" />
                <div className="stats-value">65%</div>
                <div className="stats-label">Carbon Reduction</div>
              </div>
              <div className="stats-item">
                <Server size={32} className="text-purple-500 mb-2" />
                <div className="stats-value">24/7</div>
                <div className="stats-label">Resource Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section bg-gray-900">
        <div className="container-custom">
          <h2 className="section-title">Empowering <span className="gradient-text">Research Excellence</span></h2>
          <p className="section-description">
            Our platform provides researchers with sustainable, cost-effective computing resources
            without compromising on performance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12 text-blue-500" />,
                title: "Research Focus",
                description: "Spend your grant money on research, not infrastructure. Save up to 70% on computing costs."
              },
              {
                icon: <Leaf className="w-12 h-12 text-green-500" />,
                title: "Sustainable Computing",
                description: "Reduce your carbon footprint by utilizing existing GPU resources instead of dedicated data centers."
              },
              {
                icon: <Server className="w-12 h-12 text-purple-500" />,
                title: "Flexible Scaling",
                description: "Scale your computing resources up or down based on your research needs."
              },
              {
                icon: <LineChart className="w-12 h-12 text-teal-500" />,
                title: "Resource Optimization",
                description: "Advanced scheduling and allocation ensures optimal use of computing resources."
              }
            ].map((benefit, index) => (
              <div key={index} className="card hover:scale-105 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-gray-800 w-20 h-20 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Priority List */}
      <section id="research-priority" className="section bg-gray-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="card">
              <h2 className="text-3xl font-bold text-center mb-8">
                Join the <span className="gradient-text">Research Priority List</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Academic Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="you@university.edu"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="institution" className="block text-sm font-medium text-gray-400 mb-1">
                    Research Institution
                  </label>
                  <input
                    type="text"
                    id="institution"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="University Name"
                  />
                </div>

                <div>
                  <label htmlFor="research-field" className="block text-sm font-medium text-gray-400 mb-1">
                    Research Field
                  </label>
                  <input
                    type="text"
                    id="research-field"
                    value={researchField}
                    onChange={(e) => setResearchField(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="e.g., Machine Learning, Computational Biology"
                  />
                </div>

                <div>
                  <label htmlFor="computing-needs" className="block text-sm font-medium text-gray-400 mb-1">
                    Estimated Computing Needs
                  </label>
                  <select
                    id="computing-needs"
                    value={computingNeeds}
                    onChange={(e) => setComputingNeeds(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  >
                    <option value="">Select your computing needs</option>
                    <option value="small">Small (1-10 GPUs)</option>
                    <option value="medium">Medium (11-50 GPUs)</option>
                    <option value="large">Large (50+ GPUs)</option>
                    <option value="custom">Custom Requirements</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                >
                  Request Early Access
                </button>

                <p className="text-sm text-gray-400 text-center">
                  Research institutions get priority access and special pricing.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchersLanding;