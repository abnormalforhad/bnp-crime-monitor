import React from 'react';
import { FileText, MapPin, Calendar, RefreshCw } from 'lucide-react';
import { StatCard } from '../types';

const Stats: React.FC = () => {
  const stats: StatCard[] = [
    {
      label: "Total Incidents",
      value: "12",
      icon: FileText,
      colorClass: "bg-gradient-to-br from-red-50 to-red-100 border-red-200",
      iconBgClass: "bg-red-200",
      textClass: "text-red-700"
    },
    {
      label: "Locations",
      value: "8",
      icon: MapPin,
      colorClass: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200",
      iconBgClass: "bg-orange-200",
      textClass: "text-orange-700"
    },
    {
      label: "This Week",
      value: "12",
      icon: Calendar,
      colorClass: "bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200",
      iconBgClass: "bg-yellow-200",
      textClass: "text-yellow-800"
    },
    {
      label: "Last Updated",
      value: "Today",
      icon: RefreshCw,
      colorClass: "bg-gradient-to-br from-red-50 to-red-100 border-red-200",
      iconBgClass: "bg-red-200",
      textClass: "text-red-700"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Incident Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className={`p-6 rounded-lg border ${stat.colorClass}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-sm font-medium mb-1 opacity-80 ${stat.textClass}`}>{stat.label}</p>
                    <p className={`text-3xl font-bold ${stat.textClass}`}>{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full ${stat.iconBgClass}`}>
                    <Icon className={`w-6 h-6 ${stat.textClass}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;