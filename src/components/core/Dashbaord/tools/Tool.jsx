import React from 'react';

const Tool = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Data Tools</h2>

      {/* Data Upload Tool */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-2">Upload Data</h3>
        <input type="file" className="border rounded p-2 w-full" />
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600 transition-colors duration-200">Upload</button>
      </div>

      {/* Data Processing Options */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-2">Process Data</h3>
        <div className="flex space-x-2">
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-200">Filter</button>
          <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors duration-200">Sort</button>
        </div>
      </div>

      {/* Heat Map Generator */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-2">Generate Heat Map</h3>
        <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition-colors duration-200">Create Heat Map</button>
      </div>

      {/* Graph Customizer */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-2">Customize Graphs</h3>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors duration-200">Customize Chart</button>
      </div>

      {/* Report Generator */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-2">Generate Report</h3>
        <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors duration-200">Create Report</button>
      </div>
    </div>
  );
};

export default Tool;
