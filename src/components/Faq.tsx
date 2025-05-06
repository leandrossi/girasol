import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How is it possible to achieve NVIDIA-like performance on other GPUs?",
      answer: "GPUBoost.AI uses proprietary optimization techniques that operate at the kernel level, rewriting computational pathways specifically for AI workloads. By focusing exclusively on the operations needed for LLMs and other AI models, we bypass generic driver limitations and unlock hidden performance. Our technology includes specialized memory management, tensor operation optimization, and parallel processing algorithms tailored to each GPU architecture."
    },
    {
      question: "Does this require any hardware modifications?",
      answer: "No hardware modifications are needed. GPUBoost.AI is a 100% software solution that works with your existing hardware. Just install our software package and it will automatically optimize your GPU for AI workloads."
    },
    {
      question: "Is GPUBoost.AI compatible with all AI frameworks?",
      answer: "Our initial release focuses on optimizing the most popular frameworks including PyTorch, TensorFlow, and ONNX Runtime. We'll continuously expand our compatibility to include more frameworks based on user feedback and demand."
    },
    {
      question: "What will the pricing model be?",
      answer: "We're planning a freemium model with a generous free tier for personal and experimental use. Premium tiers will be available for commercial usage, larger models, and advanced features. Early adopters from our waiting list will receive special discounts on premium features."
    },
    {
      question: "Will using GPUBoost.AI affect my GPU's performance for other tasks?",
      answer: "GPUBoost.AI is designed to operate selectively on AI workloads. When not running AI tasks, your GPU will function normally with no impact on gaming or other applications. The software intelligently allocates resources so you can even run AI tasks in the background with minimal impact on foreground applications."
    },
    {
      question: "Which LLMs are compatible with GPUBoost.AI?",
      answer: "GPUBoost.AI supports a wide range of popular models including Llama 2, Mistral, GPT-J, BLOOM, and others. The maximum model size you can run depends on your GPU's VRAM, but our optimization allows you to run larger models than would normally be possible on your hardware."
    },
    {
      question: "When will GPUBoost.AI be officially released?",
      answer: "We're currently finalizing our core technology and plan to launch a closed beta in Q3 2025. Selected users from our waiting list will receive early access. The public beta will follow in Q4 2025, with the full release expected in early 2026."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-gray-950">
      <div className="container-custom">
        <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
        <p className="section-description">
          Have questions about GPUBoost.AI? Find answers to the most common questions below.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`card cursor-pointer transition-all duration-300 ${openIndex === index ? 'border-blue-500/50' : 'hover:border-gray-700'}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-200">{faq.question}</h3>
                  <button 
                    className="p-1 rounded-full hover:bg-gray-800"
                    aria-label={openIndex === index ? "Close question" : "Open question"}
                  >
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>
                
                <div 
                  className={`mt-2 text-gray-400 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="pt-2">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Still have questions? We're here to help.
            </p>
            <a 
              href="mailto:info@gpuboost.ai" 
              className="btn-secondary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;