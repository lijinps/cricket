export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🏏</span>
            </div>
            <span className="text-xl font-semibold text-white">ToP</span>
          </div>

          {/* Navigation */}
          {/* <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-white hover:text-gray-300 transition-colors flex items-center"
            >
              Features
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            <a
              href="#matches"
              className="text-white hover:text-gray-300 transition-colors flex items-center"
            >
              Use Cases
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            <a
              href="#team"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Updates
            </a>
            <a
              href="#updates"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#blog"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Blog
            </a>
            <a
              href="#download"
              className="text-white hover:text-gray-300 transition-colors flex items-center"
            >
              Download
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </nav> */}

          {/* CTA Buttons */}
          {/* <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-300 transition-colors">
              Sign in
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">
              Sign up
            </button>
          </div> */}
        </div>
      </div>
    </header>
  );
}
