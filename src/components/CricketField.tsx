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

interface CricketFieldProps {
  selectedPlayers: Player[];
}

export default function CricketField({ selectedPlayers }: CricketFieldProps) {
  const fieldPositions = [
    { name: "Wicket Keeper", x: 50, y: 85, preferredRole: "Wicket-keeper" },
    { name: "Slip", x: 55, y: 90, preferredRole: "Batsman" },
    { name: "Point", x: 75, y: 70, preferredRole: "All-rounder" },
    { name: "Cover", x: 65, y: 55, preferredRole: "Batsman" },
    { name: "Mid Off", x: 50, y: 40, preferredRole: "All-rounder" },
    { name: "Mid On", x: 50, y: 60, preferredRole: "All-rounder" },
    { name: "Square Leg", x: 25, y: 70, preferredRole: "Batsman" },
    { name: "Fine Leg", x: 15, y: 85, preferredRole: "Bowler" },
    { name: "Deep Mid Wicket", x: 20, y: 50, preferredRole: "All-rounder" },
    { name: "Long Off", x: 50, y: 15, preferredRole: "Bowler" },
    { name: "Long On", x: 50, y: 25, preferredRole: "Bowler" },
  ];

  // Auto-assign players to positions based on role preference
  const assignedPositions = fieldPositions
    .slice(0, selectedPlayers.length)
    .map((position, index) => {
      const player = selectedPlayers[index];
      return {
        ...position,
        player: player || null,
      };
    });

  if (selectedPlayers.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-400 text-lg mb-4">No players selected</div>
        <p className="text-gray-500">
          Go back to selection mode to choose your team
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Field Formation</h3>
        <p className="text-gray-300">
          {selectedPlayers.length}/11 players positioned on the field
        </p>
      </div>

      {/* Cricket Field SVG */}
      <div className="relative bg-green-900/20 rounded-lg p-8 border border-green-700/30">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-auto aspect-square max-h-[600px] mx-auto"
          style={{
            background: "radial-gradient(circle, #0f5132 0%, #064e3b 100%)",
          }}
        >
          {/* Outer boundary */}
          <ellipse
            cx="50"
            cy="50"
            rx="48"
            ry="48"
            fill="none"
            stroke="#22c55e"
            strokeWidth="0.5"
          />

          {/* Inner circle (30-yard circle) */}
          <circle
            cx="50"
            cy="50"
            r="25"
            fill="none"
            stroke="#22c55e"
            strokeWidth="0.3"
            strokeDasharray="1,1"
          />

          {/* Pitch */}
          <rect
            x="47"
            y="30"
            width="6"
            height="40"
            fill="#8b5cf6"
            fillOpacity="0.3"
            stroke="#8b5cf6"
            strokeWidth="0.2"
          />

          {/* Stumps */}
          <rect x="48.5" y="32" width="3" height="1" fill="#fbbf24" />
          <rect x="48.5" y="67" width="3" height="1" fill="#fbbf24" />

          {/* Creases */}
          <line
            x1="46"
            y1="35"
            x2="54"
            y2="35"
            stroke="#fbbf24"
            strokeWidth="0.2"
          />
          <line
            x1="46"
            y1="65"
            x2="54"
            y2="65"
            stroke="#fbbf24"
            strokeWidth="0.2"
          />

          {/* Field Positions */}
          {assignedPositions.map((position, index) => (
            <g key={index}>
              {/* Position Circle */}
              <circle
                cx={position.x}
                cy={position.y}
                r="3"
                fill={position.player ? "#ef4444" : "#6b7280"}
                stroke={position.player ? "#dc2626" : "#4b5563"}
                strokeWidth="0.5"
                className="cursor-pointer hover:scale-110 transition-transform"
              />

              {/* Player Name */}
              {position.player && (
                <>
                  <text
                    x={position.x}
                    y={position.y + 1}
                    textAnchor="middle"
                    className="fill-white text-xs font-medium"
                    style={{ fontSize: "2px" }}
                  >
                    {position.player.name.split(" ")[0]}
                  </text>
                  <text
                    x={position.x}
                    y={position.y - 4}
                    textAnchor="middle"
                    className="fill-gray-300 text-xs"
                    style={{ fontSize: "1.5px" }}
                  >
                    {position.name}
                  </text>
                </>
              )}
            </g>
          ))}
        </svg>

        {/* Legend */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {assignedPositions.map((position, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg border ${
                position.player
                  ? "bg-red-500/10 border-red-500/30"
                  : "bg-gray-800/30 border-gray-700/50"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <div
                  className={`w-3 h-3 rounded-full ${
                    position.player ? "bg-red-500" : "bg-gray-500"
                  }`}
                />
                <span className="text-sm font-medium text-white">
                  {position.name}
                </span>
              </div>
              {position.player ? (
                <div>
                  <p className="text-xs text-gray-300">
                    {position.player.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    ({position.player.role})
                  </p>
                </div>
              ) : (
                <p className="text-xs text-gray-500">Unassigned</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedPlayers.length < 11 && (
        <div className="mt-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-lg">
            <span className="text-orange-400 text-sm">
              Select {11 - selectedPlayers.length} more player
              {11 - selectedPlayers.length > 1 ? "s" : ""} to complete the team
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
