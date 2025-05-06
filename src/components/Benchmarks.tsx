import React from 'react';

const Benchmarks: React.FC = () => {
  // Data for bar chart
  const benchmarkData = [
    { name: "RTX 3090", value: 100, color: "bg-green-500" },
    { name: "RTX 3080", value: 85, color: "bg-green-400" },
    { name: "RX 6800 XT w/ GPUBoost.AI", value: 82, color: "bg-blue-500" },
    { name: "RX 6800 XT Stock", value: 45, color: "bg-gray-500" },
    { name: "RTX 3070", value: 70, color: "bg-green-300" },
    { name: "RX 6700 XT w/ GPUBoost.AI", value: 68, color: "bg-blue-400" },
    { name: "RX 6700 XT Stock", value: 35, color: "bg-gray-500" },
  ];

  // Example models we can run effectively
  const compatibleModels = [
    "Llama 2 (7B, 13B)",
    "Mistral (7B)",
    "Stable Diffusion XL",
    "GPT-J (6B)",
    "BLOOM",
    "Whisper",
    "CodeLlama"
  ];

  return (
    <section id="benchmarks" className="section bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">
          <span className="gradient-text">Verified</span> Performance
        </h2>
        <p className="section-description">
          Our technology delivers measurable performance improvements, allowing non-NVIDIA GPUs 
          to compete directly with premium hardware.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="card h-full">
              <h3 className="text-xl font-bold mb-6">LLM Inference Performance (relative)</h3>
              <div className="space-y-6">
                {benchmarkData.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">{item.name}</span>
                      <span className="text-sm font-medium text-gray-400">{item.value}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
                      <div 
                        className={`${item.color} h-4 rounded-full transition-all duration-1000 ease-out`} 
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-800">
                <p className="text-sm text-gray-400">
                  * Performance measured on inference speed for Llama 2 (7B) model with batch size 1
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="card h-full">
              <h3 className="text-xl font-bold mb-6">Compatible Models</h3>
              <p className="text-gray-400 mb-4">
                With GPUBoost.AI, you can efficiently run these popular models on non-NVIDIA hardware:
              </p>
              <ul className="space-y-3">
                {compatibleModels.map((model, index) => (
                  <li key={index} className="flex items-center py-2 border-b border-gray-800 last:border-0">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">{model}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-800">
                <p className="text-sm text-gray-400">
                  * Model performance varies by specific GPU model and available VRAM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16 glass-card">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center">
                <span className="text-5xl">👨‍💻</span>
              </div>
            </div>
            <div className="md:w-3/4 md:pl-6">
              <blockquote className="text-gray-300 italic mb-4">
                "With GPUBoost.AI, my RX 6800 XT performs nearly on par with my friend's RTX 3090 for AI workloads. 
                I'm running models I never thought possible on AMD hardware. It's a game-changer for developers without access to NVIDIA GPUs."
              </blockquote>
              <cite className="text-gray-400 block">
                — Alex Chen, Machine Learning Engineer
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benchmarks;