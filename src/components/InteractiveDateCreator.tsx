import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import {
  Check,
  UtensilsCrossed,
  Mountain,
  Clapperboard,
  ChevronRight,
  ChevronLeft,
  MapPin,
} from "lucide-react";

const STEPS = [
  { key: "name", label: "Name your date" },
  { key: "type", label: "Type of date" },
  { key: "location", label: "Where is it?" },
  { key: "duration", label: "How long?" },
  { key: "cost", label: "How much?" },
] as const;

const DATE_TYPES = [
  {
    key: "adventure",
    label: "Adventure",
    description: "Getting out of town, getting into nature",
    icon: Mountain,
  },
  {
    key: "dining",
    label: "Dining",
    description: "Food & drink",
    icon: UtensilsCrossed,
  },
  {
    key: "entertainment",
    label: "Entertainment",
    description: "Movies, mini golf, pottery, etc.",
    icon: Clapperboard,
  },
] as const;

const COST_TIERS = ["Free", "$1–29", "$30–59", "$60–79", "$80+"];

const LOCATIONS = [
  "Barton Springs Pool, Austin, TX",
  "Zilker Botanical Garden, Austin, TX",
  "Uchi, South Lamar, Austin, TX",
  "Peter Pan Mini-Golf, Austin, TX",
  "Mount Bonnell, Austin, TX",
  "Spencer Butte Trailhead, Eugene, OR",
  "Hendricks Park, Eugene, OR",
  "Ninkasi Brewing Company, Eugene, OR",
  "Beppe & Gianni's Trattoria, Eugene, OR",
  "Alton Baker Park, Eugene, OR",
];

function formatDuration(mins: number): string {
  if (mins === 0) return "0m";
  if (mins >= 360) return "All day";
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}

export function InteractiveDateCreator() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [type, setType] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [locationSearch, setLocationSearch] = useState("");
  const [duration, setDuration] = useState(60);
  const [travelTime, setTravelTime] = useState(15);
  const [cost, setCost] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const canAdvance = useCallback(() => {
    switch (step) {
      case 0:
        return name.trim().length > 0;
      case 1:
        return type !== null;
      case 2:
        return location !== null;
      case 3:
        return true;
      case 4:
        return cost !== null;
      default:
        return false;
    }
  }, [step, name, type, location, cost]);

  const isComplete =
    name.trim().length > 0 &&
    type !== null &&
    location !== null &&
    cost !== null;

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setStep(0);
      setName("");
      setType(null);
      setLocation(null);
      setLocationSearch("");
      setDuration(60);
      setTravelTime(15);
      setCost(null);
    }, 3000);
  };

  const filteredLocations = LOCATIONS.filter((l) =>
    l.toLowerCase().includes(locationSearch.toLowerCase())
  );

  const totalTime = duration + travelTime;
  const progressPct = Math.min((totalTime / (12 * 60)) * 100, 100);

  if (submitted) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-8 my-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <p className="text-lg font-semibold text-gray-900">Date created!</p>
        <p className="text-sm text-gray-500 mt-1">
          {name} — {type} at {location}
        </p>
        <p className="text-xs text-gray-400 mt-4">
          Resetting in a moment...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl my-8 overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-gray-100">
        <p className="text-lg font-semibold text-gray-900">Create new date</p>
        <p className="text-sm text-gray-500 mt-1">
          Walk through the same five steps used in the app.
        </p>
      </div>

      {/* Step indicators */}
      <div className="flex px-6 pt-4 gap-1.5">
        {STEPS.map((s, i) => (
          <button
            key={s.key}
            onClick={() => setStep(i)}
            className={cn(
              "h-1.5 rounded-full flex-1 transition-all duration-300",
              i === step
                ? "bg-blue-500"
                : i < step
                  ? "bg-blue-300"
                  : "bg-gray-200"
            )}
          />
        ))}
      </div>

      {/* Step label */}
      <div className="px-6 pt-3 pb-1">
        <p className="text-xs font-medium text-blue-500 uppercase tracking-wide">
          Step {step + 1} of 5
        </p>
        <p className="text-base font-semibold text-gray-900 mt-0.5">
          {STEPS[step].label}
        </p>
      </div>

      {/* Step content */}
      <div className="px-6 py-4 min-h-[200px]">
        {/* Step 0: Name */}
        {step === 0 && (
          <div>
            <input
              type="text"
              placeholder="e.g. Sunset hike at Mount Bonnell"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
              autoFocus
            />
            {name.length > 0 && (
              <p className="text-xs text-gray-400 mt-2">
                Sounds like a great date.
              </p>
            )}
          </div>
        )}

        {/* Step 1: Type */}
        {step === 1 && (
          <div className="grid grid-cols-3 gap-3">
            {DATE_TYPES.map((t) => {
              const Icon = t.icon;
              const selected = type === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setType(t.key)}
                  className={cn(
                    "flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all",
                    selected
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  )}
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center",
                      selected ? "bg-blue-500" : "bg-gray-100"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-5 h-5",
                        selected ? "text-white" : "text-gray-500"
                      )}
                    />
                  </div>
                  <span
                    className={cn(
                      "text-sm font-medium",
                      selected ? "text-blue-700" : "text-gray-700"
                    )}
                  >
                    {t.label}
                  </span>
                  <span className="text-xs text-gray-400 text-center leading-tight">
                    {t.description}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Step 2: Location */}
        {step === 2 && (
          <div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for a place..."
                value={locationSearch}
                onChange={(e) => {
                  setLocationSearch(e.target.value);
                  if (location && !e.target.value) setLocation(null);
                }}
                className="w-full pl-9 pr-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
                autoFocus
              />
            </div>
            <div className="mt-2 max-h-[140px] overflow-y-auto rounded-lg border border-gray-200">
              {(locationSearch.length > 0
                ? filteredLocations
                : LOCATIONS
              ).map((loc) => (
                <button
                  key={loc}
                  onClick={() => {
                    setLocation(loc);
                    setLocationSearch(loc);
                  }}
                  className={cn(
                    "w-full text-left px-3 py-2 text-sm hover:bg-blue-50 transition-colors flex items-center gap-2",
                    location === loc
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700"
                  )}
                >
                  <MapPin className="w-3 h-3 text-gray-400 shrink-0" />
                  {loc}
                </button>
              ))}
              {locationSearch.length > 0 && filteredLocations.length === 0 && (
                <p className="px-3 py-2 text-sm text-gray-400">
                  No matches — try "Barton" or "Spencer"
                </p>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Duration */}
        {step === 3 && (
          <div className="flex gap-6 items-start">
            <div className="flex-1 space-y-5">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Travel time</span>
                  <span className="text-sm font-medium text-gray-900">
                    {travelTime === 0 ? "None" : formatDuration(travelTime)}
                  </span>
                </div>
                <Slider
                  value={[travelTime]}
                  onValueChange={([v]) => setTravelTime(v)}
                  min={0}
                  max={120}
                  step={15}
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Date length</span>
                  <span className="text-sm font-medium text-gray-900">
                    {formatDuration(duration)}
                  </span>
                </div>
                <Slider
                  value={[duration]}
                  onValueChange={([v]) => setDuration(v)}
                  min={15}
                  max={360}
                  step={15}
                />
              </div>
            </div>
            {/* Circular progress */}
            <div className="flex flex-col items-center justify-center shrink-0">
              <svg width="100" height="100" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="6"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 42}`}
                  strokeDashoffset={`${2 * Math.PI * 42 * (1 - progressPct / 100)}`}
                  transform="rotate(-90 50 50)"
                  className="transition-all duration-300"
                />
                <text
                  x="50"
                  y="46"
                  textAnchor="middle"
                  className="text-sm font-semibold fill-gray-900"
                  style={{ fontSize: "14px" }}
                >
                  {formatDuration(totalTime)}
                </text>
                <text
                  x="50"
                  y="60"
                  textAnchor="middle"
                  className="fill-gray-400"
                  style={{ fontSize: "10px" }}
                >
                  total
                </text>
              </svg>
            </div>
          </div>
        )}

        {/* Step 4: Cost */}
        {step === 4 && (
          <div className="flex gap-2">
            {COST_TIERS.map((tier, i) => (
              <button
                key={tier}
                onClick={() => setCost(i)}
                className={cn(
                  "flex-1 py-3 rounded-lg border-2 text-sm font-medium transition-all",
                  cost === i
                    ? "border-blue-500 bg-blue-500 text-white"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                )}
              >
                {tier}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className={cn(
            "flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-colors",
            step === 0
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-600 hover:bg-gray-100"
          )}
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>

        <div className="flex items-center gap-2">
          {/* Summary chips */}
          {name && step > 0 && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full hidden sm:inline">
              {name.length > 20 ? name.slice(0, 20) + "..." : name}
            </span>
          )}
          {type && step > 1 && (
            <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full capitalize hidden sm:inline">
              {type}
            </span>
          )}

          {step < 4 ? (
            <button
              onClick={() => setStep((s) => Math.min(4, s + 1))}
              disabled={!canAdvance()}
              className={cn(
                "flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-lg transition-colors",
                canAdvance()
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              )}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isComplete}
              className={cn(
                "flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-lg transition-colors",
                isComplete
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              )}
            >
              <Check className="w-4 h-4" />
              Create date
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
