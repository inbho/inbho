import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Making Life Easier
          </h1>
          <p className="text-xl mb-8 text-gray-400">
            AI-powered solutions for finance and productivity
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
              Get Started
            </button>
            <button className="border border-purple-500 text-purple-500 hover:bg-purple-900 px-8 py-3 rounded-lg transition-all">
              Documentation
            </button>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-gray-800 rounded-xl hover:border-purple-500 border-2 border-gray-700 transition-all">
            <h3 className="text-2xl font-bold mb-4">Flightbho</h3>
            <p className="text-gray-400">Real-time flight tracking with AI predictions</p>
          </div>
          <div className="p-8 bg-gray-800 rounded-xl hover:border-blue-500 border-2 border-gray-700 transition-all">
            <h3 className="text-2xl font-bold mb-4">Sajilobho</h3>
            <p className="text-gray-400">Smart file conversion and document management</p>
          </div>
        </div>
      </section>
    </div>
  );
}