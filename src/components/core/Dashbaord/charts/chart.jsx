import { useState } from 'react';
import { Bar, Pie, Scatter } from 'react-chartjs-2';
import 'chart.js/auto'; // Import Chart.js automatically

// Added cities from states like Maharashtra and Karnataka
const initialLocations = [
  { name: 'Delhi', intensity: 0.9, temperature: 42, population: 19000000 },
  { name: 'Mumbai', intensity: 0.8, temperature: 38, population: 12400000 },
  { name: 'Pune', intensity: 0.7, temperature: 36, population: 3500000 },
  { name: 'Bangalore', intensity: 0.6, temperature: 34, population: 8430000 },
  { name: 'Chennai', intensity: 0.7, temperature: 40, population: 7080000 },
  { name: 'Kolkata', intensity: 0.5, temperature: 39, population: 14800000 },
  { name: 'Nagpur', intensity: 0.65, temperature: 43, population: 2400000 },
  { name: 'India (Whole)', intensity: 0.65, temperature: 35, population: 1380000000 },
];

const Chart = () => {
  const [selectedLocation, setSelectedLocation] = useState('India (Whole)');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered locations based on search
  const filteredLocations = initialLocations.filter((location) =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Data for Pie Chart (heat intensity distribution)
  const pieData = {
    labels: filteredLocations.map((loc) => loc.name),
    datasets: [
      {
        data: filteredLocations.map((loc) => loc.intensity),
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(234, 90, 90, 0.7)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  // Data for Bar Chart (urban heat effect across locations)
  const barData = {
    labels: filteredLocations.map((loc) => loc.name),
    datasets: [
      {
        label: 'Heat Intensity (%)',
        data: filteredLocations.map((loc) => loc.intensity * 100),
        backgroundColor: 'rgba(75, 192, 192, 0.7)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Data for Scatter Chart (showing heat intensity vs temperature or population)
  const scatterData = {
    datasets: [
      {
        label: 'Heat Intensity vs Temperature',
        data: filteredLocations.map((loc) => ({
          x: loc.temperature,
          y: loc.intensity * 100,
        })),
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'Heat Intensity vs Population',
        data: filteredLocations.map((loc) => ({
          x: loc.population / 1000000, // scale down population
          y: loc.intensity * 100,
        })),
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-800 p-6" 
    >
      <h1 className="text-4xl text-yellow-500 font-bold text-center mb-6">Heatwave and Urban Heat Effect Dashboard</h1>

      {/* Search and Location Section */}
      <div className="mb-6 flex flex-col items-center">
        <input
          type="text"
          placeholder="Search for a location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4 px-4 py-2 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring focus:ring-yellow-500"
        />
        <div className="flex flex-wrap justify-center space-x-4">
          {filteredLocations.map((location) => (
            <button
              key={location.name}
              onClick={() => setSelectedLocation(location.name)}
              className={`px-4 py-2 rounded-lg font-bold ${
                selectedLocation === location.name
                  ? 'bg-yellow-500 text-slate-800'
                  : 'bg-slate-600 text-white hover:bg-slate-500'
              }`}
            >
              {location.name}
            </button>
          ))}
        </div>
      </div>

      {/* Heat Intensity Overview (Pie Chart) */}
      <div className="mb-10">
        <h2 className="text-2xl text-white text-center font-semibold mb-4">Heat Intensity Distribution</h2>
        <div className="max-w-lg mx-auto bg-slate-700 p-6 rounded-lg shadow-lg">
          <Pie data={pieData} />
        </div>
      </div>

      {/* Detailed Urban Heat Effect (Bar Chart) */}
      <div className="mb-10">
        <h2 className="text-2xl text-white text-center font-semibold mb-4">Urban Heat Effect for {selectedLocation}</h2>
        <div className="max-w-lg mx-auto bg-slate-700 p-6 rounded-lg shadow-lg">
          <Bar data={barData} />
        </div>
      </div>

      {/* Scatter Chart for Heat Intensity vs Temperature/Population */}
      <div className="mb-10">
        <h2 className="text-2xl text-white text-center font-semibold mb-4">Heat Intensity vs Temperature & Population</h2>
        <div className="max-w-lg mx-auto bg-slate-700 p-6 rounded-lg shadow-lg">
          <Scatter
            data={scatterData}
            options={{
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Temperature (°C) / Population (Millions)',
                    color: '#fff',
                    font: { size: 14 },
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'Heat Intensity (%)',
                    color: '#fff',
                    font: { size: 14 },
                  },
                  ticks: {
                    beginAtZero: true,
                    stepSize: 10,
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
