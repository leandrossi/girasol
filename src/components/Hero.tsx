import React from 'react';
import { ChevronDown, Zap, Layers, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden hero-gradient grid-pattern"
    >
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="mb-6">
            <span className="block">Turn Any GPU Into An</span>  
            <span className="gradient-text">AI Powerhouse</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Our proprietary technology enables conventional GPUs to run LLMs with 
            NVIDIA-level performance at a fraction of the cost.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <a 
              href="#waiting-list" 
              className="btn-primary text-lg shadow-xl hover:shadow-blue-600/30 hover:-translate-y-1"
            >
              Join the Waiting List
            </a>
            <a 
              href="#how-it-works" 
              className="btn-secondary text-lg"
            >
              Learn How It Works
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="stats-item">
              <Zap size={32} className="text-yellow-500 mb-2" />
              <div className="stats-value">8x</div>
              <div className="stats-label">Performance Boost</div>
            </div>
            <div className="stats-item">
              <Layers size={32} className="text-blue-500 mb-2" />
              <div className="stats-value">100%</div>
              <div className="stats-label">GPU Compatibility</div>
            </div>
            <div className="stats-item">
              <Cpu size={32} className="text-green-500 mb-2" />
              <div className="stats-value">LLMs</div>
              <div className="stats-label">Fully Optimized</div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-blue-500" />
        </div>
      </div>
      
      {/* Background effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-6xl opacity-20 blur-3xl rounded-full bg-blue-600"></div>
    </section>
  );
};

export default Hero;