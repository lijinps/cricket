export default function FeaturesGrid() {
  const features = [
    "Real-time collaboration",
    "Match scheduling",
    "Offline Support",
    "Mobile App",
    "Player Analytics",
    "Team Chat",
    "Performance Tracking",
    "Match Reports",
    "AI-Powered",
    "Private Teams",
  ];

  return (
    <section className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Elevating cricket to
            <br />
            <span className="text-red-400">Super</span> status
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-red-500/30 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg mx-auto mb-3"></div>
              <p className="text-sm font-medium text-white">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
