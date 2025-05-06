import React, { useState } from 'react';
import { Check, Users } from 'lucide-react';

const WaitingList: React.FC = () => {
  const [email, setEmail] = useState('');
  const [useCase, setUseCase] = useState('');
  const [gpu, setGpu] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // In a real app, you would submit to an API here
    }, 1500);
  };

  return (
    <section id="waiting-list" className="section bg-gray-900 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 blur-3xl rounded-full transform translate-x-1/2"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="section-title">
          Join the <span className="gradient-text">AI Revolution</span>
        </h2>
        <p className="section-description">
          Be among the first to experience our groundbreaking technology. 
          Early registrants receive priority access and exclusive benefits.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="card">
            {!isSubmitted ? (
              <>
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="use-case" className="block text-sm font-medium text-gray-400 mb-1">
                      Primary Use Case
                    </label>
                    <select
                      id="use-case"
                      value={useCase}
                      onChange={(e) => setUseCase(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    >
                      <option value="">Select your primary use case</option>
                      <option value="development">AI Development</option>
                      <option value="gaming">Gaming</option>
                      <option value="research">Research</option>
                      <option value="personal">Personal Use</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="gpu" className="block text-sm font-medium text-gray-400 mb-1">
                      Your Current GPU (Optional)
                    </label>
                    <input
                      type="text"
                      id="gpu"
                      value={gpu}
                      onChange={(e) => setGpu(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      placeholder="e.g., AMD RX 6700 XT"
                    />
                  </div>

                  {error && (
                    <div className="text-red-500 text-sm">{error}</div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`btn-primary w-full sm:w-auto ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                      {isLoading ? 'Processing...' : 'Join Waiting List'}
                    </button>
                    
                    <div className="flex items-center justify-center sm:justify-start">
                      <Users className="w-5 h-5 text-blue-500 mr-2" />
                      <span className="text-gray-400 text-sm">Join 1,520+ others</span>
                    </div>
                  </div>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-800">
                  <h4 className="text-lg font-semibold mb-3">Early Adopter Benefits</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Priority access to beta release",
                      "50% discount on premium features",
                      "Direct access to development team",
                      "Influence product roadmap"
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">You're on the list!</h3>
                <p className="text-gray-300 mb-6">
                  Thanks for joining! We'll be in touch soon with updates on our progress and your early access details.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button 
                    onClick={() => {
                      // Copy referral link to clipboard
                      navigator.clipboard.writeText(window.location.href);
                      alert('Referral link copied to clipboard!');
                    }}
                    className="btn-secondary"
                  >
                    Share with Friends
                  </button>
                  <a 
                    href="#faq" 
                    className="btn-primary"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitingList;