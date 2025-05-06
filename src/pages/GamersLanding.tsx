import React from 'react';

import { useDevice } from '../hooks/useDevice';
import { ParallaxElement } from '../components/ParallaxElement';

const GamersLanding: React.FC = () => {
    const { isMobile } = useDevice();
    const [email, setEmail] = React.useState('');
    const [gpuModel, setGpuModel] = React.useState('');
    const [discordUsername, setDiscordUsername] = React.useState('');
    const [timeLeft, setTimeLeft] = React.useState(3600); // 1 hour countdown

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !gpuModel) {
        alert('Please fill in all required fields.');
        return;
    }
    console.log('Form submitted:', { email, gpuModel, discordUsername });
    // Simulate sending data to a backend
    fetch('/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, gpuModel, discordUsername }),
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => console.error('Error:', error));
  };

  return (
    <div className={`flex flex-col bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white ${isMobile ? 'debug-outline' : ''}`}>
      {/* Hero Section */}
      {!isMobile && <ParallaxElement><div>Parallax Content</div></ParallaxElement>}
      <section className="min-h-[calc(100dvh-64px)] flex items-center relative overflow-hidden hero-gradient grid-pattern">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 font-extrabold leading-tight tracking-tight text-white">
              <span className="block">Your Rig’s a Beast. Let It Make You Money.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Join thousands of gamers earning real cash while AFK. No lag, no hassle, just GG.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <a 
                href="#join-waitlist" 
                className="btn-primary text-lg shadow-xl hover:shadow-blue-600/30 hover:-translate-y-1 transition-transform duration-500 ease-in-out"
              >
                START EARNING NOW
              </a>
            </div>
            <div className="text-gray-300 text-sm">
              5,000+ Gamers Already Earning
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-800 bg-opacity-80 backdrop-blur-md">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl font-bold mb-4">Your GPU Rests More Than You Do… Why Not Make It Work?</h2>
          <p className="section-description text-lg text-gray-300">
            You dropped serious cash on your gaming setup. That RTX didn’t come cheap. But here’s the deal:
            <ul className="list-disc list-inside">
              <li>You’re not gaming 24/7</li>
              <li>Your GPU is doing *nothing* while you sleep or work</li>
              <li>That’s lost potential and money left on the table</li>
            </ul>
            Imagine if your PC paid for your next pizza while you sleep. This isn’t crypto mining—this is smarter.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-950">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl font-bold mb-4">Get Paid While You're AFK</h2>
          <p className="section-description text-lg text-gray-300">
            Install it. Let it run. Get paid. That simple.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-2xl font-bold mb-2">🎮 Step 1</h3>
              <p>Install the V0 client – light, safe, gamer-approved.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">🖥️ Step 2</h3>
              <p>While you're away, your GPU helps train AI.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">💰 Step 3</h3>
              <p>You earn real money (crypto or cash).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 lg:py-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-center bg-gray-900 p-10 rounded-lg shadow-2xl">
        <div>
          <h2 className="text-4xl font-extrabold text-neon-green mb-4">⚠️ Your GPU Is Sleeping On The Job</h2>
          <ul className="list-disc text-lg text-gray-300 space-y-2 pl-5">
            <li>🎮 You're not gaming 24/7</li>
            <li>💤 Your GPU is idle most of the time</li>
            <li>💸 That's money you're not earning</li>
          </ul>
          <p className="mt-6 text-lg text-green-400 font-semibold">What if your PC paid for your pizza while you sleep?</p>
        </div>
        <div>
          <video
            autoPlay loop muted playsInline
            poster="/assets/poster.webp"
            className="lazy-load w-full h-auto"
          >
            <source src="/assets/video.webm" type="video/webm" />
          </video>
        </div>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl font-bold mb-4">Turn Idle Time into Real Money</h2>
          <div className="@container">
            <div className="@sm:card-lg"></div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-2 text-white">💰 Earn While You’re AFK</h3>
              <p>Sleep. Work. Chill. Your rig keeps earning.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">⚙️ One-Click Setup</h3>
              <p>Easier than installing your favorite game.</p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-2 text-white">🛡️ Zero FPS Impact</h3>
              <p>Game? We pause. No lag. No drops.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">💸 Get Paid Your Way</h3>
              <p>Crypto, PayPal, cash. Your rewards, your choice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gamer Types Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-950">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl font-bold mb-4">What Kind of Gamer Are You?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6">
            <div className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-xl hover:scale-105 transition duration-300 shadow-2xl">
              <h3 className="text-xl font-bold text-blue-400 mb-2">🎯 The Grinder</h3>
              <p className="text-gray-300 mb-2">Plays 10+ hours/day. Wants to maximize earnings.</p>
              <p className="text-xs text-gray-400">🏆 Tier: Hardcore | 💰 ROI: High</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-xl hover:scale-105 transition duration-300 shadow-2xl">
              <h3 className="text-xl font-bold text-blue-400 mb-2">🛌 AFK King</h3>
              <p className="text-gray-300 mb-2">PC always on, wants effortless passive income.</p>
              <p className="text-xs text-gray-400">🏆 Tier: Passive | 💰 ROI: Medium</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-xl hover:scale-105 transition duration-300 shadow-2xl">
              <h3 className="text-xl font-bold text-blue-400 mb-2">👾 Weekend Warrior</h3>
              <p className="text-gray-300 mb-2">Only plays weekends, wants to monetize the rest.</p>
              <p className="text-xs text-gray-400">🏆 Tier: Casual | 💰 ROI: Low</p>
            </div>
          </div>
          <p className="text-lg text-gray-300">No matter your playstyle, you can earn while AFK.</p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-900">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl font-bold mb-4">Watch How It Works in 60 Seconds</h2>
          <p className="text-lg text-gray-300">No tech skills. No mining. Just install, AFK, and earn.</p>
        </div>
      </section>

      {/* Future Perks Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-950">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl font-bold mb-4">Early Users Get More</h2>
          <ul className="list-disc list-inside">
            <li>🎮 Exclusive feature drops</li>
            <li>🧠 Help train AI, get AI rewards</li>
            <li>🚀 Beta access for advanced earners</li>
            <li>🏆 Leaderboards and loyalty bonuses</li>
          </ul>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-900">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl font-bold mb-4">See What Your Rig Could Earn</h2>
          <div className="text-lg text-gray-300">
            <p>With an RTX 3060 and 8 idle hours/day, you could earn up to $X/month.</p>
            <div className="w-full bg-gray-800 h-6 rounded-full overflow-hidden mt-4">
              <div style={{ width: `50%` }} className="bg-green-400 h-full transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-950">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl font-bold mb-4">What Gamers Are Saying</h2>
          <p className="text-lg text-gray-300">“My rig made enough in a month to pay for 3 Steam games.” – @Noxie_333</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-900">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <ul className="list-disc list-inside">
            <li>Will this hurt my FPS or games? No. The software instantly stops when you start gaming. Zero impact.</li>
            <li>How much can I earn? Depends on your GPU + idle time. RTX 3070+ users can earn $XX–$XXX/month.</li>
            <li>Is this crypto mining? No. Your GPU helps train AI models. It’s clean, efficient, and eco-friendly.</li>
            <li>Can this damage my GPU? Nope. It runs cooler than AAA games and within safe limits.</li>
            <li>When can I start earning? Soon! Early users get +25% rates. Join the waitlist now.</li>
          </ul>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="section bg-gray-950">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl font-bold mb-4">Be First. Earn More.</h2>
          <p className="text-lg text-gray-300">Early birds get 25% higher rates for the first 3 months.</p>
          <div className="text-center mt-4 bg-black py-4 px-6 rounded-lg text-red-400 font-mono text-2xl shadow-lg">
            ⏳ Early Access Ends In: {`${Math.floor(timeLeft / 3600)}:${Math.floor((timeLeft % 3600) / 60)}:${timeLeft % 60}`}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-gray-900">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl font-bold mb-4">Ready to Earn AFK?</h2>
          <p className="text-lg text-gray-300">Join now. Earn more. Game the same.</p>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="discord" className="block text-sm font-medium text-gray-300 mb-1">
                Discord Username (Optional)
              </label>
              <input
                type="text"
                id="discord"
                value={discordUsername}
                onChange={(e) => setDiscordUsername(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="username#0000"
              />
            </div>
            <div>
              <label htmlFor="gpu-model" className="block text-sm font-medium text-gray-300 mb-1">
                GPU Model
              </label>
              <input
                type="text"
                id="gpu-model"
                value={gpuModel}
                onChange={(e) => setGpuModel(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="e.g., RTX 3080"
              />
            </div>
            <button
                type="submit"
                className="w-full btn-primary text-lg py-4 transition-transform duration-500 ease-in-out hover:scale-105 active:scale-95"
            >
              SECURE MY SPOT
            </button>
            <p className="text-sm text-gray-500 text-center">
              🔒 Your data is safe. 👥 5,000+ Gamers Already Joined. ✉️ No spam. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500">
        <div className="container-custom py-8">
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-white transition-colors duration-300">Discord</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Twitch</a>
            <a href="#" className="hover:text-white transition-colors duration-300">X/Twitter</a>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a> | <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
          </div>
          <div className="text-center mt-2">
            © 2025 V0 Technologies
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GamersLanding;