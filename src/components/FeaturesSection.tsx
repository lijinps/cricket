export default function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Tasks and matches together.
            <br />
            Turn your game into glory.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Smart Scheduling
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Type dates and set match schedules with natural language. Never
              miss a game again.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Performance Analytics
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Track player stats, team performance, and match outcomes with
              detailed analytics.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Team Collaboration
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Share strategies, discuss tactics, and coordinate with your team
              in real-time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
