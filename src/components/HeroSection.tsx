import MovingCricketBall from "./MovingCricketBall";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Moving Cricket Balls - Configurable count and speed */}
      <MovingCricketBall ballCount={1} speed={1.5} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-800/50 text-white text-sm font-medium mb-8">
          {/* <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span> */}
          TWO times Pavaratty Champions
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Team of
          <br />
          <span className="text-red-400">PUTHUMANASSERY</span>
        </h1>

        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Uniting Passion, Power, and Precision — Puthumanassery Cricket, Where
          Every Run Counts!
        </p>

        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
            Sign up for free
          </button>
        </div> */}
      </div>
    </section>
  );
}
