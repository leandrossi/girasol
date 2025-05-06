import React from 'react';
import { Code, Gamepad2, Lightbulb } from 'lucide-react';

const UseCases: React.FC = () => {
  const useCases = [
    {
      title: "For Developers",
      icon: <Code className="w-12 h-12 text-blue-500" />,
      benefits: [
        "Train and test AI models locally without expensive cloud costs",
        "Faster development iterations with improved local inference speeds",
        "Run multiple AI workloads simultaneously with efficient resource allocation",
        "Perfect for startups and independent developers with limited hardware budgets"
      ],
      color: "blue"
    },
    {
      title: "For Gamers",
      icon: <Gamepad2 className="w-12 h-12 text-green-500" />,
      benefits: [
        "Leverage your gaming GPU for AI projects without sacrificing gaming performance",
        "Create AI-enhanced game mods and custom game content",
        "Run AI assistants locally while gaming for strategy and improvement tips",
        "Future-proof your gaming setup for emerging AI-powered gaming innovations"
      ],
      color: "green"
    },
    {
      title: "For AI Enthusiasts",
      icon: <Lightbulb className="w-12 h-12 text-purple-500" />,
      benefits: [
        "Run latest LLMs on your existing hardware with unprecedented performance",
        "Experiment with model fine-tuning and parameter adjustments locally",
        "Build your own AI applications without cloud dependencies",
        "Join the community pushing the boundaries of what's possible with consumer hardware"
      ],
      color: "purple"
    }
  ];

  return (
    <section id="use-cases" className="section bg-gray-950">
      <div className="container-custom">
        <h2 className="section-title">Unleash the <span className="gradient-text">Potential</span> of Your Hardware</h2>
        <p className="section-description">
          GPUBoost.AI transforms your existing GPU into a powerhouse for AI applications, 
          delivering exceptional value across multiple use cases.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className={`card group hover:border-${useCase.color}-500/50 hover:shadow-${useCase.color}-900/20`}>
              <div className="flex flex-col items-center text-center mb-6">
                <div className={`mb-4 p-3 rounded-full bg-gray-800 group-hover:bg-${useCase.color}-900/20 w-20 h-20 flex items-center justify-center transition-colors duration-300`}>
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold">{useCase.title}</h3>
              </div>
              <ul className="space-y-3">
                {useCase.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className={`text-${useCase.color}-500 mr-2 mt-1`}>→</span>
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#waiting-list" className="btn-primary">
            Join Our Community
          </a>
        </div>
      </div>
    </section>
  );
};

export default UseCases;