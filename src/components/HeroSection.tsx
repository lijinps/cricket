import MovingCricketBall from "./MovingCricketBall";

export default function HeroSection() {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 px-3 sm:px-4 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      {/* Moving Cricket Balls - Configurable count and speed */}
      <MovingCricketBall ballCount={1} speed={1.2} />

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        <div className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-purple-800/50 text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6 lg:mb-8">
          {/* <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span> */}
          TWO times Pavaratty Champions
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
          Team of
          <br />
          <span className="text-red-400">PUTHUMANASSERY</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
          Uniting Passion, Power, and Precision — Puthumanassery Cricket, Where
          Every Run Counts!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/team-selection"
            className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-base sm:text-lg text-center inline-block"
          >
            TEAM SELECTION
          </a>
        </div>
      </div>
    </section>
  );
}
