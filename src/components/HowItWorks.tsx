import React from 'react';
import { Download, Cpu, Rocket } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Download className="w-12 h-12 text-blue-500" />,
      title: "Install Our Solution",
      description: "Download and install our lightweight software package that integrates seamlessly with your existing setup.",
      details: ["Minimal system requirements", "Quick and easy installation", "No hardware modifications needed"]
    },
    {
      icon: <Cpu className="w-12 h-12 text-purple-500" />,
      title: "Automatic Optimization",
      description: "Our software analyzes your hardware and applies specialized optimizations tailored to your specific GPU.",
      details: ["Kernel-level optimizations", "Memory allocation improvements", "Parallel processing algorithms"]
    },
    {
      icon: <Rocket className="w-12 h-12 text-green-500" />,
      title: "Enjoy Premium Performance",
      description: "Run advanced LLMs and AI applications with performance comparable to high-end NVIDIA GPUs.",
      details: ["Faster inference times", "Local model hosting", "Reduced power consumption"]
    }
  ];

  return (
    <section id="how-it-works" className="section bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">Revolutionary Technology, <span className="gradient-text">Simple Implementation</span></h2>
        <p className="section-description">
          GPUBoost.AI uses cutting-edge low-level optimizations to transform your ordinary GPU into an AI computation powerhouse.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="card hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-gray-800 w-20 h-20 flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 mb-6">{step.description}</p>
                <ul className="text-sm text-gray-500 space-y-2 text-left w-full">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto bg-gray-800/50 p-6 rounded-xl border border-gray-700">
          <h3 className="text-xl font-semibold mb-3 text-center">Technical Excellence</h3>
          <p className="text-gray-400 mb-4 text-center">
            Our solution works through a combination of these innovative approaches:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Optimized kernel computation paths",
              "Proprietary parallel processing algorithms",
              "Memory usage optimization techniques",
              "Efficient tensor operations",
              "Advanced scheduling mechanisms",
              "Dynamic resource allocation"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center p-2 bg-gray-800/30 rounded-lg">
                <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
                <span className="text-sm text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;