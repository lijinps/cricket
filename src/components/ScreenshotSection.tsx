export default function ScreenshotSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Match Dashboard */}
            <div className="space-y-4">
              <div className="bg-purple-800/30 rounded-xl p-6 border border-purple-500/20">
                <h3 className="font-semibold text-white mb-3">Live Match</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Our Team</span>
                    <span className="font-bold text-green-400">156/4</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Opponent</span>
                    <span className="font-bold text-red-400">142/8</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Player Stats */}
            <div className="space-y-4">
              <div className="bg-blue-800/30 rounded-xl p-6 border border-blue-500/20">
                <h3 className="font-semibold text-white mb-3">
                  Top Performers
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-white">
                        John Smith
                      </span>
                    </div>
                    <span className="text-sm text-gray-300">89 runs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-white">
                        Mike Johnson
                      </span>
                    </div>
                    <span className="text-sm text-gray-300">4 wickets</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Schedule */}
            <div className="space-y-4">
              <div className="bg-purple-800/30 rounded-xl p-6 border border-purple-500/20">
                <h3 className="font-semibold text-white mb-3">Upcoming</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-3">
                    <p className="text-sm font-medium text-white">
                      vs Thunder Bolts
                    </p>
                    <p className="text-xs text-gray-300">Sunday, 2:00 PM</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-3">
                    <p className="text-sm font-medium text-white">
                      Practice Session
                    </p>
                    <p className="text-xs text-gray-300">Tuesday, 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
