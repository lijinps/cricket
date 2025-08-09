import Logo from "./Logo";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
      <div className="w-full px-3 sm:px-4 lg:px-8">
        <div className="flex items-center py-1.5 sm:py-2">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Logo
              width={45}
              height={45}
              className="sm:w-[60px] sm:h-[60px] lg:w-[60px] lg:h-[60px]"
            />
            <span className="text-base sm:text-lg font-semibold text-white">
              ToP
            </span>
          </div>

          {/* Navigation */}
          <div className="ml-auto flex items-center">
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <a
                href="/"
                className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
              >
                Home
              </a>
              <a
                href="/team-selection"
                className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
              >
                Team Selection
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
              >
                Matches
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
              >
                Players
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden ml-4">
              <button className="text-gray-300 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
