interface Player {
  id: number;
  name: string;
  role: "Batsman" | "Bowler" | "All-rounder" | "Wicket-keeper" | "";
  battingAvg: number;
  bowlingAvg?: number;
  matches: number;
  isSelected: boolean;
  category: string;
  isOwner?: boolean;
}

interface PlayerCardProps {
  player: Player;
  onSelect: () => void;
}

export default function PlayerCard({ player, onSelect }: PlayerCardProps) {
  const getRoleColor = (role: string) => {
    switch (role) {
      case "Batsman":
        return "text-blue-400 bg-blue-400/10";
      case "Bowler":
        return "text-green-400 bg-green-400/10";
      case "All-rounder":
        return "text-purple-400 bg-purple-400/10";
      case "Wicket-keeper":
        return "text-orange-400 bg-orange-400/10";
      default:
        return "text-gray-400 bg-gray-400/10";
    }
  };

  return (
    <div
      onClick={onSelect}
      className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:scale-105 ${
        player.isSelected
          ? "bg-red-500/20 border-red-500/50 shadow-lg shadow-red-500/20"
          : "bg-gray-800/30 border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-800/50"
      }`}
    >
      {/* Selection Indicator */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex gap-2">
          <div
            className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(
              player.role
            )}`}
          >
            {player.role}
          </div>
          <div className="px-2 py-1 rounded-full text-xs font-medium bg-orange-500/20 text-orange-300 border border-orange-500/30">
            {player.category}
          </div>
        </div>
        {/* <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            player.isSelected ? "bg-red-500 border-red-500" : "border-gray-500"
          }`}
        >
          {player.isSelected && (
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div> */}
      </div>

      {/* Player Info */}
      <div className="flex items-center gap-2 mb-2">
        <h4 className="text-white font-semibold text-lg">{player.name}</h4>
        {player.isOwner && (
          <div className="px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-black flex items-center gap-1">
            👑 OWNER
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Batting Avg:</span>
          <span className="text-white font-medium">{player.battingAvg}</span>
        </div>

        {player.bowlingAvg && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Bowling Avg:</span>
            <span className="text-white font-medium">{player.bowlingAvg}</span>
          </div>
        )}

        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Matches:</span>
          <span className="text-white font-medium">{player.matches}</span>
        </div>
      </div>

      {/* Action Indicator */}
      <div className="mt-3 pt-3 border-t border-gray-700/30">
        <p
          className={`text-xs font-medium ${
            player.isSelected ? "text-red-400" : "text-gray-500"
          }`}
        >
          {player.isSelected ? "Selected" : "Click to select"}
        </p>
      </div>
    </div>
  );
}
