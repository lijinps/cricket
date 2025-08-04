export default function TeamCollaborationSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Supercharge your team.
          </h2>
          <p className="text-xl text-gray-300">
            Share strategies and collaborate in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-xl">💬</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Message in context
                </h3>
                <p className="text-gray-300">
                  Discuss, debate, or update with a chat on every match and
                  player.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-xl">📱</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Updates for all
                </h3>
                <p className="text-gray-300">
                  Never miss a match or player update with a sleek all-in-one
                  view.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-white">Captain's Message</p>
                  <p className="text-sm text-gray-300">
                    Great practice today! Ready for Sunday's match.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-white">Coach Update</p>
                  <p className="text-sm text-gray-300">
                    Team meeting tomorrow at 6 PM sharp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
