import React from 'react';

const TechSpecs: React.FC = () => {
  const supportedGPUs = [
    { brand: 'AMD', models: ['RX 6900 XT', 'RX 6800 XT', 'RX 6800', 'RX 6700 XT', 'RX 6600 XT', 'RX 5700 XT', 'RX 5700'] },
    { brand: 'Intel', models: ['Arc A770', 'Arc A750', 'Arc A580', 'Arc A380'] },
    { brand: 'NVIDIA', models: ['RTX 30 Series', 'RTX 20 Series', 'GTX 16 Series', 'GTX 10 Series'] }
  ];

  const systemRequirements = [
    { requirement: 'Operating System', value: 'Windows 10/11, Ubuntu 20.04+, macOS 12+' },
    { requirement: 'RAM', value: 'Minimum 16GB (32GB recommended)' },
    { requirement: 'Storage', value: '10GB free space (SSD recommended)' },
    { requirement: 'CPU', value: 'Intel i5 10th gen+, AMD Ryzen 5 3000+' },
    { requirement: 'GPU VRAM', value: 'Minimum 6GB (8GB+ recommended)' }
  ];

  const performanceImprovements = [
    { gpu: 'AMD RX 6800 XT', improvement: '80-85%' },
    { gpu: 'AMD RX 6700 XT', improvement: '70-80%' },
    { gpu: 'Intel Arc A770', improvement: '75-85%' },
    { gpu: 'NVIDIA GTX 1080 Ti', improvement: '40-50%' }
  ];

  return (
    <section id="tech-specs" className="section bg-gray-950">
      <div className="container-custom">
        <h2 className="section-title">Designed for <span className="gradient-text">Your Hardware</span></h2>
        <p className="section-description">
          GPUBoost.AI is compatible with a wide range of GPUs and systems,
          delivering significant performance improvements regardless of your hardware.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* GPU Compatibility */}
          <div className="card">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
              Supported GPUs
            </h3>
            <div className="space-y-6">
              {supportedGPUs.map((brand) => (
                <div key={brand.brand}>
                  <h4 className="font-semibold text-blue-400 mb-2">{brand.brand}</h4>
                  <div className="flex flex-wrap gap-2">
                    {brand.models.map((model) => (
                      <span 
                        key={model} 
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                      >
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-400">
              * Support for additional GPUs is continuously being added
            </p>
          </div>

          {/* System Requirements */}
          <div className="card">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              System Requirements
            </h3>
            <div className="space-y-4">
              {systemRequirements.map((req) => (
                <div key={req.requirement} className="border-b border-gray-800 pb-3 last:border-0">
                  <div className="text-sm text-gray-400">{req.requirement}</div>
                  <div className="text-gray-200">{req.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-800">
              <p className="text-sm text-gray-400">
                Requirements may vary based on specific AI models and workloads
              </p>
            </div>
          </div>

          {/* Performance Improvements */}
          <div className="card">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
              Expected Performance Boost
            </h3>
            <div className="space-y-4">
              {performanceImprovements.map((item) => (
                <div key={item.gpu} className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-300">{item.gpu}</span>
                    <span className="text-purple-400 font-semibold">{item.improvement}</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3">
                    <div 
                      className="bg-purple-500 h-3 rounded-full"
                      style={{ width: item.improvement.split('-')[1].replace('%', '') + '%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-800">
              <p className="text-sm text-gray-400">
                * Improvements measured vs. stock drivers with standard configurations for LLM tasks
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="#waiting-list" className="btn-primary">
            Reserve Your Spot
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;