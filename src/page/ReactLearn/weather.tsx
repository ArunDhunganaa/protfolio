import { useState, useEffect, useCallback } from 'react';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API;

type Unit = 'metric' | 'imperial';

interface WeatherData {
  name: string;
  dt: number;
  sys: { country: string };
  weather: { main: string; description: string }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    pressure: number;
  };
  wind: { speed: number };
  visibility: number;
}

const weatherIcons: Record<string, string> = {
  Clear: '☀️',
  Clouds: '☁️',
  Rain: '🌧️',
  Drizzle: '🌦️',
  Thunderstorm: '⛈️',
  Snow: '❄️',
  Mist: '🌫️',
  Fog: '🌫️',
  Haze: '🌫️',
  Smoke: '🌫️',
  Dust: '💨',
  Sand: '💨',
  Ash: '🌋',
  Squall: '🌬️',
  Tornado: '🌪️',
};

const weatherBg: Record<string, string> = {
  Clear: 'from-amber-50 to-orange-100',
  Clouds: 'from-slate-100 to-gray-200',
  Rain: 'from-blue-100 to-indigo-100',
  Drizzle: 'from-sky-100 to-blue-100',
  Thunderstorm: 'from-purple-100 to-slate-200',
  Snow: 'from-sky-50 to-white',
  default: 'from-gray-50 to-gray-100',
};

const POPULAR_CITIES = [
  'Kathmandu',
  'London',
  'Tokyo',
  'New York',
  'Sydney',
  'Paris',
];

interface StatCardProps {
  label: string;
  value: number | string;
  unit: string;
}

function StatCard({ label, value, unit }: StatCardProps) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-gray-200 bg-white/50 p-3 backdrop-blur-sm sm:p-4">
      <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase sm:text-xs">
        {label}
      </p>
      <p className="text-base leading-none font-semibold text-gray-900 sm:text-lg">
        {value}
        <span className="ml-1 text-xs font-normal text-gray-400 sm:text-sm">
          {unit}
        </span>
      </p>
    </div>
  );
}

export default function Weather() {
  const [city, setCity] = useState<string>('Kathmandu');
  const [query, setQuery] = useState<string>('Kathmandu');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [unit, setUnit] = useState<Unit>('metric');

  const fetchWeather = useCallback(
    async (cityName: string) => {
      if (!cityName.trim()) return;
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=${unit}`,
        );
        if (!res.ok) {
          if (res.status === 404) throw new Error('City not found.');
          throw new Error('Something went wrong.');
        }
        const data: WeatherData = await res.json();
        setWeather(data);
      } catch (err) {
        setError((err as Error).message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    },
    [unit],
  );

  useEffect(() => {
    fetchWeather(city);
  }, [city, unit, fetchWeather]);

  const handleSearch = () => {
    if (query.trim()) setCity(query.trim());
  };

  const main = weather?.weather?.[0]?.main ?? 'default';
  const bg = weatherBg[main] ?? weatherBg.default;
  const icon = weatherIcons[main] ?? '🌡️';
  const tempUnit = unit === 'metric' ? '°C' : '°F';
  const windUnit = unit === 'metric' ? 'm/s' : 'mph';

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <header className="border-b bg-white px-4 py-4 md:px-6">
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Weather
          </h2>
          <button
            onClick={() =>
              setUnit((u) => (u === 'metric' ? 'imperial' : 'metric'))
            }
            className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-bold transition-all hover:bg-gray-50 active:scale-95"
          >
            {unit === 'metric' ? '°C → °F' : '°F → °C'}
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-6 md:py-10">
        <div className="flex flex-col gap-6">
          <div className="flex gap-2">
            <input
              className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm transition-all focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Search city..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button
              onClick={handleSearch}
              disabled={loading}
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 active:scale-95 disabled:opacity-50"
            >
              {loading ? '...' : 'Search'}
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {POPULAR_CITIES.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setQuery(c);
                  setCity(c);
                }}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
                  city === c
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-400'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          {loading && (
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-gray-300 p-12">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
              <p className="text-sm text-gray-500">Loading forecast...</p>
            </div>
          )}

          {weather && !loading && (
            <div
              className={`bg-linear-to-br ${bg} overflow-hidden rounded-3xl border border-gray-200 shadow-sm`}
            >
              <div className="flex flex-col justify-between gap-6 p-6 sm:flex-row sm:items-center md:p-8">
                <div>
                  <p className="mb-1 text-xs font-bold tracking-widest text-gray-500 uppercase opacity-70">
                    {weather.sys?.country}
                  </p>
                  <h2 className="mb-1 text-4xl font-bold text-gray-900 md:text-5xl">
                    {weather.name}
                  </h2>
                  <p className="text-base text-gray-600 capitalize">
                    {weather.weather?.[0]?.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-0">
                  <div className="text-5xl md:text-7xl">{icon}</div>
                  <div className="text-right">
                    <p className="text-5xl font-bold text-gray-900 md:text-6xl">
                      {Math.round(weather.main?.temp)}
                      {tempUnit}
                    </p>
                    <p className="text-sm font-medium text-gray-500">
                      Feels like {Math.round(weather.main?.feels_like)}
                      {tempUnit}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 px-6 pb-6 md:grid-cols-4 md:px-8 md:pb-8">
                <StatCard
                  label="Humidity"
                  value={weather.main?.humidity}
                  unit="%"
                />
                <StatCard
                  label="Wind"
                  value={weather.wind?.speed}
                  unit={windUnit}
                />
                <StatCard
                  label="Pressure"
                  value={weather.main?.pressure}
                  unit="hPa"
                />
                <StatCard
                  label="Visibility"
                  value={
                    weather.visibility
                      ? (weather.visibility / 1000).toFixed(1)
                      : '—'
                  }
                  unit="km"
                />
              </div>

              <div className="flex flex-wrap gap-4 border-t border-gray-200/50 bg-white/30 px-6 py-4 text-sm md:px-8">
                <span className="text-gray-600">
                  High{' '}
                  <span className="font-bold text-gray-900">
                    {Math.round(weather.main?.temp_max)}
                    {tempUnit}
                  </span>
                </span>
                <span className="text-gray-600">
                  Low{' '}
                  <span className="font-bold text-gray-900">
                    {Math.round(weather.main?.temp_min)}
                    {tempUnit}
                  </span>
                </span>
                <span className="ml-auto text-xs text-gray-500 italic">
                  Updated{' '}
                  {new Date(weather.dt * 1000).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
