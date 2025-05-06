"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useDevice } from "../hooks/useDevice"
import { ChevronRight, Check, ArrowRight, Clock, Cpu, DollarSign, Shield, Award } from "lucide-react"

// Simple Parallax Element component
const ParallaxElement: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * 0.5)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return <div style={{ transform: `translateY(${offset}px)` }}>{children}</div>
}

const GamersLanding: React.FC = () => {
  const { isMobile } = useDevice()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 22,
    seconds: 45,
  })

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
  
      console.log("Leveling up your wallet...");
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
  
      console.log("Form submitted:", { email })
      setFormSuccess(true)
      setIsSubmitting(false)
  }

  const scrollToSignup = () => {
    const element = document.getElementById("join-waitlist")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col bg-gray-950 text-white">
      {/* Hero Section - Simplified and focused */}
      <section className="min-h-[calc(100dvh-64px)] flex items-center relative overflow-hidden">
        {!isMobile && (
          <ParallaxElement>
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-blue-900/80 to-black/90 z-10"></div>
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center z-0 opacity-60" role="img" aria-label="Background image of a gaming setup"></div>
            </div>
          </ParallaxElement>
        )}

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-blue-900/60 backdrop-blur-sm rounded-full text-blue-200 font-medium text-sm mb-6">
              <span className="inline-flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                5,000+ Gamers Already Earning
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 font-extrabold leading-tight tracking-tight text-white" id="main-heading">
              Your Rig's a Beast.
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Let It Make You Money.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Join thousands of gamers earning real cash while AFK.
              <br className="hidden md:block" />
              No lag, no hassle, just GG.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={scrollToSignup}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-lg shadow-xl hover:shadow-blue-600/30 hover:-translate-y-1 transition-all duration-300 ease-in-out flex items-center justify-center gap-2 hover:ring-2 hover:ring-blue-500 active:scale-95 transition-all duration-200"
                aria-label="Start earning now"
              >
                START EARNING NOW
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Zero Impact on Gaming</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Earn While AFK</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Safe for Your Hardware</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Simplified 3-step process */}
      <motion.section
        className="py-20 bg-gray-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" id="how-it-works">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Three simple steps to start earning with your gaming PC
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="w-10 h-10 text-blue-400" />,
                title: "Install",
                description: "Download our lightweight client that's optimized for gamers. One-click setup.",
                color: "from-blue-600/20 to-blue-800/20",
              },
              {
                icon: <Clock className="w-10 h-10 text-purple-400" />,
                title: "Go AFK",
                description: "While you're away, your GPU helps train AI models securely.",
                color: "from-purple-600/20 to-purple-800/20",
              },
              {
                icon: <DollarSign className="w-10 h-10 text-green-400" />,
                title: "Get Paid",
                description: "Earn real money via crypto, PayPal, or direct deposit.",
                color: "from-green-600/20 to-green-800/20",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl bg-gradient-to-b ${step.color} border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:translate-y-[-4px] flex flex-col items-center text-center`}
              >
                <div className="mb-6 p-4 bg-gray-800/50 rounded-full">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section - Clearer value proposition */}
      <motion.section
        className="py-20 bg-gray-950"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" id="gpu-sleeping">
                Your GPU Is <span className="text-red-400">Sleeping</span> On The Job
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <Shield className="w-6 h-6 text-blue-400" />,
                    title: "Zero FPS Impact",
                    description: "Our software automatically pauses when you start gaming. No lag, no drops.",
                  },
                  {
                    icon: <DollarSign className="w-6 h-6 text-green-400" />,
                    title: "Earn While You Sleep",
                    description: "Make money during those 8+ hours when your PC would otherwise be idle.",
                  },
                  {
                    icon: <Award className="w-6 h-6 text-purple-400" />,
                    title: "Early User Bonus",
                    description: "Join now and get 25% higher rates for your first 3 months.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 p-2 bg-gray-800 rounded-lg">{benefit.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollToSignup}
                className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium flex items-center gap-2 transition-colors duration-300"
              >
                Start Earning Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10"></div>
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/placeholder.svg?height=720&width=1280"
                className="w-full h-auto rounded-xl shadow-2xl"
              >
                <source src="/assets/video.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials - Social proof */}
      <motion.section
        className="py-20 bg-gray-950"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" id="testimonials">What Gamers Are Saying</h2>
            <p className="text-xl text-gray-300">Join thousands of satisfied users already earning</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "My rig made enough in a month to pay for 3 Steam games. Literally free money while I sleep.",
                author: "@Noxie_333",
                avatar: "/placeholder.svg?height=100&width=100",
                rating: 5,
              },
              {
                quote:
                  "I was skeptical at first, but it's been running for 2 months with zero issues. My GPU temps are actually lower than when I mine crypto.",
                author: "@GamerGirl42",
                avatar: "/placeholder.svg?height=100&width=100",
                rating: 5,
              },
              {
                quote:
                  "Setup took less than 5 minutes. Now I'm earning about $5-10 a day with my 3080 while I'm at work.",
                author: "@TechWizard",
                avatar: "/placeholder.svg?height=100&width=100",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={`Avatar of ${testimonial.author}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="flex">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section - Accordion style */}
      <motion.section
        className="py-20 bg-gray-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" id="faq">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Everything you need to know about our service</p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Will this hurt my FPS or games?",
                answer:
                  "No. The software instantly stops when you start gaming. We use advanced detection to ensure zero impact on your gaming experience.",
              },
              {
                question: "How much can I earn?",
                answer:
                  "Depends on your GPU + idle time. RTX 3070+ users can earn $120–$180/month with 8 hours of idle time daily.",
              },
              {
                question: "Is this crypto mining?",
                answer:
                  "No. Your GPU helps train AI models. It's clean, efficient, and eco-friendly compared to crypto mining.",
              },
              {
                question: "Can this damage my GPU?",
                answer:
                  "Nope. It runs cooler than AAA games and within safe limits. We monitor temperatures and adjust workloads accordingly.",
              },
              {
                question: "When can I start earning?",
                answer: "Soon! Early users get +25% rates. Join the waitlist now to secure your spot.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-gray-800/30 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors duration-300"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Urgency Section - Countdown timer */}
      <section className="py-20 bg-gradient-to-b from-blue-900/20 to-purple-900/20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" id="urgency">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Be First. Earn More.
              </span>
            </h2>
            <p className="text-xl text-gray-300">Early birds get 25% higher rates for the first 3 months.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-4 gap-4 mb-8">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((unit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="text-3xl sm:text-4xl font-mono font-bold text-white">
                      {String(unit.value).padStart(2, "0")}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 mt-1">{unit.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={scrollToSignup}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-lg shadow-xl hover:shadow-blue-600/30 hover:-translate-y-1 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-500 active:scale-95 transition-all duration-200"
              >
                SECURE MY EARLY ACCESS SPOT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Signup form */}
      <section id="join-waitlist" className="py-20 bg-gray-950 scroll-mt-16">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" id="cta">Ready to Earn While AFK?</h2>
            <p className="text-xl text-gray-300">Join now. Earn more. Game the same.</p>
          </div>

          {formSuccess ? (
            <div className="bg-green-900/30 border border-green-700 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">You're In!</h3>
              <p className="text-gray-300 mb-4">
                We've added you to our waitlist. You'll be among the first to know when we launch.
              </p>
              <p className="text-sm text-gray-400">Check your email for confirmation and updates.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
            >
              <div className="grid gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-lg shadow-xl hover:shadow-blue-600/30 transition-all duration-300 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center hover:ring-2 hover:ring-blue-500 active:scale-95 transition-all duration-200"
                >
                  {isSubmitting ? (
                      <>
                          <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                          >
                              <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                              ></circle>
                              <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                          </svg>
                          Leveling up your wallet...
                      </>
                  ) : (
                    "SECURE MY SPOT"
                  )}
                </button>

                <p className="text-sm text-gray-400 text-center">
                  <span className="inline-flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      ></path>
                    </svg>
                    Your data is safe.
                  </span>
                  {" • "}
                  <span className="inline-flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0 .656.126 1.283.356 1.857"
                      ></path>
                    </svg>
                    5,000+ Gamers Already Joined
                  </span>
                  {" • "}
                  <span className="inline-flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    No spam. Unsubscribe anytime.
                  </span>
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 pt-12 pb-8">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">V0 Technologies</h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Helping gamers monetize their high-end hardware during idle time. Our mission is to create a win-win
                ecosystem for gamers and AI companies.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M2.364 4.364A9.99 9.99 0 0112 2a10 10 0 0110 10c0 3.749-2.256 6.906-5.636 8.636L12 17.667l-4.364 1.333A9.99 9.99 0 012 12a10 10 0 012.364-7.636zM12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter to stay updated on the latest news and offers.
              </p>
              <form className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border border-gray-700 rounded-l-lg py-2 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:mr-2 mb-2 sm:mb-0"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-r-lg transition-colors duration-300">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="text-center text-gray-500 border-t border-gray-800 pt-6">
            &copy; 2024 V0 Technologies. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default GamersLanding
