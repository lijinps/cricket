export default function AIFeaturesSection() {
  return (
    <section className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Move seamlessly from{" "}
            <span className="text-red-400">Talk to Done</span>.
          </h2>
          <p className="text-xl text-gray-300">
            AI-powered match analysis and team insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              AI Match Reports
            </h3>
            <p className="text-gray-300">
              Turn every match into clear, structured reports - complete with
              highlights, player performance, and key moments.
            </p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Smart Chat
            </h3>
            <p className="text-gray-300">
              Ask questions and generate insights from your matches. Get instant
              analysis and recommendations.
            </p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Performance Tracking
            </h3>
            <p className="text-gray-300">
              Track individual and team performance over time with intelligent
              insights and improvement suggestions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
