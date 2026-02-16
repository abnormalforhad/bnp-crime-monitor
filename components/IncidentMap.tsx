import React from 'react';
import { mapStats } from '../utils/mockData';

const IncidentMap: React.FC = () => {
  return (
    <div className="sticky top-28">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Incident Map</h2>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        {/* Map Container */}
        <div className="relative bg-gradient-to-br from-green-50 to-emerald-100 p-6 h-[400px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-md">
              {/* Simplified SVG Path imitating Bangladesh map from the source */}
              <svg viewBox="0 0 300 400" className="w-full h-full opacity-20">
                <path 
                  d="M150,50 L200,100 L250,150 L240,200 L220,250 L180,300 L140,320 L100,300 L70,250 L60,200 L80,150 L120,100 Z" 
                  fill="currentColor" 
                  className="text-green-600"
                />
              </svg>
              
              {/* Map Dots */}
              <div className="absolute inset-0">
                {mapStats.map((stat, idx) => (
                  <button
                    key={idx}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all hover:scale-110"
                    style={{ top: stat.top, left: stat.left }}
                    title={`${stat.location}: ${stat.count} incidents`}
                  >
                    <div className={`w-8 h-8 rounded-full shadow-lg flex items-center justify-center border-2 border-white ${stat.colorClass}`}>
                      <span className="text-white text-xs font-bold">{stat.count}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Location List */}
        <div className="p-4 border-t border-gray-200 max-h-64 overflow-y-auto custom-scrollbar">
          <h3 className="font-semibold text-gray-900 mb-3 text-sm">Incidents by Location</h3>
          <div className="space-y-2">
            {mapStats.map((stat, idx) => (
              <button 
                key={idx}
                className="w-full flex items-center justify-between p-3 rounded-lg transition-all cursor-pointer bg-gray-50 hover:bg-gray-100 border border-transparent"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${stat.colorClass}`}></div>
                  <span className="font-medium text-sm text-gray-700">{stat.location}</span>
                </div>
                <span className="text-sm font-bold text-gray-600">{stat.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-2">Map Legend</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <span className="text-gray-600">High incident area</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
            <span className="text-gray-600">Moderate incident area</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
            <span className="text-gray-600">Low incident area</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentMap;