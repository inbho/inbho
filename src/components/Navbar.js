export default function Navbar() {
    return (
      <nav className="sticky top-0 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Inbho
            </span>
          </div>
          
          <div className="hidden md:flex gap-8">
            <a className="hover:text-purple-400 transition-colors">Features</a>
            <a className="hover:text-blue-400 transition-colors">API Docs</a>
            <a className="hover:text-gray-300 transition-colors">Blog</a>
          </div>
  
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    );
  }