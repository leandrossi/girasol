import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section id="problem-solution" className="section bg-gray-950">
      <div className="container-custom">
        <h2 className="section-title">
          <span className="gradient-text">Democratizing</span> AI Computing
        </h2>
        <p className="section-description">
          High-performance AI shouldn't be limited to those with premium hardware.
          We're changing that with breakthrough software optimization.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Problem Column */}
          <div className="card hover:shadow-red-900/20">
            <div className="flex items-center mb-6">
              <AlertTriangle size={32} className="text-red-500 mr-3" />
              <h3 className="text-2xl font-bold">The Problem</h3>
            </div>
            <ul className="space-y-4">
              {[
                "NVIDIA GPUs are expensive and often in limited supply",
                "Existing AI solutions waste the potential of your current hardware",
                "Developers and gamers can't maximize their current setups for AI",
                "Cloud-based AI solutions mean recurring costs and privacy concerns"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block mr-3 text-red-500 mt-1">✕</span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Column */}
          <div className="card hover:shadow-green-900/20">
            <div className="flex items-center mb-6">
              <CheckCircle size={32} className="text-green-500 mr-3" />
              <h3 className="text-2xl font-bold">Our Solution</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Revolutionary C-based technology optimizes any GPU for AI workloads",
                "Specialized libraries unlock maximum performance from existing hardware",
                "Experience comparable to premium hardware without the investment",
                "Run advanced LLMs locally with unprecedented speed and efficiency",
                "Future-proof your current setup with our constantly improving algorithms"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block mr-3 text-green-500 mt-1">✓</span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#how-it-works" className="btn-primary">
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;